import FaqsToggle from "./FaqsToggle";
const Faqs = (props) => {
    const { faqsBG, faqsText } = props;
    const faqstoggler = [
        {
            title: "Why Should I Do Social Media Advertising For My Business?",
            text: "It depends on where your target audience is available in bulk quantities. But don't need to worry if you don't know the right platform for your business. LeadzExperts will help you find the social media platform that best meets your budgets and needs."
        },
        {
            title: "Which Social Media Forum Is Perfect For My Business?",
            text: "It depends on where your target audience is available in bulk quantities. But don't need to worry if you don't know the right platform for your business. LeadzExperts will help you find the social media platform that best meets your budgets and needs."
        },
        {
            title: "Is Social Media Advertising Cost-effective?",
            text: "A BIG yes. Unlike conventional advertising methods like commercials billboards, Social media advertising is a money-saver marketing technique. You need sound social media marketing experts, and your marketing goals are just achieved. Remember, social media advertising for businesses is different from your daily pics sharing and hashtagging. It needs intuitive minds and a proper strategy, which laedzeXperts excels at having!"
        },
        {
            title: "What Social Media Advertising Package Is Suitable For Me? ",
            text: "If you are a newbie to the business realm, our basic package will help you achieve your marketing goals. However, if your business is old, you have different packages to choose from depending on how fast and how much engagement you need. If you are still confused with the package selection, we are here to wash your worries away."
        },
        {
            title: "Why Should I Choose LeadzExperts As A Social Media Marketing Agency?",
            text: "Because we are EXPERTS. With marketing perfection at hand and extended years of experience, we create digital experiences that help your brand be a cut above the rest. Thousands of social media advertising projects go to our credit, and we are proud to say that each client is witnessing astronomical growth. We know the art of advertising and the science of sales, and if you want more reasons to count on us, call us to get to know each other better.",
        },
    ]
    return (
        <section>
            <div className="container">
                <div className="lg:py-16 md:py-14 py-10">
                    <div className="flex flex-col justify-center">
                        <h2 className="xl:text-[50px] xl:leading-[60px] md:text-[30px] md:leading-[40px] text-[25px] leading-[35px] text-black text-center font-berlin lg:pb-10 pb-5">Frequently Asked Questions</h2>
                        <div>
                            {
                                faqstoggler && faqstoggler.map((e, i) => (
                                    <FaqsToggle
                                        key={i}
                                        title={e.title}
                                        text={e.text}
                                        faqsBG={faqsBG}
                                        faqsText={faqsText}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Faqs;