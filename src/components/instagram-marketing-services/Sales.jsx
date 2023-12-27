// Next
import Image from "next/image";
// Components
import CTA from "../CTA/CTA";
// Media
import Mobile from "media/instagram-marketing/instagram.png"
const Sales = () => {
    return (
        <div className="py-16 bg-[#f0f0f0]">
            <div className="container">
                <div className="grid grid-cols-2 items-center">
                    <div className="">
                        <h2 className="text-[40px] leading-[50px] text-black font-extrabold mb-4">Time to Bump Up Your <br className="lg:block hidden" /> Followers and Excite Your Sales with Experts!</h2>
                        <p className="text-sm pb-4 font-medium text-black">Believe it or not, Instagram has taken the marketing world by storm. This is where Millennials and Gen-Z sit, relax and ENJOY. Long story short, Instagram has become the place of sanctuary for people to spend most of their time.</p>
                        <p className="text-sm pb-4 font-medium text-black">The platform has exploded in popularity, and its fever has spread like wildfire. We are not cutting jokes; statistics say so! Being the future-forward digital marketing agency, LeadzExperts decided to exploit the buzzed-about forum for nailing its clients’ marketing goals. To help businesses be a cut above the rest, we set up a team of intuitive minds that loves accepting the challenges coming their way.</p>
                        <p className="text-sm pb-4 font-medium text-black">Our marketing perfectionists embrace holistic and lateral thinking to create advertising strategies and creative campaigns. Thousands of outstanding Instagram marketing projects go to our credit, and you know what, all our clients are enjoying impressive GROWTH!</p>
                        <p className="text-sm pb-4 font-medium text-black">No matter the size and shape of your brand, we are here to help you STAND. With ROI-driven and tailored Instagram advertising services, we turn digital challenges into creative marketing opportunities. When partnering with us, expect to meet chill HUMANS, who make ideas HAPPEN and offer killer RESULTS!</p>
                        <p className="text-sm pb-4 font-medium text-black">Don't You Want to Transform Your Brand from Drab to Fab in A Flash? LeadzExperts Can Turn This Dream into A Tangible Reality. You Just Need Let Us Oversee Your Business with The Instagram Marketing Lens and VOILA. No One Can Stop You Now from Witnessing the Astronomical Rise in Your Following BASE!</p>
                        <CTA
                            text="GET A FREE QUOTE"
                            icon=""
                            bg="bg-[#fe9e3f]"
                            color="text-white"
                            hover="hover:bg-black hover:text-[#fe9e3f]"
                            width="w-max"
                            padding="px-4"
                            height="h-10"
                            margin="mt-4"
                            rounded="rounded-lg"
                            textSize="text-sm"
                        />
                    </div>
                    <div className="">
                        <Image src={Mobile} alt="Icons" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sales;
