// Next
import Image from "next/image";
// Media
import leadzExpertsIcon from "media/about-us/leadzexperts-icon.png"
import CTA from "../CTA/CTA";
const joinOurCommunity = () => {
  return (
    <section>
        <div className="lg:py-16 md:py-12 py-10">
            <div className="container">
                <div className="text-center">
                    <Image src={leadzExpertsIcon} alt="icons" className="block mx-auto"/>
                    <h2 className="lg:text-[55px] lg:leading-[65px] font-berlin md:text-[45px] md:leading-[55px] text-3xl font-extrabold py-5">Join the 750,000+ influencers and businesses already using Leadzexperts</h2>
                    <CTA 
                        text="JOIN OUR COMMUNITY"
                        icon=""
                        margin="mx-auto"
                        bg="bg-transparent"
                        color="text-black"
                        border="border border-blue"
                        hover="hover:text-white hover:bg-blue"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default joinOurCommunity;
