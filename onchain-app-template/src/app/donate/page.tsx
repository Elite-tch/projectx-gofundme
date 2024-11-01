"use client";

import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
import laptop from "../../assets/laptop.jpg";
import medicin2 from "../../assets/medicin2.jpg";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import Link from "next/link";
import InitiativeCard from "src/components/InitiativeCard";
import axios from "axios";
import { useLoader } from "src/components/Loader/Loadercontext";
import { initiativeFactoryABI, initiativeStorageABI } from "src/utils/abi";
import { useAccount, useReadContracts, useWriteContract } from "wagmi";
import { formatEther, parseEther } from "ethers";
import { useModal } from "src/components/Modal/Modalcontext";
import { parseError } from "src/utils/errors";

interface Item {
    title?: string;
    description?: string;
    initiativeFounder?: string;
    initiativeAmountRaised?: string;
    goal?: string;
    id?: string;
}

function Donate() {
    const account = useAccount();
    const { writeContractAsync } = useWriteContract();

    const { setIcon, setIsShown, setMessage } = useModal();
    const { setIsLoading } = useLoader();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);

    const [itemsFromAPI, setItemsFromAPI] = useState<[] | null>(null);
    const [contractAddresses, setContractAddresses] = useState<string[]>([]);
    const [storageAddresses, setstorageAddresses] = useState<string[]>([]);

    const [exploreResults, setCombinedResults] = useState<[]>([]);

    const [funding, setFunding] = useState("");

    const handleFundingChange = (event: any) => {
        const inputValue = event.target.value;

        const isValid = /^\d+(\.\d+)?$/.test(inputValue);

        if (isValid) {
            setFunding(inputValue);
        } else {
            console.error("Invalid input");
        }
    };

    const items = [
        {
            image: laptop,
            label: "help frank get a laptop for final year studies",

            extralabel:
                "We are seeking your support to help Frank, a dedicated final-year student in electronics engineering to acquire a laptop essential for his academic success. Despite his resilience and commitment to excellence, Frank currently lacks the technology needed to complete assignments, access online resources, and collaborate with peers effectively. We aim to raise 1500 to purchase a reliable laptop for him. Your contributions, no matter how small, can make a significant difference in his life. ",
            bgColor: "bg-slate-300",
            progress: "70",
            raised: "1000",
        },
        {
            image: medicin2,
            label: "Help Mary pay for her Kidney Transplant",
            extralabel:
                "We are reaching out to seek your support in helping Mary cover the costs of her kidney transplant. Mary is facing a critical health challenge and urgently needs this life-saving procedure. The expenses associated with the transplant are significant, and your contributions can make a meaningful impact on her journey to recovery.",
            bgColor: "bg-slate-300",
            progress: "40",
            raised: "3500",
        },
    ];

    useEffect(() => {
        const fetchInitiatives = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL as string}/store`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            AuthenticateProjectX:
                                process.env.NEXT_PUBLIC_API_HEADER,
                        },
                    },
                );

                // console.log(response);

                const mappedInitiatives =
                    response.data.initiatives.length > 0
                        ? response.data.initiatives.map((initiative: any) => ({
                              ...initiative,
                              id: initiative._id,
                              _id: undefined,
                          }))
                        : [];

                setItemsFromAPI(mappedInitiatives);
            } catch (error) {
                console.log(error);
                setItemsFromAPI([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchInitiatives();
    }, []);

    useEffect(() => {
        if (!itemsFromAPI) return;
        if (itemsFromAPI.length > 0) {
            const addresses = [
                ...new Set(
                    itemsFromAPI
                        .map((initiative: any) => initiative.user_address)
                        .filter((address) => address !== undefined),
                ),
            ];
            setContractAddresses(addresses);
        }
    }, [itemsFromAPI]);

    const getInitiativeContracts = contractAddresses.map(
        (address) =>
            ({
                address: `0x${process.env.NEXT_PUBLIC_METROFUND_ARB_SEPOLIA as string}`,
                args: [address],
                abi: initiativeFactoryABI,
            }) as const,
    );

    const { data: contractResults } = useReadContracts({
        contracts: getInitiativeContracts.map((contract) => ({
            ...contract,
            functionName: "getFounderInitiatives",
        })),
    });

    useEffect(() => {
        if (contractResults) {
            console.log(contractResults);
            const combinedResults: any = [];
            const seenIds = new Set(); // To track unique IDs

            const filteredContractResults = contractResults.filter(
                (i) => i.status == "success",
            );

            filteredContractResults.flatMap((contract: any) => {
                contract.result.map((result: any) => {
                    combinedResults.push(result);
                });
            });

            setstorageAddresses(combinedResults);
        }
    }, [contractResults]);

    const getStorageContracts = storageAddresses.map(
        (address) =>
            ({
                address: `0x${address.substring(2)}`,
                abi: initiativeStorageABI,
            }) as const,
    );

    const { data: storageContractResults } = useReadContracts({
        contracts: getStorageContracts.map((contract) => ({
            ...contract,
            functionName: "getInitiative",
        })),
    });

    useEffect(() => {
        if (storageContractResults) {
            const combinedResults: any = [];
            const seenIds = new Set(); // To track unique IDs

            const filteredContractResults = storageContractResults.filter(
                (i) => i.status == "success",
            );

            filteredContractResults.flatMap((result: any) => {
                const campaignId = result.result.initiativeMetadata.toString();

                const campaign: any = itemsFromAPI?.find(
                    (c: any) => c.id === String(campaignId).substring(2),
                );

                if (campaign) {
                    const id = String(campaignId).substring(2);

                    if (!seenIds.has(id)) {
                        seenIds.add(id);

                        combinedResults.push({
                            goal: result.result.initiativeGoal,
                            initiativeAmountRaised:
                                result.result.initiativeAmountRaised,
                            title: campaign.title,
                            description: campaign.description,
                            id: id,
                            initiativeFounder: result.result.initiativeFounder,
                            initiativeAddress: result.result.initiativeAddress,
                        });
                    }
                }
            });

            setCombinedResults(combinedResults);
        }
    }, [storageContractResults]);

    const supportInitiative = async (
        e: React.FormEvent<HTMLFormElement>,
        initiative: any,
    ) => {
        e.preventDefault();
        console.log(initiative);
        setIsLoading(true);

        try {
            const result = await writeContractAsync({
                abi: initiativeStorageABI,
                address: `0x${String(initiative.initiativeAddress).substring(
                    2,
                )}`,
                account: account.address,
                functionName: "supportInitiative",
                value: parseEther(funding),
            });
            console.log(result);

            if (result) {
                setIsLoading(false);
                setIcon("yes");
                setMessage(
                    "Initiative creation successful. View on profile page",
                );
                setIsShown(true);
                return;
            }
        } catch (error) {
            setMessage(`ERROR: ${parseError(error)}`);
            // }
            setIcon("no");
            setIsShown(true);
        }
    };

    const openModal = (item: any) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };

    return (
        <div className="relative mx-10">
            <div className="relative md:mt-52 mt-24 text-left text-6xl font-medium text-gray-800 mb:ml-10 ml:ml-24">
                <h2>Browse fundraisers by category</h2>
            </div>
            <p className="mt-6 text-left w-4/5 text-2xl font-medium text-gray-600">
                People around the world are raising money for what they are
                passionate about.
            </p>
            <div className="flex lg:items-start justify-center lg:justify-start mt-10">
                <Link href="/create">
                    <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-900 transition duration-300 font-medium">
                        Start a MetroFund
                    </button>
                </Link>
            </div>
            {exploreResults.length > 0 ? (
                <section className="grid grid-cols-3 gap-4 pt-4 xl:grid-cols-4">
                    {exploreResults.map((res: any, index) => (
                        <InitiativeCard
                            item={res}
                            onClick={() => openModal(res)}
                            key={index}
                        />
                    ))}
                </section>
            ) : (
                <section className="flex flex-col py-16 justify-center items-center w-full">
                    <p className="text-center font-bold text-xl">
                        Can't get initiatives at this time, connect wallet or
                        reload page.
                    </p>
                </section>
            )}{" "}
            {isModalOpen && selectedItem && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white w-4/5 max-w-3xl p-6 rounded-lg shadow-lg relative">
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-3xl font-bold focus:outline-none"
                            onClick={closeModal}
                        >
                            &times;
                        </button>

                        <div className="max-h-[80vh] overflow-y-auto  px-4">
                            {/* <Image
                                src={selectedItem.image}
                                alt={selectedItem.label}
                                className="w-full h-64 object-cover rounded-md mb-4"
                            /> */}
                            <h3 className="text-2xl font-semibold mb-4">
                                {selectedItem.title}
                            </h3>

                            <p className="text-gray-700 mb-2 font-thin">
                                {selectedItem.description}
                            </p>

                            <form
                                onSubmit={(e) =>
                                    supportInitiative(e, selectedItem)
                                }
                                className="flex flex-col space-y-3"
                            >
                                <input
                                    type="number"
                                    id="funding"
                                    name="goal"
                                    placeholder="0.01"
                                    value={funding}
                                    onChange={handleFundingChange}
                                    required
                                    className="w-3/5 md:w-2/5 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                />
                                <button className="w-3/5 md:w-2/5 justify-center my-4  bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-900 transition duration-300 font-medium">
                                    Support Initiative
                                </button>
                            </form>
                            {/* </Link> */}

                            <div className="w-full bg-gray-200 rounded-full h-1 mt-3">
                                <div
                                    className="bg-purple-500 h-1 rounded-full transition-all duration-300"
                                    style={{
                                        width: `${
                                            (Number(
                                                formatEther(
                                                    selectedItem?.initiativeAmountRaised ??
                                                        "0",
                                                ),
                                            ) /
                                                Number(
                                                    formatEther(
                                                        selectedItem?.goal ??
                                                            "1",
                                                    ),
                                                )) *
                                            100
                                        }%`,
                                    }}
                                ></div>

                                <p className="font-medium">
                                    {Number(
                                        formatEther(
                                            selectedItem?.initiativeAmountRaised ??
                                                "0",
                                        ),
                                    )}{" "}
                                    ETH raised of{" "}
                                    {Number(
                                        formatEther(selectedItem?.goal ?? "0"),
                                    )}{" "}
                                    ETH
                                </p>

                                <p className="font-medium">
                                    Found by{" "}
                                    {selectedItem?.initiativeFounder
                                        ? selectedItem.initiativeFounder ===
                                          account.address
                                            ? "me"
                                            : `${selectedItem.initiativeFounder.slice(0, 6)}...${selectedItem.initiativeFounder.slice(-4)}`
                                        : "0x0"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Donate;
