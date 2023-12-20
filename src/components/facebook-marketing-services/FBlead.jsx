// Next
import Image from "next/image";
// Media
import Rocket from "media/facebook-marketing/rocket.png"
import CTA from "../CTA/CTA";
const FBlead = () => {
  return (
    <div className="py-16">
      <div className="container">
        <div className="flex items-center">
          <div className="basis-[60%]">
            <h2 className="text-[30px] leading-[40px] font-extrabold mb-6">Your Next Lead Is On Facebook. Don’t You Want To Catch That? LeadzExperts Knows The Ropes; You Just Need To Go Social Today With Us!</h2>
            <CTA
              text="Click To Become Folks' Favorite Brand!"
              bg="bg-[#1c6cd9]"
              icon=""
              width="w-max"
              padding="px-6"
              textWeight="font-medium"
            />
          </div>
          <div className="basis-[40%]">
            <Image src={Rocket} alt="Icons" className="block mx-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FBlead;
