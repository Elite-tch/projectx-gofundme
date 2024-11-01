"use client";
import Image from "next/image";
import { formatEther } from "ethers";
import { useAccount } from "wagmi";

interface InitiativeCardProps {
    item?: {
        title?: string;
        description?: string;
        initiativeFounder?: string;
        initiativeAmountRaised?: string;
        goal?: string;
        id?: string;
    };
    onClick: () => void;
}

const InitiativeCard: React.FC<InitiativeCardProps> = ({ item, onClick }) => {
    const account = useAccount();

    return (
        <div
            className="flex flex-col bg-gray-100 text-gray-950 sm:flex-row px-6 py-6 shadow-lg items-center w-full mx-auto rounded-lg cursor-pointer transition-all duration-300 hover:bg-slate-200"
            onClick={onClick}
        >
            {/* <div className="w-44 h-44 sm:w-full sm:h-64 mr-4">
        <Image
            src={item.image}
            alt={`${item.title} Icon`}
            className="w-full h-full object-cover rounded-xl"
        />
    </div> */}

            <div className="text-sm font-medium text-left text-gray-700 w-full space-y-2">
                {/* Title with overflow handling */}
                <p className="truncate font-bold text-lg">{item?.title}</p>

                {/* Progress Bar */}
                <div className="w-full bg-gray-300 rounded-full h-2 mt-3">
                    <div
                        className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                        style={{
                            width: `${
                                (Number(
                                    formatEther(
                                        item?.initiativeAmountRaised ?? "0",
                                    ),
                                ) /
                                    Number(formatEther(item?.goal ?? "1"))) *
                                100
                            }%`,
                        }}
                    ></div>
                </div>

                <p className="font-medium">
                    {Number(formatEther(item?.initiativeAmountRaised ?? "0"))}{" "}
                    ETH raised of {Number(formatEther(item?.goal ?? "0"))} ETH
                </p>

                <p className="font-medium">
                    Found by{" "}
                    {item?.initiativeFounder
                        ? item.initiativeFounder === account.address
                            ? "me"
                            : `${item.initiativeFounder.slice(0, 6)}...${item.initiativeFounder.slice(-4)}`
                        : "0x0"}
                </p>
            </div>
        </div>
    );
};

export default InitiativeCard;
