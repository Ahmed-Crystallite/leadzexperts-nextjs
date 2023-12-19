// Next
import Image from "next/image";
// Media
import Boost from "media/facebook-marketing/boost.png"
import Build from "media/facebook-marketing/head.png"
import Increase from "media/facebook-marketing/increase.png"
const Dominent = () => {
    let bussinessAuth = [
        {
            icon: Boost,
            title: "To Boost Brand Awarness",
            text: "With Facebook, you can start conversations with your leads and raise your brand awareness with affordable marketing investment. The more your business is visible on Facebook, the more eyeballs you can control and get the chance to be people’s favorite brand."
        },
        {
            icon: Build,
            title: "To Build Reputation",
            text: "Your prospects support your business by engaging with your Facebook posts and sharing your content with their acquaintances, i.e., friends and family. With shares and interaction, your business builds credibility in the niche and acquires an unbeatable reputation."
        },
        {
            icon: Increase,
            title: "To Increase Future Sales",
            text: "Your future sales are at the hands of your existing clients. By engaging them with your Facebook creative dynamic ads, lead ads, and notifications, you ensure them to get stick with your business. We offer FB marketing services that take your business to the next level and help you succeed in leaps and bounds.."
        },
    ]
    return (
        <div className="py-16">
            <div className="container">
                <div className="text-center w-[85%] mx-auto">
                    <h2 className="text-[40px] leading-[50px] font-berlin font-extrabold text-black mb-2">We Help You Celebrate Business Authority In The Facebook Dominant Era!</h2>
                    <p className="text-lg text-black font-extrabold">Connecting With High-Quality Leads Has Never Been Easier Before Facebook Social Media Marketing</p>
                </div>
                <div className="grid gap-x-16 grid-cols-3 items-center">
                    {bussinessAuth && bussinessAuth.map((e, i) => (
                        <div key={i} className="mt-12">
                            <Image src={e.icon} alt="Icons" className="block mx-auto" />
                            <h4 className="text-xl font-bold py-3 text-center">{e.title}</h4>
                            <p className="font-medium text-[15px] leading-6 text-center">{e.text}</p>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Dominent;
