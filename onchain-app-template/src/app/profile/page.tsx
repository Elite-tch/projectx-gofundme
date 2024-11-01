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

function Profile() {
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
    const [withdrawAmount, setWithdrawAmount] = useState("");

    const handleFundingChange = (event: any) => {
        const inputValue = event.target.value;

        const isValid = /^\d+(\.\d+)?$/.test(inputValue);

        if (isValid) {
            setFunding(inputValue);
        } else {
            console.error("Invalid input");
        }
    };

    const handleWithdrawAmountChange = (event: any) => {
        const inputValue = event.target.value;

        const isValid = /^\d+(\.\d+)?$/.test(inputValue);

        if (isValid) {
            setWithdrawAmount(inputValue);
        } else {
            console.error("Invalid input");
        }
    };

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

                        if (
                            result.result.initiativeFounder == account.address
                        ) {
                            combinedResults.push({
                                goal: result.result.initiativeGoal,
                                initiativeAmountRaised:
                                    result.result.initiativeAmountRaised,
                                title: campaign.title,
                                description: campaign.description,
                                id: id,
                                initiativeFounder:
                                    result.result.initiativeFounder,
                                initiativeAddress:
                                    result.result.initiativeAddress,
                            });
                        }
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
            setIsLoading(false);
        }
    };

    const withdrawFromInitiative = async (initiative: any) => {
        console.log(initiative);

        if (!account.isConnected) {
            setIcon("no");
            setMessage("Connect your Wallet");
            setIsShown(true);
            return;
        }

        if (initiative.initiativeFounder != account.address) {
            setIcon("no");
            setMessage("You did not find this initiative");
            setIsShown(true);
            return;
        }

        setIsLoading(true);
        try {
            const result = await writeContractAsync({
                abi: initiativeStorageABI,
                address: `0x${String(initiative.initiativeAddress).substring(
                    2,
                )}`,
                account: account.address,
                functionName: "withdraw",
                args: [parseEther(withdrawAmount)],
            });
            console.log(result);

            if (result) {
                setIsLoading(false);
                setIcon("yes");
                setMessage("Successfully withdrawn from Initiative.");
                setIsShown(true);
                return;
            }
        } catch (error) {
            setMessage(`ERROR: ${parseError(error)}`);
            // }
            setIcon("no");
            setIsShown(true);
            setIsLoading(false);
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
            {exploreResults.length > 0 ? (
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 xl:grid-cols-4">
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
                        You don't seem to have created any initiative.
                    </p>
                </section>
            )}{" "}
            {isModalOpen && selectedItem && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white w-4/5 max-w-3xl p-6 rounded-lg shadow-lg relative overflow-hidden">
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-3xl transition-all duration-300 font-bold focus:outline-none"
                            onClick={closeModal}
                        >
                            &times;
                        </button>

                        <div className="max-h-[80vh] overflow-y-auto px-4 custom-scrollbar">
                            {/* <Image
                    src={selectedItem.image}
                    alt={selectedItem.label}
                    className="w-full h-64 object-cover rounded-md mb-4"
                /> */}
                            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                                {selectedItem.title}
                            </h3>

                            <p className="text-gray-600 mb-4 leading-relaxed">
                                {selectedItem.description}
                            </p>

                            {selectedItem.initiativeFounder !==
                            account.address ? (
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
                                        className="w-full md:w-2/5 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                    />
                                    <button className="w-full md:w-2/5 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300 font-medium">
                                        Support Initiative
                                    </button>
                                </form>
                            ) : null}

                            {/* Progress Bar */}
                            <div className="w-full bg-gray-200 rounded-full h-1 mt-4">
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
                            </div>

                            <p className="mt-2 font-medium text-gray-700">
                                {Number(
                                    formatEther(
                                        selectedItem?.initiativeAmountRaised ??
                                            "0",
                                    ),
                                )}{" "}
                                ETH raised of{" "}
                                {Number(formatEther(selectedItem?.goal ?? "0"))}{" "}
                                ETH
                            </p>

                            <p className="font-medium text-gray-600 mt-2">
                                Found by{" "}
                                {selectedItem?.initiativeFounder
                                    ? selectedItem.initiativeFounder ===
                                      account.address
                                        ? "me"
                                        : `${selectedItem.initiativeFounder.slice(0, 6)}...${selectedItem.initiativeFounder.slice(-4)}`
                                    : "0x0"}
                            </p>

                            {selectedItem.initiativeFounder ===
                                account.address && (
                                <section className="flex space-x-3">
                                    <input
                                        type="number"
                                        id="funding"
                                        name="goal"
                                        placeholder="0.01"
                                        value={withdrawAmount}
                                        onChange={handleWithdrawAmountChange}
                                        required
                                        className="w-full md:w-2/5 px-4 py-2 border border-gray-300 rounded-md mt-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                    />
                                    <button
                                        onClick={() =>
                                            withdrawFromInitiative(selectedItem)
                                        }
                                        className="w-full md:w-2/5 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300 font-medium mt-4"
                                    >
                                        Withdraw
                                    </button>
                                </section>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Profile;
