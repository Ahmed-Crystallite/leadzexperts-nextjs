"use client"
// React
import { useState, useRef } from "react";
// Next
import Image from "next/image";
// Media
import CustomerImage from "media/social-media-advertising/customer.png"
const Customer = () => {
    const ref = useRef(null)
    const [showMore, setShowMore] = useState(false);

    const toggleReadMoreLess = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
        setShowMore(!showMore);
    };
    return (
        <div className="lg:pt-16 md:pt-14 pt-12">
            <div className="container">
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-10">
                    <div className="md:mb-0 mb-6">
                        <Image src={CustomerImage} alt="Icons" />
                    </div>
                    <div>
                        <h2 className="lg:text-[40px] lg:leading-[50px] md:text-[35px] md:leading-[45px] text-3xl font-berlin font-extrabold text-black mb-1">Don’t You Want To Be Where Your Ideal Customers Are?</h2>
                        <p className="md:text-base text-sm font-medium mb-1">Let us tell you where your next clients are, obviously on SOCIAL MEDIA. With millions and trillions of users scattered on diverse social media platforms, it becomes vital to hit up those people and influence their buying decisions right there. But the presence of cut-throat business competition hinders the goal pursuit. Solution?</p>
                        <h4 className="md:text-[22px] md:leading-[32px] text-xl font-semibold mb-1">Social media advertising, but done right!</h4>
                        <p className="md:text-base text-sm font-medium">To declare as the cream of the crop, you have to chop down the roots of your competitors from consumers’ minds. The best bet to do the trick is to encounter them where they love to spend most of their time.</p>
                        <p className="md:text-base text-sm font-medium mb-2">No matter the size and shape of business, scale, and genre of your enterprise, it is equally important for you to connect with the right social media to extend your advertising efforts. Whether you are B2B, B2C, or an eCommerce business, you get a multitude of social forums for advertisement. But wait.</p>
                        <div ref={ref} className={`scroll-smooth ${showMore ? "h-[100px] overflow-y-scroll" : ""}`}>
                            <div>
                                {showMore && (
                                    <p className="md:text-base text-sm font-medium">Every business goals are unique with a different target audience, so it is always better to select that platform that best suits each of the aspects. Since we have many big players in the name of social media platforms, you might get overwhelmed where to play the marketing card right. But you don’t need to worry. We know what you don’t, after all, we are EXPERTS. (Don’t be offended, as we believe you are way better in your business than your competitors, and if not, you already have our social media advertising company with you).</p>
                                )}
                            </div>
                        </div>
                        <button onClick={toggleReadMoreLess} className="mb-2 font-semibold">
                            {showMore ? "Read Less" : "Read More"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customer;
