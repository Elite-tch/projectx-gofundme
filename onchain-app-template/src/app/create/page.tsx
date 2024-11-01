"use client";

import { useModal } from "src/components/Modal/Modalcontext";
import { useAccount, useWriteContract } from "wagmi";
import axios from "axios";
import { useLoader } from "src/components/Loader/Loadercontext";
import { parseError } from "src/utils/errors";
import { initiativeFactoryABI } from "src/utils/abi";
import { useState } from "react";

const CreateInitiative = () => {
    const account = useAccount();
    const [funding, setFunding] = useState("");

    const { setIcon, setIsShown, setMessage } = useModal();
    const { setIsLoading } = useLoader();
    const { writeContractAsync } = useWriteContract();

    const handleFundingChange = (event: any) => {
        const inputValue = event.target.value;

        const isValid = /^\d+(\.\d+)?$/.test(inputValue);

        if (isValid) {
            setFunding(inputValue);
        } else {
            console.error("Invalid input");
        }
    };

    const convertToBigIntString = (value: any) => {
        const factor = 10 ** 18; // Scale for ether to wei conversion
        const bigintValue = BigInt(Math.floor(parseFloat(value) * factor));
        return bigintValue.toString(); // Return the bigint as a string
    };

    const createinitiative = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent the default form submission
        const formData = new FormData(e.target as HTMLFormElement); // Create FormData from the form element
        const data: any = Object.fromEntries(formData.entries());

        if (!account.isConnected) {
            setIcon("no");
            setMessage("Connect your Wallet");
            setIsShown(true);
            return;
        } else {
            data.user_address = account.address;
        }

        const goalInWei = convertToBigIntString(data.goal);

        console.log(data);
        setIsLoading(true);

        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL as string}/store`,
                {
                    data,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        AuthenticateProjectX:
                            process.env.NEXT_PUBLIC_API_HEADER,
                    },
                },
            );

            const metadataHash = `0x${response.data.result}`;
            const result = await writeContractAsync({
                abi: initiativeFactoryABI,
                address: `0x${
                    process.env.NEXT_PUBLIC_METROFUND_ARB_SEPOLIA as string
                }`,
                account: account.address,
                functionName: "createInititive",
                args: [BigInt(goalInWei), `0x${response.data.result}`],
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

            console.log(response);
        } catch (error: any) {
            if (error.response) {
                setMessage(`ERROR: ${parseError(error.response.data.message)}`);
            } else {
                setMessage(`ERROR: ${parseError(error)}`);
            }
            setIcon("no");
            setIsShown(true);
            // // console.log(error.response.data.message);
            // console.log(parseError(error.response.data.message));
            setIsLoading(false);
        }
    };

    return (
        <div>
            {/* <div className='fixed top-0 left-0 w-full z-10'>
                    <Navbar />
                </div> */}
            <section className="flex items-center pt-28 justify-center min-h-screen">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                        Create a Public Goods Initiative
                    </h2>
                    <form onSubmit={createinitiative} method="POST">
                        <div className="mb-4">
                            <label
                                htmlFor="title"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Initiative Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Enter title"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="description"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                rows={4}
                                placeholder="Describe the initiative"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="funding"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Funding Target (ETH)
                            </label>
                            <input
                                type="number"
                                id="funding"
                                name="goal"
                                placeholder="0.1 ETH"
                                value={funding}
                                onChange={handleFundingChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            />
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="w-full bg-purple-600 text-white py-2 px-4 rounded-md font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                            >
                                Create Initiative
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default CreateInitiative;
