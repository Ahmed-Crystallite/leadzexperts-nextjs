// Next
import Image from "next/image";
// Media
import Sign from "media/social-media-marketing/sign.png"
import Fun from "media/social-media-marketing/Fun.png"
import CTA from "../CTA/CTA";
const Platforms = () => {
    let speaks = [
        {
            title: "Social Media Is Home to More Than Half Of The Global Population!",
            text: "To date, 4.62 BILLION people have shown up their presence on social media. Did you know what does it mean? 58.6 % population of the entire world is already on social media! WOAH!",
        },
        {
            title: "9/10 Internet Users Are Social Media Users!",
            text: "Yes, you read it right! 9 out of 10 internet users use social media monthly, with another impressive fact that every second witness 13 new users.Isn’t it quite interesting?",
        },
        {
            title: "Facebook Breaks The Records!",
            text: "With 2.910 billion monthly active users, we don’t think you can find your next client anywhere else but Facebook.",
        },
    ]
    let speaksTwo = [
        {
            title: "WhatsApp Has Too Joined The Race!",
            text: "With no less than 2 billion monthly active users, WhatsApp’s has exploded in popularity.",
        },
        {
            title: "Tiktok Usage Literally Rocked!",
            text: "With 1 billion monthly active users, Tiktok has gained massive fame in no time",
        },
        {
            title: "Snapchat Is More Than Story-sharing App; Figures says so!",
            text: "The most buzzed-about social media app, Snapchat, spectated the advertising reach up to 557 million. Way too impressive figures!",
        },
        {
            title: "YouTube’s advertising Reach Is Crazy!",
            text: "Did you know what the potential advertising reach of this video-sharing platform is? It’s a massive 2.562 billion",
        },
    ]
    return (
        <div className="lg:py-16 md:py-14 py-12">
            <div className="container">
                <div className="text-center">
                    <h2 className="lg:text-[50px] lg:leading-[60px] md:text-[40px] md:leading-[50px] text-3xl mb-2 font-berlin font-extrabold text-black">Digit Speaks Why Brand Must Join The <br className="lg:block hidden" /> Marketing Fun On Social Media Platforms!</h2>
                    <p className="md:text-base text-sm text-black font-medium">We live in an internet-dominated era, where more than 70% of the users approach Social Media to learn about the services/products. With this in mind, varying social media platforms become the gold mine for helping businesses access their high-intent customers. LeadzExperts bring you the highly-impressive SMM forums usage statistics that will indeed WOW you!</p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-3 mt-14">
                    <div>
                        {
                            speaks && speaks.map((e, i) => (
                                <div key={i} className="flex justify-center items-start gap-x-4">
                                    <div><Image src={Sign} alt="Icons" /></div>
                                    <div className="w-[100%] mb-5 ">
                                        <h4 className="text-lg leading-6 mb-2 font-extrabold">{e.title}</h4>
                                        <p className="text-base font-medium">{e.text}</p>
                                    </div>
                                </div>
                            ))
                        }
                        <div className="md:flex hidden gap-x-4 justify-center mt-4">
                            <CTA
                                text="TALK TO AN EXPERT"
                                icon=""
                                bg="bg-blue"
                                width="w-max"
                                padding="px-4"
                                hover="hover:bg-black hover:text-white "
                            />
                            <CTA
                                text="CALL NOW"
                                icon=""
                                bg="bg-transparent"
                                width="w-max"
                                padding="px-4"
                                hover="hover:bg-black hover:text-white hover:border-0"
                                border="border border-blue"
                                color="text-blue"
                            />
                        </div>
                    </div>
                    <div>
                        {
                            speaksTwo && speaksTwo.map((e, i) => (
                                <div key={i} className="flex justify-center items-start gap-x-4">
                                    <div><Image src={Sign} alt="Icons" /></div>
                                    <div className="w-[100%] mb-5 ">
                                        <h4 className="text-lg leading-6 mb-2 font-extrabold">{e.title}</h4>
                                        <p className="text-base font-medium">{e.text}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        <Image src={Fun} alt="Icons" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Platforms;
