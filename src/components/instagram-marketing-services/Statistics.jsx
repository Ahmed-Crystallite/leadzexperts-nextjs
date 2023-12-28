// Next
import Image from "next/image";
// Components
import CTA from "../CTA/CTA";
// Media
import Ratio from "media/instagram-marketing/ratio.png"
const Statistics = () => {
  return (
    <div className="lg:py-14 md:py-11 py-9">
      <div className="container">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-14 items-center">
          <div className="md:mb-0 mb-10">
            <Image src={Ratio} alt="Icons" />
          </div>
          <div className="">
            <h2 className="md:text-[40px] text-3xl md:leading-[50px] text-black font-extrabold lg:mb-4 mb-2">Statistics Speak Why <br className="lg:block hidden" /> Instagram Must Be Your Secret Marketing Weapon!</h2>
            <p className="text-sm lg:pb-4 pb-2 font-medium text-black">Did you know how many active users Instagram has? A whopping 1 billion.</p>
            <p className="text-sm lg:pb-4 pb-2 font-medium text-black">And did you know how many Instagram accounts follow a brand? The ratio is highly impressive, 8 out of 10!</p>
            <p className="text-sm lg:pb-4 pb-2 font-medium text-black">With such extensive Instagram usage, do you think you can find your next client anywhere else? A big NO! On a daily basis, the forum spectates almost 200 million visits to brand accounts, in which the people ranging between 18-19 share a significant portion. In order to support your business, Instagram gives you every reason to rely on. With this in mind, LeadzExperts gives Instagram management services to help you connect with millions of potential customers, who may turn out to be your long-lasting clients! Who Knows? (We are marketers, not product sellers. So, you better refine your services; meanwhile, we refine the marketing strategies for your brand!)</p>

            <CTA
              text="GET A FREE QUOTE"
              icon=""
              bg="bg-[#fe9e3f]"
              color="text-white"
              hover="hover:bg-black hover:text-[#fe9e3f]"
              width="w-max"
              padding="px-4"
              height="h-10"
              margin="lg:mt-4 mt-2"
              rounded="rounded-lg"
              textSize="text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistics;
