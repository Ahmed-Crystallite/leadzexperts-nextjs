"use client"
// React
import { useState, useRef } from "react";
// Next
import Image from "next/image";
// Media
import Speaker from "media/influencer-marketing/speaker.png"
const Influencer = () => {
    const [showMore, setShowMore] = useState(false);
    const ref = useRef(null)
    const toggleReadMoreLess = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
        setShowMore(!showMore);
    };
    return (
        <div className="lg:py-16 md:py-14 py-12">
            <div className="container">
                <div className="grid lg:grid-cols-2 grid-col-1">
                    <div>
                        <Image src={Speaker} alt="Icons" />
                    </div>
                    <div>
                        <h2 className="lg:text-[45px] md:text-[40px] md:leading-[50px] text-3xl text-black lg:leading-[55px] mb-2 font-berlin font-extrabold">Our <span className="relative font-bold md:before:block before:hidden before:absolute before:bg-[url('../../public/influencer-marketing/line.png')] before:bg-center before:bg-no-repeat before:bg-cover before:w-[100%] before:-bottom-1 before:-right-0 before:h-2">Influencer Marketing</span> Guaranteeing You the Real Influence!</h2>
                        <p className="md:text-base text-sm font-medium mb-3">Influencers complete the puzzle of the modern marketing mix. Yes, indeed. They act like testimonials giving users confidence in their buying decisions. When a top-performing influencer mentions your brand, you get nothing but sales-ready leads!.</p>
                        <p className="md:text-base text-sm font-medium mb-3">However, using this word-of-mouth marketing technique is not a piece of cake; in other words, Influencer marketing management is not everyone's cup of tea. Solution?</p>
                        <p className="md:text-base text-sm font-medium mb-3">An experts-enabled agency that offers fully managed expertise for influencer marketing campaigns and personalized content creation. Why Influencer marketing experts?</p>
                        <p className="md:text-base text-sm font-medium mb-3">Because they collaborate with an extensive network of influencers to craft and share appealing sponsored content that highlights your brand, generates sales, builds customer loyalty, and much more.</p>
                        <div ref={ref} className={`scroll-smooth ${showMore ? "h-[180px] overflow-y-scroll" : ""}`}>
                            <div>
                                {showMore && (
                                    <>
                                        <p className="md:text-base text-sm font-medium">If you are looking for one of those agencies that deliver you these outstanding perks, you are in luck with having us on your side. LeadzExperts breathe life into your sales-deprived business profile through harnessing the power of credible connections with top-performing influencers.</p>
                                        <p className="md:text-base text-sm font-medium my-2">From ideation to delivery, we never leave you hanging. We walk you through the process of influencer marketing strategies and based on your marketing goals, we devise the optimal strategy that is right for your brand. Not to mention, we take care of everything: from formulating creative concepts, strategic planning, campaign realization to tracking the progress of the campaigns.</p>
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
    )
}

export default Influencer;