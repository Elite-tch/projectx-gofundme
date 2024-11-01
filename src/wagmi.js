import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { arbitrum, mainnet } from "viem/chains";

console.log(process.env.WALLETCONNECT_ID);

export const config = getDefaultConfig({
    appName: "My RainbowKit App",
    projectId: process.env.WALLETCONNECT_ID,
    chains: [arbitrum],
    // ssr: true, // If your dApp uses server side rendering (SSR)
});
