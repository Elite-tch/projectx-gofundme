"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleOutline } from "react-icons/io5";
import logo2 from "../assets/metrofund.png";
// import { Link } from "react-router-dom";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import WalletWrapper from "./WalletWrapper";

const Navbar = () => {
    const navLinksLeft = [
        { title: "Home", to: "/" },
        { title: "Donate", to: "/donate" },
    ];
    const navLinksRight = [
        // { title: "About", to: "/about" },
        // { title: "Contact", to: "/contact" },
        { title: "Start a MetroFund", to: "/create" },
    ];

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full mx-auto px-5 lg:px-10 bg-white shadow-md">
            <div className="flex justify-between items-center py-2 lg:py-2">
                <Link href="/">
                    <Image
                        src={logo2}
                        alt="Logo"
                        className="w-32 flex md:w-44"
                    />
                </Link>
                <section className="hidden lg:flex justify-center items-center space-x-4">
                    <Link
                        href="/"
                        className="px-2 py-1 rounded-md hover:bg-gray-50"
                    >
                        Home
                    </Link>
                    <Link
                        href="/donate"
                        className="px-2 py-1 rounded-md hover:bg-gray-50"
                    >
                        Donate
                    </Link>
                    <Link
                        href="/create"
                        className="px-2 py-1 rounded-md hover:bg-gray-50"
                    >
                        Start a MetroFund
                    </Link>
                    <WalletWrapper
                        withWalletAggregator={true}
                        text="Connect Wallet"
                        className="text-sm cursor-pointer font-medium transition duration-300 text-white bg-purple-700 px-4 py-2 rounded-full hover:bg-purple-800"
                    ></WalletWrapper>
                </section>

                <div className="lg:hidden my-auto">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <IoCloseCircleOutline size="1.5rem" />
                        ) : (
                            <GiHamburgerMenu size="1.5rem" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Sliding Menu */}
            <div
                className={`fixed top-0 right-0 h-full bg-white transition-transform duration-300 ease-in-out w-4/5 max-w-xs shadow-lg z-50 px-2 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex justify-end items-center p-5">
                    {/* Logo */}
                    {/* <Link href="/" onClick={() => setIsOpen(false)}>
                        <Image src={logo2} alt="Logo" className="w-28" />
                    </Link> */}

                    {/* Close Button */}
                    <button onClick={() => setIsOpen(false)}>
                        <IoCloseCircleOutline size="2rem" />
                    </button>
                </div>
                <div className="mt-4 flex flex-col space-y-4 justify-center items-center w-full">
                    {[...navLinksLeft, ...navLinksRight].map((link, index) => (
                        <Link
                            key={index}
                            href={link.to === "#" ? "" : link.to}
                            onClick={() => setIsOpen(false)}
                            className={`w-full text-lg font-medium px-4 py-2 transition duration-200 rounded-lg ${
                                link.title === "Start a MetroFund"
                                    ? "text-white bg-purple-700 rounded-full"
                                    : "text-gray-700 bg-gray-200 hover:bg-gray-300"
                            }`}
                        >
                            {link.title}
                        </Link>
                    ))}
                    <WalletWrapper
                        withWalletAggregator={true}
                        text="Connect Wallet"
                        className="w-full cursor-pointer flex font-medium transition duration-300 text-white bg-purple-700 rounded-xl hover:bg-purple-800"
                    ></WalletWrapper>
                </div>
            </div>

            {/* Black Overlay for Mobile Menu */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </div>
    );
};

export default Navbar;
