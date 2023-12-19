// Next
import Image from "next/image";
// Media
import Snapchat from "media/facebook-marketing/snapchat.png"
import Google from "media/facebook-marketing/google-parner.png"
import Facebook from "media/facebook-marketing/facebook-marketing.png"
import Tiktok from "media/facebook-marketing/tiktok.png"
import LinkedIn from "media/facebook-marketing/linkedin.png"
const PartnerSlider = () => {
    return (
        <section>
            <div className="pt-4 pb-2">
                <div className="container">
                    <div>
                        <marquee behavior="slide" direction="left">
                            <div className="grid grid-cols-5 items-center">
                                <Image
                                    src={Snapchat}
                                    alt="icons"
                                />
                                <Image
                                    src={Google}
                                    alt="icons"
                                />
                                <Image
                                    src={Facebook}
                                    alt="icons"
                                />
                                <Image
                                    src={Tiktok}
                                    alt="icons"
                                />
                                <Image
                                    src={LinkedIn}
                                    alt="icons"
                                />
                            </div>
                        </marquee>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PartnerSlider;
