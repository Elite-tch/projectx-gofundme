import { useState } from "react";
import Navbar from "../components/Navbar";
import laptop from "../assets/laptop.jpg";
import medicin2 from "../assets/medicin2.jpg";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Donate = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

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

    const openModal = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };

    return (
        <div className="relative mx-10">
            <div className="fixed top-0 left-0 w-full z-20">
                <Navbar />
            </div>

            <div className="relative md:mt-52 mt-24 text-left text-6xl font-medium text-gray-800 mb:ml-10 ml:ml-24">
                <h2>
                    Browse fundraisers <h2> by category</h2>
                </h2>
            </div>
            <ConnectButton />

            <p className="mt-6 text-left w-4/5 text-2xl font-medium text-gray-600">
                People around the world are raising money for what they are
                passionate about.
            </p>

            <div className="flex lg:items-start justify-center lg:justify-start mt-10">
                <Link to="/create">
                    <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-900 transition duration-300 font-medium">
                        Start a MetroFund
                    </button>
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex sm:flex-col items-center sm:items-center w-full mx-auto rounded-md transition-transform transform"
                        onClick={() => openModal(item)}
                    >
                        <div className="w-44 h-44 sm:w-full sm:h-64 mr-4 cursor-pointer">
                            <img
                                src={item.image}
                                alt={`${item.label} Icon`}
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>
                        <p className="text-sm font-medium text-left sm:text-left mt-2 sm:mt-4 text-gray-700">
                            {item.label}

                            {/* Progress Bar */}
                            <div className="w-full bg-gray-200 rounded-full h-1 mt-3">
                                <div
                                    className="bg-purple-500 h-1 rounded-full transition-all duration-300"
                                    style={{ width: `${item.progress}%` }}
                                ></div>

                                <p className="font-medium">{item.raised} Eth</p>
                            </div>
                        </p>
                    </div>
                ))}
            </div>

            {isModalOpen && selectedItem && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white w-4/5 max-w-3xl p-6 rounded-lg shadow-lg relative">
                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-3xl font-bold focus:outline-none"
                            onClick={closeModal}
                        >
                            &times;
                        </button>

                        {/* Modal Content */}
                        <div className="max-h-[80vh] overflow-y-auto">
                            <img
                                src={selectedItem.image}
                                alt={selectedItem.label}
                                className="w-full h-64 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-4">
                                {selectedItem.label}
                            </h3>

                            <p className="text-gray-700 mb-2 font-thin">
                                {selectedItem.extralabel}
                            </p>

                            <Link to="/create">
                                <button className="w-3/5 md:w-2/5 justify-center my-4  bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-900 transition duration-300 font-medium">
                                    Start a MetroFund
                                </button>
                            </Link>

                            {/* Progress Bar */}
                            <div className="w-full bg-gray-200 rounded-full h-1 mt-3">
                                <div
                                    className="bg-purple-500 h-1 rounded-full transition-all duration-300"
                                    style={{
                                        width: `${selectedItem.progress}%`,
                                    }}
                                ></div>
                            </div>
                            <p className="text-gray-700 mb-2">
                                Progress: {selectedItem.progress}%
                            </p>
                            <p className="text-gray-700 font-bold">
                                Raised: {selectedItem.raised} Eth
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Donate;
