// Components
import ServicesCard from "./ServicesCard";
// Media
import SMM from "media/home/smm.png"
import PCC from "media/home/ppc.png"
import EMAIL from "media/home/email.png"
import ORM from "media/home/orm.png"
const Services = () => {
    let Card = [
        {
            icon: SMM,
            title: "SMM Coupled With SEO",
            text: "Our social media marketing company integrates SMM with SEO to help you drive more traffic to your website. With extensive keyword research, our SMM experts formulate SEO-optimized Content that helps your social media profile cross path with your ideal customers. Alongside writing social media content for various social media platforms, we craft captivating videos and other share-worthy website content to persuade more social media users to land on your website.",
            minHeight:"min-h-[400px]",
        },
        {
            icon: PCC,
            title: "SMM Driven By PPC",
            text: "Social media is more than just writing Content that APPEALS; rather, it is more about how you CATCH your ideal customers. LeadzExperts supercharges the social media marketing efforts with PPC campaigns. Our social media PPC marketing services are a kick-start to push engagement and impressive clicks to your growth arsenal. Our seasoned SMM experts identify your target audience, dig up high-intent keywords, launch sponsored updates, and utilize visually attractive imagery and appealing captions to boost your ROAS (Return on Ad Spend) across various social media platforms.",
            minHeight:"min-h-[400px]",
        },
        {
            icon: EMAIL,
            title: "Email Marketing",
            text: "The best way to tap the lead conversion opportunities is to integrate Email Marketing with Social Media Marketing solutions. This way, you can forge an unrivaled customer experience and expand your online reach. With the in-depth analysis of your niche market, followed by figuring out prospects’ pain points, we devise Email content that mentions your social media profiles. Result? The boost in user engagement!",
            minHeight:"min-h-[400px]",
        },
        {
            icon: ORM,
            title: "ORM (Online Reputation Management)",
            text: "With no scrutiny of users' reviews, comments, and mentions, the social media presence is a solemn hurting gesture to the brand reputation. The image built with 20 years of hard work can be ruined in a nanosecond with a single bad mention; for this reason, LeadzExperts take charge of your brand's online reputation management. We keep an eye on how your followers are engaging with your Content and what kind of Content they crave for. More so, the instant response to the user queries and potential threats is the name of our game!",
            minHeight:"min-h-[400px]",
        },
    ];
    return (
        <section>
            <div className="bg-[#000000] md:py-16 py-11">
                <div className="container">
                    <div className="relative before:bg-[url('../../public/home/line.png')] before:bg-no-repeat before:bg-cover before:bg-center before:absolute before:w-2/4 xl:before:bottom-2 before:right-64 before:h-2 before:xl:block before:hidden lg:mb-14 md:mb-12 mb-10">
                        <h2 className="xl:text-[40px] xl:leading-[50px] md:text-[30px] md:leading-[40px] text-[25px] leading-[35px] text-white text-center font-berlin pb-3">SPARKING YOUR BRAND UP WITH COST-EFFECTIVE SOCIAL MEDIA MARKETING SERVICES</h2>
                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                        {
                            Card && Card.map((e, i) => (
                                <ServicesCard 
                                    key={i}
                                    icons={e.icon}
                                    titles={e.title}
                                    texts={e.text}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;
