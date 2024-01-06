// Media
import Box1 from "media/influencer-marketing/box-1.png"
import Box2 from "media/influencer-marketing/box-2.png"
import Box3 from "media/influencer-marketing/box-3.png"
import Box4 from "media/influencer-marketing/box-4.png"
import Box5 from "media/influencer-marketing/box-5.png"
import Box6 from "media/influencer-marketing/box-6.png"
import ServicesCard from "../Home/Services/ServicesCard";
const GamePlan = () => {
    let Card = [
        {
            icon: Box1,
            padding: "py-6",
            title: "Defining Goals and Objectives",
            text: "Our influencer marketing movement begins with setting your KPIs, marketing goals, and objectives. LeadzExperts influencer marketing campaign surrounds your brand mission, vision, and advertising goals.",
        },
        {
            icon: Box2,
            padding: "py-6",
            title: "Digging Up Your Target Audience",
            text: `We find who your target audience is in terms of the demographics and marketplace. We try to know their interests and the social media forum they lovingly use. This understanding helps us proceed with the next step, "contacting influencers" `,
        },
        {
            icon: Box3,
            padding: "py-6",
            title: "Matchmaking",
            text: "The research of the previous step helps us identify the right personas for influencer marketing. We match your ideal consumers with the relevant influencers, and LeadzExperts creates influencer marketing movements that access the right target audience. Not to mention, our influencer marketing agency gives you a full regime of the influencers' target demographics.",
        },
        {
            icon: Box4,
            padding: "py-6",
            title: "Agreement and Contracts with Influencers",
            text: "It is necessary that the connection between you and the influencer involves a legal agreement, where the storyteller knows their obligations and rights. LeadzExperts ensures that the influencer signs the agreement and abides by the deliverables. We make sure that the contracts entail the full scope of the collaboration.",
        },
        {
            icon: Box5,
            padding: "py-6",
            title: "Creating Content",
            text: "The success of an influencer campaign lies in content; because you can't count on the vloggers following, you need to come up with ideas to engage better with their users. LeadzExperts devise marketing content that hits the chord with your target audience.",
        },
        {
            icon: Box6,
            padding: "py-6",
            title: "ATracking Results",
            text: "Without tracking, you can't understand the success and progress of your influencer marketing campaign. The data-driven and goal-oriented KPIs that we set in the initial phases help us guarantee success for the campaign. We provide you with extensive reports with the mention of transparent insights and tangible results.",
        },
    ];
    return (
        <div className="lg:py-16 md:py-14 py-12 bg-black">
            <div className="container">
                <div className="text-center">
                    <h2 className="lg:text-[45px] text-white lg:leading-[55px] md:text-[40px] md:leading-[50px] text-3xl mb-2 font-berlin font-extrabold">Creating Measurable <span className="relative font-bold md:before:block before:hidden before:absolute before:bg-[url('../../public/influencer-marketing/line.png')] before:bg-center before:bg-no-repeat before:bg-cover before:w-[100%] before:-bottom-1 before:-right-0 before:h-2">Buzz for Your Business</span> with A 6- <br className="lg:block hidden" />Step Game Plan.</h2>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-16 grid-cols-1 gap-6">
                    {
                        Card && Card.map((e, i) => (
                            <ServicesCard
                                key={i}
                                icons={e.icon}
                                titles={e.title}
                                texts={e.text}
                                padding={e.padding}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default GamePlan;
