// Next
import Image from "next/image";
// Media
import HeroImg from "media/social-media-advertising/hero.png"
import CTA from "../CTA/CTA";
const Hero = () => {
    return (
        <div className="md:pt-32 pt-28 pb-12 bg-[url('../../public/social-media-advertising/hero-sma.png')] bg-center bg-no-repeat bg-cover">
            <div className="container">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-y-10 md:gap-x-20 items-center">
                    <div className="text-white">
                        <h1 className="lg:text-[50px] lg:leading-[60px] md:text-[40px] md:leading-[50px] text-3xl font-extrabold font-berlin md:mb-3 mb-2">Social Media  <br className="lg:block hidden" /><span className="relative md:before:block before:hidden before:absolute before:bg-[url('../../public/social-media-advertising/line.png')] before:bg-center before:bg-no-repeat before:bg-cover before:w-80 before:-bottom-2 before:-right-12 before:h-2">Advertising</span> Services</h1>
                        <h2 className="md:text-2xl text-xl font-medium md:mb-3 mb-2">That Connects You with High-intent <br className="lg:block hidden" /> Shoppers!</h2>
                        <p className="md:text-base text-sm font-normal md:mb-3 mb-2">LeadzExperts, the experts in capturing high-quality LEADS for you, offers you the AMPLE chance to fine-tune your marketing efforts with the push of SOCIAL MEDIA ADVERTISING.</p>
                        <p className="md:text-base text-sm font-normal md:mb-3 mb-2">Confused between MARKETING and ADVERTISING? Why worry when we are here to wash away your concerns in a hurry!</p>
                        <p className="md:text-base text-sm font-normal md:mb-3 mb-2">Call us and arouse your sleeping customers with our blossoming Social Media marketing services.</p>
                        <div className="flex flex-wrap gap-x-1">
                            <CTA
                                text="TALK TO AN EXPERT"
                                icon="" bg="bg-[#09b9f9]"
                                hover="hover:bg-white hover:text-black"
                                margin="md:mb-0 mb-4"
                            />
                            <CTA
                                text=" (346)-299-2221"
                                bg="bg-transparent"
                                border="border border-[#09b9f9]"
                                hover="hover:bg-[#09b9f9]"
                                iconCss="group-hover:brightness-0 group-hover:invert"
                            />
                        </div>
                    </div>
                    <div className="">
                        <Image src={HeroImg} alt="Icons" width={728} height={696} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
