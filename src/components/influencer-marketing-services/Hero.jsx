import CTA from "../CTA/CTA";

const Hero = () => {
    return (
        <div className="md:pt-32 pt-28 md:pb-28 pb-12 bg-[url('../../public/influencer-marketing/banner.png')] bg-center bg-no-repeat bg-cover">
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="md:col-span-6 col-span-12 text-white">
                        <h1 className="lg:text-[50px] lg:leading-[60px] md:text-[40px] md:leading-[50px] text-3xl font-extrabold font-berlin">Influencer <br className="lg:block hidden" /> Marketing Services</h1>
                        <h2 className="md:text-2xl text-xl font-medium pt-2 pb-5">Get More Traffic & More Conversions</h2>
                        <p className="md:text-base text-sm font-medium mb-2">LeadzExperts, your end-to-end strategic and execution partner, knows how to help you rule the hearts of Gen Z and millennials on social media. The not-so-secret lies in influencer marketing!</p>
                        <p className="md:text-base text-sm font-medium mb-2">Our agency cooks an influencer marketing strategy that fuels your growth and helps you influence your ideal customers' shopping decisions.</p>
                        <div className="flex md:flex-nowrap flex-wrap gap-3 mt-10">
                            <CTA
                                text="TALK TO AN EXPERT"
                                icon=""
                                bg="bg-green"
                                hover="hover:bg-white hover:text-black"
                            />
                            <CTA
                                text="(346)-299-2221"
                                bg="bg-transparent"
                                hover="hover:bg-green"
                                iconCss="brightness-0 invert group-hover:brightness-100 group-hover:invert-0"
                                border="border border-white"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
