import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ContentPage() {
    useEffect(() => {
        AOS.init();
    }, []);

    const contentData = [
        {
            id: 1,
            src: "/ab.png",
            title: "Arbitrum",
            description:
                "Ethereum security with speed. Arbitrum is a layer 2 rollup deployed on Aave for secure, fast transactions. ",
            href: "https://arbitrum.io/",
        },

        {
            id: 2,
            src: "/lisk2.png",
            title: "Lisk",
            description:
                "Lisks sidechains ensure scalability, support development, fostering innovation and cross-chain compatibility",
            href: "https://lisk.com/",
        },
        {
            id: 3,
            src: "/avax.png",
            title: "Avalanche",
            description:
                "Fast and cheaper transaction . Earn rewards in AVAX for borrowing or suppling liquidity.",
            href: "https://www.avax.network/",
        },
        {
            id: 4,
            src: "/opt.png",
            title: "Optimism",
            description:
                "Optimism is an EVM  equivalent Rollup chain. it is dwsigned to be fast , simple and secure. ",
            href: "https://www.optimism.io/",
        },
        {
            id: 5,
            src: "/arc.png",
            title: "Aave Arc ",
            description:
                "Aave Arc is a permissioned DeFi market for institutions, wealth managers and private funds. ",
            href: "https://aave.com/",
        },
        {
            id: 6,
            src: "/eth.png",
            title: "Ethereum",
            description:
                "Fast and cheaper transaction . Earn rewards in AVAX for borrowing or suppling liquidity.",
            href: "https://ethereum.org/en/",
        },

        {
            id: 7,
            src: "/base.png",
            title: "Base",
            description:
                " Base is a layer 2 (L2) blockchain solution built by Coinbase . Designed as an Ethereum L2 with the goals of enhancing security.",
            href: "https://www.base.org/",
        },

        {
            id: 8,
            src: "/poly.png",
            title: "Polygon",
            description:
                "Faster transactions and lower fees makes interacting with Aave on polygon perfect for high volume transaction. ",
            href: "https://polygon.technology/",
        },
        {
            id: 9,
            src: "/gen.png",
            title: " Gnosis",
            description:
                "Gnosis Chain is one of the first Ethereum Chains. It ensures that it operates at a much lower cost compared to Ethereum mainnet. ",
            href: "https://www.gnosis.io/",
        },
    ];

    return (
        <div>
            <div className="bg-gray-900 pt-10">
                <div className="md:w-4/5 mx-auto px-6 md:px-0">
                    <div className="text-gray-500 text-sm flex justify-between">
                        <div className="md:w-4/5 w-2/5 ">
                            <h2 className="text-gray-100 md:text-3xl">
                                $20,888,734,456.00
                            </h2>
                            <p>
                                of liquidity in Aave across 8 networks and over
                                15 markets
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 w-3/5 pl-8 md:pl-0 md:w-2/5">
                            <div className="flex items-center gap-2 md:gap-4">
                                <p>Supply</p>
                                <p>Stake</p>
                                <p>Borrow</p>
                                <p className="text-gray-200">Vote</p>
                            </div>
                            <div className="w-full bg-gray-600 rounded-full ">
                                <div
                                    className="bg-blue-900 h-0.5 rounded-full"
                                    style={{ width: "70%" }}
                                ></div>
                            </div>
                            <p>
                                Participate in Aave governance and vote on new
                                proposals, new assets, and protocol upgrades
                            </p>
                        </div>
                    </div>
                    <div className="pt-12">
                        <h2 className="text-2xl text-gray-200">Aave Markets</h2>

                        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-6 mt-8">
                            {contentData.map((item, id) => (
                                <div key={id} className="mb-4 ">
                                    <a
                                        href={item.href}
                                        className=" hover:bg-gray-700"
                                    >
                                        <div
                                            data-aos="zoom-in-up"
                                            className="flex flex-col gap-2 bg-gray-800 py-4 px-6 rounded-xl h-56 animated-hover  shadow-2xl"
                                        >
                                            <img
                                                src={item.src}
                                                alt=""
                                                className="w-12"
                                            />
                                            <h2 className="text-gray-400 text-2xl">
                                                {item.title}
                                            </h2>
                                            <p className="text-sm text-gray-600 ">
                                                {item.description}
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-800 mt-12 px-8 py-6 text-gray-600">
                        <h4 className="text-gray-300 text-lg">
                            And more to come...
                        </h4>
                        <p className="text-sm">
                            Submit a proposal to deploy a new Aave ecosystem.
                            You can learn from the Aave governance.
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center pt-12">
                        <h2 className="text-gray-300 text-center font-bold text-3xl pb-2">
                            Governed by the community
                        </h2>
                        <p className="text-gray-500 text-center text-sm">
                            Aave is a fully decentralized community governed
                            protocol with 166.224 Token holders.
                        </p>
                        <button className=" bg-slate-200 hover:bg-gray-300 py-3 px-6 rounded-xl mt-6">
                            Governors Forum
                        </button>
                        <img
                            src="emoji.png"
                            alt=""
                            className="pt-4 ml:8 md:ml-16 w-4/5"
                        />
                    </div>

                    <div className="pt-4">
                        <h2 className="text-gray-300 text-center  font-bold text-2xl pb-2">
                            How it Works
                        </h2>
                        <div className="flex justify-center flex-col md:flex-row gap-4  md:gap-12 text-gray-400 mx-auto pt-6">
                            <div className="md:w-3/5 shadow-2xl p-6">
                                <h4 className="text-gray-200 font-medium pb-1">
                                    Submit Aave Request for comment
                                </h4>
                                <p className="text-sm">
                                    Discuss with community feedback.
                                </p>
                            </div>

                            <div className="md:w-3/5 shadow-2xl p-6">
                                <h4 className="text-gray-200 font-medium pb-1">
                                    Create a Snapshot
                                </h4>
                                <p className="text-sm">
                                    Cauga community sentiment on a new proposal
                                    through a snapshot
                                </p>
                            </div>

                            <div className="md:w-3/5 shadow-2xl p-6">
                                <h4 className="text-gray-200 font-medium pb-1">
                                    Submit an Aave Request for Improvement
                                </h4>
                                <p className="text-sm">
                                    The proposal is submitted through a GitHub
                                    pull request and the community votes on
                                    approvals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mx-auto items-center md:flex-row flex-col pt-10 md:pt-16 gap-8  w-4/5">
                    <div className="md:w-2/5">
                        <h3 className="text-gray-300 font-semibold text-2xl">
                            Security Contributors
                        </h3>
                        <p className="text-gray-500 pt-1">
                            Audited by the worlds leading security firms,
                            security of the Aave Protocol is the highest
                            priority.
                        </p>
                    </div>
                    <img src="img.png" alt="" className=" md:w-3/5" />
                </div>
                <div className="bg-gray-800 py-20 mt-12 lg:mt-24">
                    <div className="md:w-4/5 mx-auto flex justify-between md:flex-row flex-col gap-12 lg:gap-24 ">
                        <div className="md:w-2/5 ">
                            <div
                                className="border-t border-purple-600 rounded-full px-10 pt-8
"
                            >
                                <div className="border-t border-purple-600 rounded-full md:px-10 px-8 pt-8">
                                    <div className="border-t border-purple-600 rounded-full md:px-16 px-6 ">
                                        <div className="text-gray-300 flex items-center flex-col gap-2 pt-12">
                                            <h3 className="font-bold text-center text-2xl ">
                                                Aave Community Treasury
                                            </h3>
                                            <h1 className="font-bold text-center text-2xl  lg:text-3xl pb-4">
                                                $ 104,748,502
                                            </h1>
                                            <div className="flex items-center text-gray-300 gap-2">
                                                <h3 className="font-semibold">
                                                    AAVE
                                                </h3>
                                                <span className="bg-purple-600 h-2 w-52 rounded"></span>
                                                <p>61.8%</p>
                                            </div>
                                            <div className="flex items-center text-gray-300 gap-2">
                                                <h3 className="font-semibold">
                                                    USDC
                                                </h3>
                                                <span className="bg-purple-600 h-2 w-32 rounded"></span>
                                                <p>13.8%</p>
                                            </div>
                                            <div className="flex items-center text-gray-300 gap-2">
                                                <h3 className="font-semibold">
                                                    USDT
                                                </h3>
                                                <span className="bg-purple-600 h-2 w-24 rounded"></span>
                                                <p>9.8%</p>
                                            </div>

                                            <div className="flex items-center text-gray-300 gap-2">
                                                <h3 className="font-semibold">
                                                    DAI
                                                </h3>
                                                <span className="bg-purple-600 h-2 w-12 rounded"></span>
                                                <p>4.8%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-gray-400 flex flex-col gap-3 mx-6 lg:mx-0 md:w-2/5">
                            <div>
                                <h3>
                                    {" "}
                                    The Aave treasury is composed of the
                                    ecosystem reserve (AAVE tokens) and treasury
                                    collectors which earn fees from :
                                </h3>
                                <ul className="list-disc pl-6 text-sm py-3">
                                    <li>
                                        {" "}
                                        Reserve factor: percentage of protocol
                                        interest paid by borrowers.
                                    </li>
                                    <li>
                                        Instant Liquidity: percentage of fees
                                        from instant liquidity transactions (V3
                                        only)
                                    </li>
                                    <li>
                                        Liquidation fees: percentage of
                                        collateral liquidation bonus (V3 only,
                                        not yet active)
                                    </li>
                                    <li>
                                        Portal fees: paid by bridging protocols
                                        to re-back assets (V3 only, not yet
                                        active)
                                    </li>
                                </ul>
                            </div>
                            <div className="flex lg:items-center gap-4 lg:gap-0 flex-col md:flex-col lg:flex-row">
                                <div className="flex flex-col gap-2">
                                    <h4>60.0%</h4>
                                    <span className="bg-yellow-400 w-72  h-1 lg:w-24"></span>
                                    <div className="flex items-center gap-2">
                                        <span className="bg-yellow-400 rounded-full  h-3 w-3"></span>{" "}
                                        Lisk
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4>45.0%</h4>
                                    <span className="bg-purple-600 w-48 h-1 lg:w-24"></span>
                                    <div className="flex items-center gap-2">
                                        <span className="bg-purple-600 rounded-full  h-3 w-3"></span>{" "}
                                        Polygon
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 ">
                                    <h4>20.0%</h4>
                                    <span className="bg-red-400 w-32 h-1 lg:w-24"></span>
                                    <div className="flex items-center gap-2">
                                        <span className="bg-red-400 rounded-full  h-3 w-3"></span>{" "}
                                        Arbitruim
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h4>12.0%</h4>
                                    <span className="bg-red-700 w-24 h-1 lg:w-16"></span>
                                    <div className="flex items-center gap-2">
                                        <span className="bg-red-700 rounded-full  h-3 w-3"></span>{" "}
                                        Avax
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h4>18.0%</h4>
                                    <span className="bg-blue-400 w-16  h-1 lg:w-16"></span>
                                    <div className="flex items-center gap-2">
                                        <span className="bg-blue-400 rounded-full  h-3 w-3"></span>{" "}
                                        Optimsim
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between mt-5">
                                <div>
                                    <h1>Ecosystem Reserve</h1>
                                    <p className="text-sm">$64,704,540</p>
                                </div>
                                <div>
                                    <h1>Treasury Collector</h1>
                                    <p className="text-sm">$40,704,540</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex w-4/5 mx-auto items-center md:items-start gap-12 md:justify-between md:flex-row flex-col mt-12 md:mt-28">
                    <div className="text-gray-300  md:w-2/5">
                        <h2 className="font-bold text-2xl text-purple-500 pb-2">
                            The help you need, here for you 24/7
                        </h2>
                        <p>
                            MetroSpace award-winning support team is here for
                            you 24/7, with some of the fastest response times
                            and the highest customer satisfaction ratings in the
                            industry.
                        </p>
                        <button
                            type="button"
                            className="px-6 hover:bg-purple-500 mt-8 py-3 bg-purple-600 rounded-full"
                        >
                            Contact us
                        </button>
                    </div>
                    <img src="emoji2.png" alt="" className="w-96" />
                </div>

                <footer className="bg-gray-800">
                    <div className="text-gray-400 text-sm flex py-4 gap-8 items-center justify-center mt-12">
                        <a className="hover:text-gray-300" href="">
                            Privacy Policy
                        </a>
                        <a className="hover:text-gray-300" href="">
                            Terms of Use
                        </a>
                        <a className="hover:text-gray-300" href="">
                            Docs
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    );
}
