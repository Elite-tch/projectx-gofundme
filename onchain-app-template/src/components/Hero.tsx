import React from 'react';
import Link from from "next/link";

export default function Hero() {
    return (
        <div className="relative bg-gray-50 h-screen flex items-center">
            <div className="mx-auto max-w-screen-xl px-4 flex flex-col lg:flex-row items-center justify-between">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-extrabold sm:text-4xl">
                        Access the full power of DeFi.
                        <strong className="font-extrabold text-purple-600 pt-4 block">
                            Your home for changing the world
                        </strong>
                    </h1>
                    <p className="mt-4 text-base sm:text-1xl">
                        Streamline fundraising, marketing, and donor
                        management in one powerful platform—rated for
                        ease of use time and time again. Sign up for
                        free.
                    </p>
                    <div className="mt-8 flex justify-center lg:justify-start">
                         <Link
                        href="/donate"
                        className="px-2 py-1 rounded-md hover:bg-gray-50"
                    >
                        Get started
                    </Link>
                    </div>
                </div>
                <div className="mt-8 lg:mt-0 lg:flex-shrink-0">
                    <img
                        src="/aave.png"
                        alt="Aave Logo"
                        className="h-44 w-44 object-contain"
                    />
                </div>
                <div className="hidden lg:flex lg:flex-shrink-0">
                    <img
                        src="/aave3.png"
                        alt="Aave 3 Logo"
                        className="h-52 object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
