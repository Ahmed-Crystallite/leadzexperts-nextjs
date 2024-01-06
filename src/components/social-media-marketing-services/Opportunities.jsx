// Next
import Image from "next/image";
// Media
import Service from "media/social-media-marketing/Service1.png"
import Service2 from "media/social-media-marketing/Service2.png"
import Service3 from "media/social-media-marketing/Service3.png"
const Opportunities = () => {
    let services = [
        {
            banner: Service2,
            title: "Overnight Success!",
            text: "Believe it or not, Social media bacteria can help your brand become VIRAL and INTERNET SENSATION in just a matter of seconds. One engaging and visually attractive post, and VOILA. You have already become the talk of the town."
        },
        {
            banner: Service3,
            title: "Marketing In a Budget!",
            text: "Ever wish to get plenty in just a few? With social media marketing, you can turn this dream into reality. In comparison to other marketing ways, like SEO and PPC, SMM is the least expensive way that helps your business enjoy digital authority with just a few pennies spent."
        },
        {
            banner: Service,
            title: "Gateway to Competitors!",
            text: "You can keep tabs on your competitors and polish your digital marketing strategy by taking inspiration from your business rivals. The competitors' profile analysis opens a world of opportunities to get closer to your ideal customers. The more you understand your business rival, the better you can stand out from the rest!"
        },
    ]
    return (
        <div className="lg:py-16 md:py-14 py-12">
            <div className="container">
                <div className="text-center text-black">
                    <h2 className="lg:text-[40px] lg:leading-[50px] md:text-[35px] md:leading-[45px] text-3xl font-extrabold font-berlin mb-4">Time To Access A New World Of Untapped Marketing Opportunities With Our Outstanding Social Media Advertising Services</h2>
                    <p className="md:text-base text-sm">Without the shadow of a doubt, Social Media functions like the missing piece of the marketing puzzle that compliments the advertising game and helps brands earn quick marketing wins. Long story short, Social Media Profile is what MAKES or BREAKS your brand. Out of many, the celebrated features of SMM that your brand can’t afford to overlook includes:</p>
                </div>
                <div className="relative z-50 lg:pt-16 md:pt-14 pt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 before:absolute gap-x-6 md:before:bg-[url('../../public/social-media-marketing/card-back.png')] before:w-[42%] before:-z-50 before:left-72 before:top-0 before:h-[80%] before:bg-center before:bg-no-repeat before:bg-cover">
                    {
                        services && services.map((e, i) => (
                            <div key={i} className="bg-white shadow-[rgba(99,99,99,.2)_0_2px_8px_0] rounded-lg md:mb-0 mb-6">
                                <Image src={e.banner} alt="Icons" className="block mx-auto" />
                                <div className="md:my-10 my-5 md:px-5 px-2 text-center">
                                    <h5 className="text-xl mb-2 font-bold">{e.title}</h5>
                                    <p>{e.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Opportunities;
