// Next
import Image from "next/image";
// Media
import Arrow from "media/social-media-advertising/arrow-right.png"
import RightArrow from "media/social-media-advertising/right.png"
const Growth = () => {
    let ourGrowth = [
        {
            text: "Growth-focused"
        },
        {
            text: "ROI-driven"
        },
        {
            text: "Strategically designedy"
        },
        {
            text: "Personalized"
        },
        {
            text: "Inspired by the latest industry trends and digital affairs"
        },
        {
            text: "And more!"
        },
    ]
    return (
        <div className="lg:py-16 md:py-14 py-10">
            <div className="container">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 items-center">
                    <div className="md:mb-0 mb-6">
                        <Image src={Arrow} alt="Icons" />
                    </div>
                    <div className="">
                        <h2 className="lg:text-[40px] lg:leading-[50px] text-3xl font-extrabold font-berlin mb-3"><span className="relative md:before:block before:hidden before:absolute before:bg-[url('../../public/social-media-advertising/line.png')] before:bg-center before:bg-no-repeat before:bg-cover before:w-80 before:-bottom-2 before:-left-0 before:h-2">LeadzExperts Fueling</span> Your Business Growth with the Power of Social!</h2>
                        <p className="lg:text-xl text-lg font-semibold mb-3">Do you feel your business arena has fewer footfalls than before? Have you failed to earn quick marketing wins?</p>
                        <p className="lg:text-xl text-lg font-medium mb-3">You know where the problem lies? The way you ADVERTISE!</p>
                        <p className="md:text-base text-sm font-medium mb-3">To help you experience a dip in organic growth, and enjoy impressive audience engagement, we devise creative marketing solutions that hit the chord with your ideal consumers. If you want to talk to someone, it is necessary to speak in the language they understand. Our advertising maestros know how to interact with your high-intent audience, and they love to make them fall in LOVE with your products/services. So, if your brand wants to keep the chin up, now is the time to let our social media agency crown your business advertising with royal treatment! Have us on your side to hit the marketing goals, as are advertising campaigns are:</p>
                        <ul className="mb-3">
                            {
                                ourGrowth && ourGrowth.map((e, i) => (
                                    <li key={i} className="mb-1 md:text-base text-sm font-medium"><Image src={RightArrow} alt="icons" className="inline-block lg:mr-3 mr-2" />{e.text}</li>
                                ))
                            }
                        </ul>
                        <p className="text-base font-medium">Stop ignoring the obvious and join marketing fun with leadzExperts!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Growth;
