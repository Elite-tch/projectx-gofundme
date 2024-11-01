"use client";
import Footer from "src/components/Footer";
import TransactionWrapper from "src/components/TransactionWrapper";
import WalletWrapper from "src/components/WalletWrapper";
import { ONCHAINKIT_LINK } from "src/links";
import OnchainkitSvg from "src/svg/OnchainkitSvg";
import { useAccount } from "wagmi";
import LoginButton from "../components/LoginButton";
import SignupButton from "../components/SignupButton";
import Navbar from "src/components/Navbar";
import Hero from "src/components/Hero";
import ContentPage from "src/components/ContentPage";

export default function Page() {
    const { address } = useAccount();

    return (
        <div className="relative w-full md:mt-32 mt-24 text-left text-6xl font-medium text-gray-800 mb:ml-10 ml:ml-24">
            <Hero />
            <ContentPage />
        </div>
    );
}
