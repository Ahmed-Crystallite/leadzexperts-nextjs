// Next
import Image from "next/image";
// Media
import MarketingImage from "media/home/marketing.png"
import MarketingImage2 from "media/home/marketing2.png"
import MarketingImage3 from "media/home/marketing3.png"
import CTA from "../CTA/CTA";
const Marketing = () => {
    return (
        <section>
            <div className="container">
                <div className="lg:py-16 md:py-12 py-9">
                    <div className="relative before:bg-[url('../../public/home/line.png')] before:bg-no-repeat before:bg-cover before:bg-center before:absolute before:w-2/4 xl:before:bottom-1 before:right-64 before:h-3 before:xl:block before:hidden mb-3">
                        <h2 className="xl:text-[40px] xl:leading-[50px] md:text-[30px] md:leading-[40px] text-[25px] leading-[35px] text-black text-center font-berlin pb-3">HOW SOCIAL MEDIA MARKETING AGENCY LENDS YOU A HELPING HAND?</h2>
                    </div>
                    <p className="text-center lg:text-lg text-base font-medium">To help you blow away your marketing targets, a lot goes into our process of performing social media management. LeadzExperts enjoy an eminent position for leaving no stone unturned when it comes to advertising your business on social media channels. While working with us, rest assured that you will get an edge over your competitors, for sure!</p>
                    <div className="grid md:grid-cols-2 grid-cols-1 lg:pt-16 md:pt-12 pt-9 items-center gap-5">
                        <div>
                            <Image
                                src={MarketingImage}
                                alt="Icons"
                            />
                        </div>
                        <div>
                            <h3 className="text-[22px] leading-[32px] font-extrabold mb-1">Dedicated Social Media Manager</h3>
                            <p className="lg:text-base text-sm pb-2 font-medium">An experienced social media manager is the cornerstone of any social media marketing campaign. He will dig into your company and understand its every nitty-gritty to work accordingly. The assigned persona will also walk you through the entire process of content creation and strategy design.</p>
                            <h3 className="text-[22px] leading-[32px] font-extrabold mb-1">Account Creation</h3>
                            <p className="lg:text-base text-sm pb-2 font-medium">At the heart of social media success lies the "account." It makes sense that without social media account, you can't tap into the unprecedented marketing opportunities that the forums offer. If your brand has no social accounts, LeadzExperts sets them up for you after extensive research on what platforms would work the best for your brand! Our account creation services entail drawing the aptest images, fitting bios and relevant business descriptions, and giving your social media presence a professional touch.</p>
                            <h3 className="text-[22px] leading-[32px] font-extrabold mb-1">Strategy Creation</h3>
                            <p className="lg:text-base text-sm pb-2 font-medium">Without a strategy, social media efforts go in vain. Long story short, a social media marketing strategy is needed to support the social media marketing efforts. LeadzExperts, after getting into the shoes of your customers and keeping tabs on your competitors, creates an effective social media marketing plan that best fits your needs and budget. Real growth requires careful planning and utilization of the analytics, or otherwise, the marketing efforts are good for NOTHING!</p>
                        </div>
                        <div>
                            <h3 className="lg:text-[50px] md:text-4xl text-2xl lg:leading-[60px] font-bold mb-1">Content Creation</h3>
                            <p className="lg:text-base text-sm pb-2 font-medium">Without the shadow of a doubt, Content is a KING, fueled with the POWER of turning the readers into die-hard fans. To make the most out of Social Media Marketing, Content is something you can’t afford to overlook. When you couple the highly-relevant Content with the scroll-stopping image, you are just turning your social media into a money-making and lead-generating machine.</p>
                            <p className="lg:text-base text-sm pb-2 font-medium">LeadzExperts, the leading social media marketing agency, devises such marketing copies that hit the chord with the target audience and leave them hooked with your brand for many more years to come. We deliver your creative and compelling stream of Content that mirrors your brand and resonates with your high-converting audience.</p>
                            <p className="lg:text-base text-sm pb-2 font-medium">It comes with no surprise that varying social media forums, i.e., Instagram, Facebook, Twitter, and many more, need Content to outreach your audience, and only insightful Content does the trick. Our unparalleled content creation process begins with comprehensive market research, understanding your brand voice, and then incorporating optimization within the Content to win quick marketing wins.</p>
                        </div>
                        <div>
                            <Image
                                src={MarketingImage2}
                                alt="Icons"
                            />
                        </div>
                        <div>
                            <Image
                                src={MarketingImage3}
                                alt="Icons"
                            />
                        </div>
                        <div>
                            <h3 className="lg:text-[50px] md:text-4xl text-2xl lg:leading-[60px] font-bold mb-1">Social Media Advertising</h3>
                            <p className="lg:text-base text-sm pb-1 font-medium">Brands that want to grow their customer base exponentially need paid Social Advertising urgently.</p>
                            <p className="lg:text-base text-sm pb-2 font-medium">Paid Social media advertising compliments the social media campaigns efforts. LeadzExperts catches more motivated eyeballs with its social media advertising expertise, which is hyper-targeted and real-time optimized</p>
                            <h3 className="md:text-[30px] text-xl md:leading-[40px] font-bold mb-1">We are sharing the right expertise for the right advertisement!</h3>
                            <div className="flex flex-wrap gap-3 mt-5">
                                <CTA
                                    text="TALK TO AN EXPERT"
                                    icon=""
                                    hover="hover:bg-white hover:text-black hover:border hover:border-primary"
                                />
                                <CTA
                                    text="(346)-299-2221"
                                    bg="bg-trasnparent"
                                    border="border border-primary"
                                    color="text-primary"
                                    hover="hover:bg-primary hover:text-white hover:border hover:border-primary"
                                    iconCss="group-hover:brightness-0 group-hover:invert-100"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Marketing;
