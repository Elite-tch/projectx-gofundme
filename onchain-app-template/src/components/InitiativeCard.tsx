"use client";
import Image from "next/image";
import { formatEther } from "ethers";

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
    return (
        <div
            className="flex sm:flex-col items-center sm:items-center w-full mx-auto rounded-md transition-transform transform cursor-pointer"
            onClick={onClick}
        >
            {/* <div className="w-44 h-44 sm:w-full sm:h-64 mr-4">
                <Image
                    src={item.image}
                    alt={`${item.title} Icon`}
                    className="w-full h-full object-cover rounded-xl"
                />
            </div> */}
            <div className="text-sm font-medium text-left sm:text-left mt-2 sm:mt-4 text-gray-700">
                {item?.title}

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-1 mt-3">
                    <div
                        className="bg-purple-500 h-1 rounded-full transition-all duration-300"
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

                    <p className="font-medium">
                        {Number(
                            formatEther(item?.initiativeAmountRaised ?? "0"),
                        )}{" "}
                        ETH raised of {Number(formatEther(item?.goal ?? "0"))}{" "}
                        ETH
                    </p>

                    <p className="font-medium">
                        Found by{" "}
                        {item?.initiativeFounder
                            ? `${item.initiativeFounder.slice(0, 6)}...${item.initiativeFounder.slice(-4)}`
                            : "0x0"}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InitiativeCard;
