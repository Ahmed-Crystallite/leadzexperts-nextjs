// Next
import Image from "next/image";
// Media
import Advertising from "media/social-media-advertising/advertising.png"
import Demographics from "media/social-media-advertising/Demographics.png"
import Competitive from "media/social-media-advertising/competitive.png"
import Visitors from "media/social-media-advertising/Visitors.png"
const Services = () => {
    let advertisingDemos = [
        {
            icon: Demographics,
            title: "Demographics:",
            text: "Run laser-targeted social media campaigns to people based on their interests and online behaviors. We can target specific ages, locations, income levels, and much more!"
        },
        {
            icon: Competitive,
            title: "Get competitive cost-per-click",
            text: "Run laser-targeted social media campaigns to people based on their interests and online behaviors. We can target specific ages, locations, income levels, and much more!"
        },
        {
            icon: Visitors,
            title: "Website Visitors:",
            text: "Add retargeting pixels to your website and advertise to recent website visitors. Only 1-2% of visitors convert on their first visit. We’ll use remarketing to increase your rate of conversions."
        },
    ]
    return (
        <div className="lg:py-16 md:py-14 py-12">
            <div className="container">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                    <div className="">
                        <h2 className="lg:text-[45px] md:text-[40px] lg:leading-[55px] md:leading-[40px] text-3xl font-berlin font-extrabold text-black mb-3">Our Social Media Advertising Services Can Help You:</h2>
                        <h4 className="lg:text-[22px] lg:leading-[32px] text-xl font-semibold mb-3">Spend Your Advertising Dollars Wisely</h4>
                        <p className="md:text-base text-sm font-medium mb-3">Social media advertising is the most cost-effective form of advertising available today. On average, you can spend $5 and reach 1,000 people. In comparison to traditional media, our social media advertising services are 3x less costly.</p>
                        <h4 className="lg:text-[22px] lg:leading-[32px] text-xl font-semibold mb-3">Advertise To Your Exact Demographic</h4>
                        <p className="md:text-base text-sm font-medium mb-6">Social advertising is powerful because you can target your exact demographic. We can help you reach people based on:</p>
                        {
                            advertisingDemos && advertisingDemos.map((e, i) => (
                                <div key={i} className="flex md:flex-nowrap flex-wrap mb-6">
                                    <div className="lg:w-[50%]"><Image src={e.icon} alt="Icons" /></div>
                                    <div>
                                        <h4 className="md:text-2xl text-xl font-extrabold">{e.title}</h4>
                                        <p className="text-base">{e.text}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        <Image src={Advertising} alt="Icons" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;
