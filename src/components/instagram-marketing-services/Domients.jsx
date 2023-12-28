// Next
import Image from "next/image";
// Media
import Boost from "media/instagram-marketing/ser-7.png"
import Build from "media/instagram-marketing/ser-8.png"
import Increase from "media/instagram-marketing/ser-9.png"
const Domients = () => {
    let bussinessAuth = [
        {
            icon: Boost,
            title: "No matter The Size, You Can Still Thrive!",
            text: "Whether you are a young startup or a declining business, Instagram welcomes companies of every scale and genre to reach their target audience. Since the forum has people from every walks of life, the possibility of finding your next client there is higher than anything else!"
        },
        {
            icon: Build,
            title: "Gaining Visibility Has Never Been Easier!",
            text: "Has your business just kicked off? You must be overwhelmed by the cut-throat competition. But you don't need to fret. Instagram Hashtags do wonders for your brand, separating yourself from the herd. You can even become an internet sensation with Instagram, all you need to have LeadzExperts with you!"
        },
        {
            icon: Increase,
            title: "Tabs On Your Competitors!",
            text: "Ever wish to know what your competitors are doing? Now you can keep an eagle eye on your business rivals and learn how they are actively interacting with their followers, and fine-tune your marketing strategy."
        },
    ]
    return (
        <div className="md:py-12 py-9">
            <div className="container">
                <div className="text-center">
                    <h2 className="lg:text-[40px] md:text-3xl text-2xl lg:leading-[50px] font-extrabold font-berlin text-black relative">Spruce Up Your
                        <span className="relative bg-gradient-to-r from-[#fe9e3f] to-primary [-webkit-background-clip:text] [-webkit-text-fill-color:#00000021] md:before:bg-[url('../../public/instagram-marketing/line-1.png')] before:bg-no-repeat before:bg-cover before:bg-center before:absolute before:w-full before:h-5 before:top-11"> Brand’s Image </span>
                        with Instagram</h2>
                </div>
                <div className="grid gap-x-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:py-12 py-0">
                    {bussinessAuth && bussinessAuth.map((e, i) => (
                        <div key={i} className="mt-12">
                            <Image src={e.icon} alt="Icons" className="block mx-auto" />
                            <h4 className="text-base font-bold py-3 text-center">{e.title}</h4>
                            <p className="font-medium text-[14px] leading-6 text-center">{e.text}</p>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Domients;
