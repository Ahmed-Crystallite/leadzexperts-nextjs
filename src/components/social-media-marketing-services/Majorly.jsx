// Next
import Link from "next/link";
import Image from "next/image";
// Media
import Arrow from "media/social-media-marketing/right-arrow.png"
const Majorly = () => {
    let includes = [
        {
            borderColor: "border-[#006cff]",
            title: "Facebook Marketing",
            text: "LeadzExperts makes the best use of Facebook to create such marketing experiences that support your business and help you be a cut above the rest. From building to managing your Facebook profile and optimizing your brand account. Facebook ads management is a cornerstone of our SMM services.",
            linkText: "FACEBOOK MARKETING SERVICES ",
            link: "./facebook-marketing-services"
        },
        {
            borderColor: "border-[#ff813e]",
            title: "Instagram Marketing",
            text: "Instagram has a lot of potential for separating you from the herd. Our SMM agency fine-tunes your brand profile, runs competitive ads, and posts snackable content. Our Instagram ads management services offer you the digital growth your brand needs!",
            linkText: "INSTAGRAM MARKETING SERVICES ",
            link: "./instagram-marketing-services"
        },
        {
            borderColor: "border-[#1da1f3]",
            title: "Influencer Marketing",
            text: "Our influencer marketing company forms social proof for your brand to help it makes the rounds on the internet for all the right reasons. Our influencer marketing agency helps you bring your ideal customers to your doorstep.",
            linkText: "INFLUENCER MARKETING SERVICES ",
            link: "./social-media-advertising-services"
        },
    ]
    return (
        <div className="lg:py-24 md:py-20 py-14 bg-[url('../../public/social-media-marketing/smm-banner.png')] bg-cover bg-center bg-no-repeat">
            <div className="container">
                <div className="text-center text-white mb-10">
                    <h2 className="lg:text-[45px] md:text-[40px] text-3xl lg:leading-[55px] md:leading-[50px] mb-2 font-berlin font-extrabold">What Majorly Includes In Our Social <br className="lg:block hidden" /> Media Marketing Services?</h2>
                    <p className="md:text-[15px] text-sm font-medium">Now you can raise brand awareness, and witness sales-ready leads with our <br className="lg:block hidden" /> growth-focused SMM services. Our Social media agency does such marketing <br className="lg:block hidden" /> that will leave your clients stunned!</p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4">
                    {
                        includes && includes.map((e, i) => (
                            <div key={i} className={`border-2 ${e.borderColor} hover:translate-y-3 ease-in-out duration-300 rounded-lg py-8 bg-[#000000] md:px-6 px-4 text-white`}>
                                <h4 className="md:text-3xl text-2xl my-2 font-bold">{e.title}</h4>
                                <p className="text-sm text-[#b8b8b8] min-h-[140px]">{e.text}</p>
                                <Link href={e.link} className="mt-5 w-[100%] inline-block md:text-[15px] text-sm font-semibold">{e.linkText} <Image src={Arrow} alt="Arrow" className="inline-block ms-2" /> </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Majorly;
