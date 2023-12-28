// Next
import Image from "next/image";
// Media
import Ser10 from "media/instagram-marketing/ser-10.png"
import Ser11 from "media/instagram-marketing/ser-11.png"
import Ser12 from "media/instagram-marketing/ser-12.png"
const Confused = () => {
    let service = [
        {
            icon: Ser10,
            title: "We Never Leave You Hanging!",
            text: "Yes, we treat our customers like royalty and are accessible 24/7 for entertaining their queries. We ensure their questions don’t sit in our inboxes for long. To cut a long story short, we are the customer-centric brand you are bound to fall in love with!"
        },
        {
            icon: Ser11,
            title: "Use of Latest Marketing Technology",
            text: "We never use cookie-cutter marketing techniques; rather, we use ground-breaking AI and ML software that infuses our marketing campaign with data-driven insights and advice."
        },
        {
            icon: Ser12,
            title: "Strategies That Best Meet Your Business Needs",
            text: "At the heart of Instagram marketing lies customization and originality. Our marketing specialist devises custom strategies that mirror your brand individuality and help you break the competition. Be ready to be in every nook and corner of the world!"
        },
    ]
    return (
        <div className="lg:py-16 md:py-12 py-9">
            <div className="container">
                <div className="text-center lg:pb-16 md:pb-12 pb-9">
                    <h2 className="lg:text-[40px] md:text-3xl text-2xl lg:leading-[50px] lg:px-4 text-black font-extrabold">Confused Why LeadzExperts for Your Business? Because We Know The ART of Marketing and SCIENCE of Sales!</h2>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8">
                    {
                        service && service.map((e, i) => (
                            <div key={i} className="text-center lg:mb-0 mb-4">
                                <Image src={e.icon} alt="Icons" className="block mx-auto mb-2" />
                                <h5 className="text-base font-bold mb-2 xxl:min-h-0 lg:min-h-[40px]">{e.title}</h5>
                                <p className="text-sm font-medium">{e.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Confused;
