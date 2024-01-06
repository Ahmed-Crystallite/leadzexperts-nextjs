// Next
import Image from "next/image";
// Media
import fb from "media/social-media-advertising/platform-fb.png"
import twitter from "media/social-media-advertising/paltform-twitter.png"
import insta from "media/social-media-advertising/paltform-insta.png"
import pin from "media/social-media-advertising/paltform-pin.png"
import lin from "media/social-media-advertising/paltform-lin.png"
import youtube from "media/social-media-advertising/paltform-youtube.png"
import ServicesCard from "../Home/Services/ServicesCard";
const Advertising = () => {
    let Card = [
        {
            icon: fb,
            title: "Facebook Advertising Services",
            text: "Did you know how many daily active users are on Facebook? More than 2 billion. With such colossal usage statistics, the forum has become the most approached social media network across the globe. With this fact into account, it is safe to say that running advertisements on Facebook help boost brand awareness and enhance revenue-driving and lead generation efforts. We make Facebook advertising easy with our well-thought-out Facebook ads campaigns"
        },
        {
            icon: twitter,
            title: "Twitter Advertising Services",
            text: "Twitter, the social media giant, spectates 500 million posts/day with 336 million monthly active users. No other platform is better than Twitter for businesses who want to connect with the generation sharing major purchasing powers. LeadzExperts maximizes the marketing opportunities and breaks the noise of the endless influx of posts with its aggressive Twitter advertising campaign. Long story short, we help you become the brand the users trust and follow!"
        },
        {
            icon: insta,
            title: "Instagram Advertising Services",
            text: "LeadzExperts help you build brand awareness by running competitive Instagram ad campaigns. Instagram has become a must-used advertising channel as it welcomes influencers and young audiences from every nook and corner of the world. If your brand aims at young consumers, you better know what to do — using Instagram for influencing purchasing decisions. With strategic and data-driven insights and a creative eye on the latest industry updates, we devise advertising experiences that smooth the buyer’s journey."
        },
        {
            icon: pin,
            title: "Pinterest Advertising Services",
            text: "Did you know how many people are there on Pinterest? A whopping 250 million. Our Pinterest advertising services simply help you connect with a highly-targeted audience to induct impressive leads in your sales pipeline. Remember, Pinterest brings your brand in front of the highly-converting audience!"
        },
        {
            icon: lin,
            title: "LinkedIn Advertising Services",
            text: "If your business wants to connect with industry leaders and professionals, LinkedIn serves as the best medium to extend advertising efforts. The forum is empowered with young and skillful individuals; with this in mind, our agency runs LinkedIn advertising campaigns to capture valuable leads for your business to thrive. We make the most of your advertisement spending with customized ad campaigns that target your exact consumers who significantly matter for your company"
        },
        {
            icon: youtube,
            title: "Youtube Advertising Services",
            text: "Being the second-most accessed search engine worldwide, YouTube paves the path to improving brand awareness and generating impressive sales-ready leads. LeadzExperts develop video-based and text-based ads to drive valuable traffic and capture exceptional leads for your business. Rest assured, we help you enjoy outstanding returns on advertising investment"
        },
    ]
  return (
    <div className="lg:py-16 md:py-14 py-12 bg-black">
      <div className="container">
        <div className="text-white text-center">
            <h2 className="lg:mb-16 md:mb-12 mb-8 lg:text-[40px] lg:leading-[50px] md:text-[35px] md:leading-[45px] text-3xl font-extrabold font-berlin">Social Media Advertising <span className="relative before:bg-[url('../../public/social-media-advertising/line.png')] before:bg-no-repeat before:bg-cover before:bg-center before:absolute before:w-[100%] xl:before:top-11 before:top-8 xs:before:hidden before:left-0 before:h-2">For Every Platform</span></h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 gap-4">
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
    </div>
  )
}

export default Advertising;
