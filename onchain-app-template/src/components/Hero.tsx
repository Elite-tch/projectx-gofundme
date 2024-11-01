import React from "react";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="relative pt-12 flex items-start">
            <div className="mx-auto max-w-screen-xl px-4 flex flex-col lg:flex-row items-center justify-between">
                <div className="header text-center lg:text-left mx-auto md:w-3/5 z-50">
                    <h1 className="text-2xl font-extrabold sm:text-4xl ">
                        Access the full power of Changing The World Through
                        Fundraising.
                    </h1>
                    <p className="mt-4 text-base sm:text-1xl">
                        Take your fundraising to the next level with our
                        comprehensive crowdfunding platform. Designed for
                        effortless donor engagement and efficient fund
                        management, our platform leverages the power of the
                        Arbitrum blockchain to ensure secure, transparent, and
                        rapid transactions. Start your campaign today with no
                        upfront costs and unlock the tools you need to inspire
                        support and reach your goals seamlessly.
                    </p>
                    <div className="mt-8 flex justify-center lg:justify-start">
                        <Link
                            href="/donate"
                            className="px-6 py-2 rounded-lg font-bold bg-purple-600 text-lg transition-all duration-300 text-white hover:bg-purple-800"
                        >
                            Get started
                        </Link>
                    </div>
                </div>
                <div className="lg:hidden relative bottom-[18rem] mt-8 lg:mt-0 lg:flex-shrink-0">
                    <img
                        src="/arbitrum-arb-logo.png"
                        alt="Aave Logo"
                        className="w-[20rem] opacity-25 object-contain"
                    />
                </div>
                <div className="hidden relative right-[8rem] lg:flex lg:flex-shrink-0">
                    <img
                        src="/arbitrum-arb-logo.png"
                        alt="Aave 3 Logo"
                        className="w-[20rem] object-contain opacity-35"
                    />
                </div>
            </div>
        </div>
    );
}
