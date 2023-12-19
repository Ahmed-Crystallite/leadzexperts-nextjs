// Next
import Image from "next/image";
// Media
import heroImage from "media/home/hero.png"
// Components
import CTA from "C/CTA/CTA";
const Hero = () => {
    return (
        <section>
            <div className="md:pt-32 pt-28 pb-12 bg-black">
                <div className="container">
                    <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
                        <div className="px-3">
                            <div className="relative before:bg-[url('../../public/home/line.png')] before:bg-no-repeat before:bg-cover before:bg-center before:absolute before:w-3/5 xl:before:bottom-14 before:bottom-12 xs:before:hidden before:right-12 before:h-2">
                                <h1 className="xl:text-[40px] xl:leading-[50px] md:text-[30px] md:leading-[40px] text-[25px] leading-[35px] text-white font-berlin pb-3">
                                    Social Media Marketing Agency That Markets Your Success!
                                </h1>
                            </div>
                            <h2 className="md:text-[25px] md:leading-[35px] text-xl text-white font-semibold pb-2">
                                Are You Sure You Have Enough Votes Of Confidence from Your Social Media Presence? Is Your Brand a Choice of Millions?
                            </h2>
                            <p className="text-white font-medium md:text-base text-sm md:pb-10 pb-5">LeadzExperts bridges the gap between you and your high-intent customers with creative digital solutions that are ROI-driven, Growth-oriented, and Conversion-focused.</p>
                            <div className="flex flex-wrap items-center gap-3">
                                <CTA
                                    href="/"
                                    text="TALK TO AN EXPERT"
                                    icon=""
                                    hover="hover:text-black hover:bg-white"
                                />
                                <CTA
                                    href="/"
                                    text="(346)-299-2221"
                                    bg="bg-transparent"
                                    border="border-[1px] border-primary"
                                    hover="hover:bg-primary"
                                    iconCss="brightness-0 invert"
                                />
                            </div>
                        </div>
                        <div className="px-3 lg:pt-0 pt-8">
                            <Image src={heroImage} alt="Icons" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;
