"use client"
// React
import { useState, useRef } from "react";
// Media
import facebookPage from "media/home/fbPage.png"
import checkIcon from "media/home/check-icon.png"
import arrowIcon from "media/home/right-arrow.png"
// Next
import Image from "next/image";
const About = () => {
    const ref = useRef(null)
    let socials = [
        {
            text: "Increasing customer loyalty"
        },
        {
            text: " Boosting user engagement"
        },
        {
            text: "Multiplying the Return on Marketing Investment"
        },
        {
            text: " Driving high-quality traffic to the website"
        },
        {
            text: "Enjoying higher conversion rates"
        },
        {
            text: " Winning more clients"
        },
        {
            text: "Expanding online visibility"
        },
        {
            text: "Strengthening relations with existing clientele"
        },
        {
            text: "And a lot more!"
        },
    ]
    let marketing = [
        {
            text: "Facebook Marketing"
        },
        {
            text: "Instagram Marketing"
        },
        {
            text: "Snapchat Marketing"
        },
        {
            text: "Twitter Marketing"
        },
        {
            text: "LinkedIn Marketing"
        },
        {
            text: "YouTube Marketing"
        },
        {
            text: "Pinterest Marketing"
        },
        {
            text: "TikTok Marketing"
        },

    ]
    const [showMore, setShowMore] = useState(false);

    const toggleReadMoreLess = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
        setShowMore(!showMore);
    };
    return (
        <section>
            <div className="lg:py-14 md:py-10">
                <div className="container">
                    <div className="grid items-center md:grid-cols-2 grid-cols-1">
                        <div className="md:mb-0 mb-4">
                            <Image src={facebookPage} alt="Icons" width={590} height={523} />
                        </div>
                        <div className="">
                            <div className="relative before:bg-[url('../../public/home/line.png')] before:bg-no-repeat before:bg-cover before:bg-center before:absolute before:w-3/4 xl:before:top-11 before:top-8 xs:before:hidden before:left-0 before:h-2">
                                <h2 className="xl:text-[40px] xl:leading-[50px] md:text-[30px] md:leading-[40px] text-[25px] leading-[35px] text-black font-berlin">LeadzExperts Transforming Your Business From Nowhere To Everywhere!</h2>
                            </div>
                            <p className="md:text-base text-sm my-2 text-black">For many, it is just a place to sit, relax and communicate. But ambitious brands see social media forums with a different outlook — the perfect medium to outgrow!</p>
                            <p className="md:text-base text-sm my-2 text-black">Being the top-leading social media marketing company, LeadzExperts offers companies of all sizes to make the best use of SOCIAL for:</p>
                            <div ref={ref} className={`scroll-smooth ${showMore ? "h-[280px] overflow-y-scroll" : ""}`}>
                                <ul>
                                    {
                                        socials && socials.map((e, i) => (
                                            <li key={i} className="flex md:text-base text-sm font-semibold items-center gap-2 mb-2">
                                                <Image src={checkIcon} alt="Icons" />
                                                {e.text}</li>
                                        ))
                                    }
                                </ul>
                                <div>
                                    {showMore && (
                                        <>
                                            <p className="md:text-base text-sm">Of no two opinions, SOCIAL lives in the heart and soul of today's digital marketing landscape. To help enterprises make a unique identity, our innovation-oriented marketing agency has set forth an array of social media marketing solutions. And not to mention, we are successfully making our client's brand a real SUCCESS!</p>
                                            <p className="md:text-base text-sm my-2">With lateral thinking and data-driven insights, we deliver outstanding results that make your business a BRAND in no time. We help you tap into the digital marketing opportunities via:</p>
                                            <ul>
                                                {
                                                    marketing && marketing.map((e, i) => (
                                                        <li key={i} className="flex md:text-base text-sm font-semibold items-center gap-2 mb-2">
                                                            <Image src={arrowIcon} alt="Icons" />
                                                            {e.text}</li>
                                                    ))
                                                }
                                            </ul>
                                            <p className="md:text-base text-sm">Give us a ring to make your business succeed in full swing. Remember, the late you join the bandwagon of social, the more your competitors will blossom!</p>
                                        </>
                                    )}
                                </div>
                            </div>
                            <button onClick={toggleReadMoreLess} className="mt-2 font-semibold">
                                {showMore ? "Read Less" : "Read More"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;
