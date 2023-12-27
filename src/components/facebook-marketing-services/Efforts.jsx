// Next
import Image from "next/image";
// Media
import BadLayout from "media/facebook-marketing/badLayout.png"
import Navigation from "media/facebook-marketing/navigation.png"
import Response from "media/facebook-marketing/response.png"
import PoorWeb from "media/facebook-marketing/poorWeb.png"
import Unappealing from "media/facebook-marketing/unappealing.png"
import Unresponsive from "media/facebook-marketing/unresponsive.png"
import RigthArrow from "media/facebook-marketing/right.png"
const Efforts = () => {
    const profitList = [
        {
            text: "Interacting with existing customers"
        },
        {
            text: "Winning more clients"
        },
        {
            text: "Building your online authority"
        },
        {
            text: "Stacking up referrals"
        },
        {
            text: "Promoting your offerings"
        },
        {
            text: "Sharing snackable content"
        },
        {
            text: "And what not!"
        },
    ]
    return (
        <div className="lg:pt-28 md:pt-20 py-12 lg:pb-16 mb:pb-14 bg-[#f0f0f0]">
            <div className="container">
                <div className="flex md:flex-nowrap flex-wrap md:pb-12 pb-8">
                    <div className="xl:basis-[40%] lg:basis-[50%] basis-full lg:mb-0 mb-10">
                        <div className="grid lg:w-[90%] w-full gap-4 md:grid-cols-3 grid-cols-2 items-center text-center">
                            <div className="border border-[#1c6cd9] py-6 shadow-[2px_2px_20px_#ccc] duration-300 ease-in-out group hover:bg-[#1c6cd9]">
                                <Image src={BadLayout} alt="Icons" className="block mx-auto group-hover:brightness-0 group-hover:invert" />
                                <h5 className="mt-2 min-h-[65px] text-base font-medium group-hover:text-white">Bad <br />Layout</h5></div>
                            <div className="border border-[#1c6cd9] py-6 lg:-mt-24 shadow-[2px_2px_20px_#ccc] duration-300 ease-in-out group hover:bg-[#1c6cd9]">
                                <Image src={Navigation} alt="Icons" className="block mx-auto group-hover:brightness-0 group-hover:invert" />
                                <h5 className="mt-2 min-h-[65px] text-base font-medium group-hover:text-white">Stressful <br />Navigation</h5></div>
                            <div className="border border-[#1c6cd9] py-6 shadow-[2px_2px_20px_#ccc] duration-300 ease-in-out group hover:bg-[#1c6cd9]">
                                <Image src={Response} alt="Icons" className="block mx-auto group-hover:brightness-0 group-hover:invert" />
                                <h5 className="mt-2 min-h-[65px] text-base font-medium group-hover:text-white">Painfully Delayed <br />Response</h5></div>
                            <div className="border border-[#1c6cd9] py-6 shadow-[2px_2px_20px_#ccc] duration-300 ease-in-out group hover:bg-[#1c6cd9]">
                                <Image src={PoorWeb} alt="Icons" className="block mx-auto group-hover:brightness-0 group-hover:invert" />
                                <h5 className="mt-2 min-h-[65px] text-base font-medium group-hover:text-white">Poor Web <br />Content</h5></div>
                            <div className="border border-[#1c6cd9] py-6 lg:-mt-24 shadow-[2px_2px_20px_#ccc] duration-300 ease-in-out group hover:bg-[#1c6cd9]">
                                <Image src={Unappealing} alt="Icons" className="block mx-auto group-hover:brightness-0 group-hover:invert" />
                                <h5 className="mt-2 min-h-[65px] text-base font-medium group-hover:text-white">Unappealing <br />Design</h5></div>
                            <div className="border border-[#1c6cd9] py-6 shadow-[2px_2px_20px_#ccc] duration-300 ease-in-out group hover:bg-[#1c6cd9]">
                                <Image src={Unresponsive} alt="Icons" className="block mx-auto group-hover:brightness-0 group-hover:invert" />
                                <h5 className="mt-2 min-h-[65px] text-base font-medium group-hover:text-white">Unresponsive-<br />-Ness</h5></div>
                        </div>
                    </div>
                    <div className="xl:basis-[60%] lg:basis-[50%] basis-full">
                        <h2 className="md:text-[33px] text-2xl md:leading-[43px] font-bold mb-2"><span className="text-[#006cff]">LeadzExperts-</span> Your Facebook Marketing Company That Transforms Advertising Efforts Into Profits!</h2>
                        <p className="md:text-[15px] text-sm font-medium md:leading-[24px] mb-5">Did you know how many people used Facebook in 2021 in the US? A whopping 302.28 billion. Yes, you read it right! And if you had exploited Facebook for marketing your business, you would probably have captured quality leads and increased online visibility. But, don’t worry. It is better late than never! LeadzExperts, the top-notch Facebook marketing agency, knows to enhance your business advertising game. By digging up every opportunity that brings prospects right to your doorstep, our team of Facebook marketing expert flaunts you with an array of perks that include but are not limited to:</p>
                        {
                            profitList && profitList.map((e, i) => (
                                <p key={i}><Image src={RigthArrow} alt="Icons" width={20} height={20} className="inline-block mr-2" />{e.text}</p>
                            ))
                        }
                    </div>
                </div>
                <h3 className="lg:text-xl md:text-lg text-base font-extrabold text-center lg:p-6">When done right, Facebook marketing bacteria can make your business go VIRAL! <br className="lg:block hidden" /> Our company carries out a holistic approach to managing your Facebook accounts so that you get access to all those quality LEADS you have wished for so long!</h3>
            </div>
        </div>
    )
}

export default Efforts;
