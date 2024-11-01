import type { Metadata } from "next";
import { NEXT_PUBLIC_URL } from "../config";

import "./global.css";
import "@coinbase/onchainkit/styles.css";
import "@rainbow-me/rainbowkit/styles.css";
import dynamic from "next/dynamic";
import { LoaderProvider } from "src/components/Loader/Loadercontext";
import LoaderWrapper from "src/components/Loader/Loaderwrapper";
import { ModalProvider } from "src/components/Modal/Modalcontext";
import ModalWrapper from "src/components/Modal/Modalwrapper";
import Navbar from "src/components/Navbar";

const OnchainProviders = dynamic(
    () => import("src/components/OnchainProviders"),
    {
        ssr: false,
    },
);

export const viewport = {
    width: "device-width",
    initialScale: 1.0,
};

export const metadata: Metadata = {
    title: "Onchain App Template",
    description: "Built with OnchainKit",
    openGraph: {
        title: "Onchain App Template",
        description: "Built with OnchainKit",
        images: [`${NEXT_PUBLIC_URL}/vibes/vibes-19.png`],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="flex items-center justify-center">
                <LoaderProvider>
                    <LoaderWrapper>
                        <ModalProvider>
                            <ModalWrapper>
                                {/* <Navbar></Navbar> */}
                                <div className="relative w-full">
                                    <OnchainProviders>
                                        {/* <div className="fixed top-0 left-0 w-full z-20"> */}
                                        <Navbar />
                                        {/* </div> */}
                                        {children}
                                    </OnchainProviders>
                                </div>
                            </ModalWrapper>
                        </ModalProvider>
                    </LoaderWrapper>
                </LoaderProvider>
            </body>
        </html>
    );
}
