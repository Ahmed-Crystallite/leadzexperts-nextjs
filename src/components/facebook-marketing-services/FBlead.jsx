// Next
import Image from "next/image";
// Media
import Rocket from "media/facebook-marketing/rocket.png"
import CTA from "../CTA/CTA";
const FBlead = () => {
  return (
    <div className="lg:py-16 md:py-12 py-10">
      <div className="container">
        <div className="flex md:flex-nowrap flex-wrap items-center">
          <div className="lg:basis-[60%] md:basis-[50%] basis-full md:mb-0 mb-10">
            <h2 className="md:text-[30px] text-2xl md:leading-[40px] font-extrabold md:mb-6 mb-4">Your Next Lead Is On Facebook. Don’t You Want To Catch That? LeadzExperts Knows The Ropes; You Just Need To Go Social Today With Us!</h2>
            <CTA
              text="Click To Become Folks' Favorite Brand!"
              bg="bg-[#1c6cd9]"
              icon=""
              width="w-max"
              padding="md:px-6 px-2"
              textWeight="font-medium"
            />
          </div>
          <div className="lg:basis-[40%] md:basis-[50%] basis-full">
            <Image src={Rocket} alt="Icons" className="block mx-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FBlead;
