import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faXTwitter,
    faGithub,
    faDiscord,
} from "@fortawesome/free-brands-svg-icons";

export default function About() {
    return (
        <div className="pt-24">
            <h1 className="text-center font-bold text-2xl mt-12 md:mt-24">
                ABOUT US
            </h1>
            <div className="w-4/5 mx-auto flex md:flex-row flex-col gap-4 md:gap-8 my-4 md:my-8">
                <img src="about2.jpg" alt="" className="md:w-3/5 rounded" />
                <div className="text-sm text-gray-700 md:w-3/5 mx-auto">
                    <p>
                        Welcome to our MetroSpace page! We are a passionate team
                        dedicated in making a difference in the lives of
                        underserved communities, supporting innovative
                        educational programs, providing relief to those affected
                        by natural disasters. We believe that, together, we can
                        create real and lasting change.
                    </p>
                    <p className="pt-3">
                        Our mission is simple to bring hope and resources to
                        those who need it most. Whether we are organizing
                        events, creating awareness, or connecting directly with
                        those who benefit from our support, every step we take
                        is powered by the generosity of people like you.
                    </p>
                    <p className="pt-3">
                        Through this campaign, we are aiming to raise funds for
                        a community center where children can safely learn and
                        grow, medical supplies for frontline workers,
                        educational scholarships for underprivileged youth. Each
                        dollar you contribute goes directly toward making this
                        vision a reality and supports real people with real
                        needs.
                    </p>
                    <p className="pt-3">
                        Thank you for being here, and thank you for believing in
                        the power of community and compassion. We invite you to
                        join us on this journey—your support makes all the
                        difference.
                    </p>
                </div>
            </div>
            <div className="py-8">
                <h2 className="text-center font-bold text-2xl">
                    Meet Our Team
                </h2>
                <div className="grid lg:grid-cols-4 md:grid-cols-3  gap-6 mx-auto w-4/5 pt-8">
                    <div className="flex flex-col items-center gap-2 shadow-2xl pb-6 rounded-lg">
                        <img src="about.jpg" alt="" className=" " />
                        <h3 className="font-bold text-gray-900 pt-3 text-lg">
                            Shedrack Shedrack
                        </h3>
                        <p className="text-gray-700">Frontend Developer</p>
                        <div className="flex gap-6">
                            <a href="">
                                {" "}
                                <FontAwesomeIcon icon={faXTwitter} />{" "}
                            </a>
                            <a href="https://github.com/Elite-tch/projectx-gofundme">
                                {" "}
                                <FontAwesomeIcon icon={faGithub} />{" "}
                            </a>
                            <a href="">
                                {" "}
                                <FontAwesomeIcon icon={faDiscord} />{" "}
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-2 pb-6 shadow-2xl rounded-lg">
                        <img src="about.jpg" alt="" />
                        <h3 className="font-bold text-gray-900 pt-3 text-lg">
                            Shedrack Shedrack
                        </h3>
                        <p className="text-gray-700">Frontend Developer</p>
                        <div className="flex gap-6">
                            <a href="">
                                {" "}
                                <FontAwesomeIcon icon={faXTwitter} />{" "}
                            </a>
                            <a href="https://github.com/Elite-tch/projectx-gofundme">
                                {" "}
                                <FontAwesomeIcon icon={faGithub} />{" "}
                            </a>
                            <a href="">
                                {" "}
                                <FontAwesomeIcon icon={faDiscord} />{" "}
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-2 pb-6 shadow-2xl rounded-lg">
                        <img src="about.jpg" alt="" />
                        <h3 className="font-bold text-gray-900 pt-3 text-lg">
                            Shedrack Shedrack
                        </h3>
                        <p className="text-gray-700">Frontend Developer</p>
                        <div className="flex gap-6">
                            <a href="">
                                {" "}
                                <FontAwesomeIcon icon={faXTwitter} />{" "}
                            </a>
                            <a href="https://github.com/Elite-tch/projectx-gofundme">
                                {" "}
                                <FontAwesomeIcon icon={faGithub} />{" "}
                            </a>
                            <a href="">
                                {" "}
                                <FontAwesomeIcon icon={faDiscord} />{" "}
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-2 pb-6 shadow-2xl rounded-lg">
                        <img src="about.jpg" alt="" />
                        <h3 className="font-bold text-gray-900 pt-3 text-lg">
                            Shedrack Shedrack
                        </h3>
                        <p className="text-gray-700">Frontend Developer</p>
                        <div className="flex gap-6">
                            <a href="">
                                {" "}
                                <FontAwesomeIcon icon={faXTwitter} />{" "}
                            </a>
                            <a href="https://github.com/Elite-tch/projectx-gofundme">
                                {" "}
                                <FontAwesomeIcon icon={faGithub} />{" "}
                            </a>
                            <a href="">
                                {" "}
                                <FontAwesomeIcon icon={faDiscord} />{" "}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
