// Next
import Image from "next/image";
// Media
import InstaImg from "media/instagram-marketing/insta-img.png"
import InstaImg2 from "media/instagram-marketing/insta-1.png"
import InstaImg3 from "media/instagram-marketing/insta-2.png"
import InstaImg4 from "media/instagram-marketing/insta-3.png"
import InstaImg5 from "media/instagram-marketing/insta-4.png"
import InstaImg6 from "media/instagram-marketing/insta-5.png"
const Marketing = () => {
    let service = [
        {
            icon : InstaImg ,
            title : "Comprehensive Keyword Research",
            text : "To gain maximum brand exposure, comprehensive research on relevant hashtags and keywords is vital. Our dedicated Instagram marketing team carries out keen hashtag research to help your business be found easily."
        },
        {
            icon : InstaImg2 ,
            title : "Instagram Ads Management",
            text : "The advertising model Instagram follows is PPC, which employs a bidding algorithm to display your ads in your high-converting users' stories and feed, we target those ideal customers that have not crossed paths with your brand yet."
        },
        {
            icon : InstaImg3 ,
            title : "Chasing The Leads",
            text : "The more you are actively engaging with your audience, the more you earn the chance to build relationships with them. Our diligent team ensures that no comment or queries of your consumers remain unattended."
        },
        {
            icon : InstaImg4 ,
            title : "Instagram Account Optimization",
            text : "Our team optimizes your brand-focused Instagram by making a professional brand photo, writing an appealing yet precise descriptive bio, creating enthralling story highlights, and linking your account to your business website."
        },
        {
            icon : InstaImg5 ,
            title : "Regular Content Sharing",
            text : "Content is what moves your audience. With the best content creation strategies, we formulate marketing copies that hit the chord with your ideal consumers. The timely content posting is the cornerstone of our Instagram marketing efforts."
        },
        {
            icon : InstaImg6 ,
            title : "Instagram Stories Creation",
            text : "Instagram stories with no longer than 24 hours of lifespan can create a world of difference in your brand's exposure. We come up with stories that share the element of excitement, hooking your audience with you for many more years to come."
        },
    ]
    return (
        <div className="lg:py-16 md:py-12 py-9">
            <div className="container">
                <div className="lg:pb-16 md:pb-12 pb-9 text-center">
                    <h2 className="lg:text-[50px] md:text-[40px] text-3xl lg:leading-[60px] md:leading-[50px] font-berlin text-black mb-3">Our <span className="relative bg-gradient-to-r from-[#fe9e3f] to-primary [-webkit-background-clip:text] [-webkit-text-fill-color:#00000021] before:absolute md:before:bg-[url('../../public/instagram-marketing/line-1.png')] before:bg-cover bg-no-repeat bg-center before:w-full before:h-4 before:top-12">Instagram</span> Marketing Services</h2>
                    <p className="lg:px-32 md:text-[15px] text-sm text-black font-medium">With everything from strategy creation to campaign analysis, we can help you achieve your Instagram objective of choice, whether it be to raise awareness, increase consideration, or earn conversions.</p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-7 items-center">
                    {
                        service && service.map((e, i) => (
                            <div key={i} className="text-center">
                                <Image src={e.icon} alt="Icons" className="block mx-auto mb-2" />
                                <h5 className="md:text-lg text-base font-bold mb-2">{e.title}</h5>
                                <p className="md:text-[15px] text-sm font-normal">{e.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Marketing;
