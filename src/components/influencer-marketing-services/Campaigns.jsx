// Next
import Image from "next/image";
// Media
import Computer from "media/influencer-marketing/computers.png"
import Mobile from "media/influencer-marketing/mobile.png"
const Campaigns = () => {
    return (
        <div className="lg:py-16 md:py-14 py-12">
            <div className="container">
                <div className="text-center">
                    <h2 className="lg:text-[40px] md:text-3xl text-2xl text-black lg:leading-[50px] mb-5 font-berlin font-extrabold">A SNEAK PEEK AT HOW INFLUENCER MARKETING AGENCY DELIVER <span className="relative font-bold md:before:block before:hidden before:absolute before:bg-[url('../../public/influencer-marketing/line.png')] before:bg-center before:bg-no-repeat before:bg-cover before:w-[100%] before:-bottom-3 before:-right-0 before:h-3">CONVERSION-LED CAMPAIGNS</span></h2>
                    <p className="md:text-[16px] text-sm font-medium">LeadzExperts excels at leveraging the power of influencer marketing to furnish meaningful and quantifiable results. Our effective strategic solutions and custom-tailored creative ideas simply bridge the between you and your ideal customers! To help you understand the ins and <br /> outs of the influencer marketing approach, LeadzExperts bring a glimpse of the process right before your eye.</p>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 md:mt-14 mt-12">
                    <div>
                        <Image src={Computer} alt="Icons" />
                    </div>
                    <div className="">
                        <h4 className="md:text-[22px] md:leading-[32px] text-lg font-semibold">Influencer Matchmaking, Target Audience Research, and Strategy Development.</h4>
                        <p className="md:text-base text-sm font-medium my-3">Every brand needs a unique Influencer, and LeadzExperts know where they are!.</p>
                        <p className="md:text-base text-sm font-medium mb-3">In affiliation with best-in-class vloggers, social influencers, digital storytellers, and content creators, we help you achieve your marketing goals and objectives. Our ties with the most influential voices across the globe help us connect your brand with the right influencers so that your brand fosters an image "Unbreakable” by anyone.</p>
                        <p className="md:text-base text-sm font-medium mb-3">To cut a long story short, we partner you with the influencer who is the perfect WOM for your brand. But our matchmaking is not a random guess; it is informed by the in-depth research on your target audience. By this, our influencer marketing agency creates bespoke influencer marketing strategies and engagement activities to create a WOW factor for your brand!</p>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 md:mt-14 mt-12 items-center">
                    <div className="">
                        <h4 className="lg:text-[42px] lg:leading-[52px] md:text-[35px] md:leading-[45px] text-[25px] font-extrabold">Content Creation</h4>
                        <p className="md:text-base text-sm font-medium my-3">LeadzExperts believes in going the extra mile to create outstanding digital and advertising experiences. In order to take your content creation to the next level, we promote the quirky fusion of influencers and traditional productions.</p>
                        <p className="md:text-base text-sm font-medium mb-3">What's next? A lot more. Do you want to know? Call the experts, have a fun chat, and let them take charge of your leads. After all, we are LEADZEXPERTS!</p>
                    </div>
                    <div>
                        <Image src={Mobile} alt="Icons" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Campaigns;
