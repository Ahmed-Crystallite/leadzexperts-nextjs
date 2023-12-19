// Next
import Image from "next/image";
// Media
import Client from "media/home/client-img.png"
import Star from "media/home/star.png"

const TestimonialCard = (props) => {
    const { text, title } = props;
    let ratings = [Star, Star, Star, Star, Star];
    return (
        <div className="relative -z-20 md:px-28 md:py-12 before:md:block before:hidden before:bg-[url('../../public/home/comma1.png')] before:absolute before:bg-center before:bg-contain before:bg-no-repeat before:w-[50px] before:h-[10%] md:before:left-14 before:left-4 before:top-0 after:md:block after:hidden after:bg-[url('../../public/home/comma2.png')] after:absolute after:bg-center after:bg-contain after:bg-no-repeat after:w-[50px] after:h-[10%] after:bottom-32 md:after:right-24 after:right-4">
            <p className="text-white md:text-[18px] text-base md:leading-7">{text}</p>
            <div className="md:pt-10 py-5">
                <Image src={Client} alt="Icons" width={58} height={57} />
                <div>
                    <h5 className="md:text-xl text-lg font-medium text-white">{title} </h5>
                    <ul className="flex">
                        <li className="text-xs text-white font-medium pe-1">5.0</li>
                        {
                            ratings && ratings.map((e, i) => (
                                <li key={i}><Image src={e} alt="icons" width={20} height={20} /></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard;
