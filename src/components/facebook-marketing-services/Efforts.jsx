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
        <div className="pt-28 pb-16 bg-[#f0f0f0]">
            <div className="container">
                <div className="flex pb-12">
                    <div className="basis-[40%]">
                        <div className="grid w-[90%] gap-4 grid-cols-3 items-center text-center">
                            <div className="border border-[#1c6cd9] py-6 shadow-[2px_2px_20px_#ccc] duration-300 ease-in-out group hover:bg-[#1c6cd9]">
                                <Image src={BadLayout} alt="Icons" className="block mx-auto group-hover:brightness-0 group-hover:invert" />
                                <h5 className="mt-2 min-h-[65px] text-base font-medium group-hover:text-white">Bad <br />Layout</h5></div>
                            <div className="border border-[#1c6cd9] py-6 -mt-24 shadow-[2px_2px_20px_#ccc] duration-300 ease-in-out group hover:bg-[#1c6cd9]">
                                <Image src={Navigation} alt="Icons" className="block mx-auto group-hover:brightness-0 group-hover:invert" />
                                <h5 className="mt-2 min-h-[65px] text-base font-medium group-hover:text-white">Stressful <br />Navigation</h5></div>
                            <div className="border border-[#1c6cd9] py-6 shadow-[2px_2px_20px_#ccc] duration-300 ease-in-out group hover:bg-[#1c6cd9]">
                                <Image src={Response} alt="Icons" className="block mx-auto group-hover:brightness-0 group-hover:invert" />
                                <h5 className="mt-2 min-h-[65px] text-base font-medium group-hover:text-white">Painfully Delayed <br />Response</h5></div>
                            <div className="border border-[#1c6cd9] py-6 shadow-[2px_2px_20px_#ccc] duration-300 ease-in-out group hover:bg-[#1c6cd9]">
                                <Image src={PoorWeb} alt="Icons" className="block mx-auto group-hover:brightness-0 group-hover:invert" />
                                <h5 className="mt-2 min-h-[65px] text-base font-medium group-hover:text-white">Poor Web <br />Content</h5></div>
                            <div className="border border-[#1c6cd9] py-6 -mt-24 shadow-[2px_2px_20px_#ccc] duration-300 ease-in-out group hover:bg-[#1c6cd9]">
                                <Image src={Unappealing} alt="Icons" className="block mx-auto group-hover:brightness-0 group-hover:invert" />
                                <h5 className="mt-2 min-h-[65px] text-base font-medium group-hover:text-white">Unappealing <br />Design</h5></div>
                            <div className="border border-[#1c6cd9] py-6 shadow-[2px_2px_20px_#ccc] duration-300 ease-in-out group hover:bg-[#1c6cd9]">
                                <Image src={Unresponsive} alt="Icons" className="block mx-auto group-hover:brightness-0 group-hover:invert" />
                                <h5 className="mt-2 min-h-[65px] text-base font-medium group-hover:text-white">Unresponsive-<br />-Ness</h5></div>
                        </div>
                    </div>
                    <div className="basis-[60%]">
                        <h2 className="text-[33px] leading-[43px] font-bold"><span className="text-[#006cff]">LeadzExperts-</span> Your Facebook Marketing Company That Transforms Advertising Efforts Into Profits!</h2>
                        <p className="text-[15px] font-medium leading-[24px]">Did you know how many people used Facebook in 2021 in the US? A whopping 302.28 billion. Yes, you read it right! And if you had exploited Facebook for marketing your business, you would probably have captured quality leads and increased online visibility. But, don’t worry. It is better late than never! LeadzExperts, the top-notch Facebook marketing agency, knows to enhance your business advertising game. By digging up every opportunity that brings prospects right to your doorstep, our team of Facebook marketing expert flaunts you with an array of perks that include but are not limited to:</p>
                        {
                            profitList && profitList.map((e,i)=>(
                                <p><Image src={RigthArrow} alt="Icons" width={20} height={20} className="inline-block mr-2"/>{e.text}</p>
                            ))
                        }
                    </div>
                </div>
                <h3 className="text-xl font-extrabold text-center p-6">When done right, Facebook marketing bacteria can make your business go VIRAL! <br /> Our company carries out a holistic approach to managing your Facebook accounts so that you get access to all those quality LEADS you have wished for so long!</h3>
            </div>
        </div>
    )
}

export default Efforts;
