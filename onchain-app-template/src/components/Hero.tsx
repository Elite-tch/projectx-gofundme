import React from 'react';

export default function Hero() {
    return (
        <div className="relative bg-gray-50 pt-24">
            <div className="mx-auto max-w-screen-xl px-4 pb-16 md:pb-32 pt-8 md:pt-16 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto md:w-4/5 text-center">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Access the full power of DeFi.
                        <strong className="font-extrabold text-purple-600 pt-4 sm:block">
                            Your home for changing the world
                        </strong>
                    </h1>
                    <div className="flex justify-center flex-col md:flex-row gap-4 items-center md:gap-8 mt-8">
                        <img
                            src="/aave.png"
                            alt="Aave Logo"
                            className="md:h-80 h-44 w-44 object-contain"
                        />
                        <div className="text-left md:text-center">
                            <p className="mt-4 text-base sm:text-xl">
                                Streamline fundraising, marketing, and donor
                                management in one powerful platform—rated for
                                ease of use time and time again. Sign up for
                                free.
                            </p>
                            <div className="mt-8 flex justify-center md:justify-center">
                                <a
                                    className="block w-4/5 md:w-2/5 rounded bg-purple-600 px-8 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                                    href="#"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                        <img
                            src="/aave3.png"
                            alt="Aave 3 Logo"
                            className="md:h-52 hidden md:block object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
