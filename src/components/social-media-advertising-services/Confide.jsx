// Next
import Image from "next/image";
// Media
import Style from "media/social-media-marketing/style-1.png"
import Style2 from "media/social-media-marketing/style-2.png"
import Style3 from "media/social-media-marketing/style-3.png"
const Confide = () => {
    let reasons = [
        {
            icon: Style,
            title: "No Cookie-cutter Marketing",
            text: "We love to remain ahead of the curve and never promote cookie-cutter marketing techniques in our advertising efforts. In order to help brands enjoy impressive sales and sustainable growth, we devise such winning SMM strategies that are inspired by the latest digital trends. No matter the size of your brand, we are here to make it BIGGER!"
        },
        {
            icon: Style2,
            title: "Take-charge Attitude",
            text: "Our social media management team embraces a take-charge attitude and follows lateral thinking to devise creative digital solutions for you. They never leave you hanging and ensure none of your queries remain unattended in our inbox."
        },
        {
            icon: Style3,
            title: "Honest Rates like Nowhere Else!",
            text: "Unlike other digital marketing agencies, we don’t have any surprise hidden fees bringing a scowl on your head. We remain honest with our rates, and we are sure you won’t find such affordable pricing packages anywhere, but at LeadzExperts!"
        },
    ]
    return (
        <div className="lg:py-16 md:py-14 py-12 bg-[#f0f0f0]">
            <div className="container">
                <div className="text-center">
                    <h2 className="lg:text-[50px] lg:leading-[60px] md:text-[40px] md:leading-[50px] text-3xl font-extrabold font-berlin text-black">Reasons to Confide In Our Social Media <br className="lg:block hidden" /> Marketing Services</h2>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 mt-10">
                    {
                        reasons && reasons.map((e, i) => (
                            <div key={i} className="md:mb-0 mb-6">
                                <Image src={e.icon} alt="Icons" className="block mx-auto" />
                                <div className="text-center">
                                    <h4 className="md:text-[21px] md:leading-[31px] text-lg my-2 font-bold">{e.title}</h4>
                                    <p className="md:text-[15px] text-sm font-normal">{e.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Confide;
