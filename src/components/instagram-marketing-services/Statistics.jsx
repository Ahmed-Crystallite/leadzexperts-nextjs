// Next
import Image from "next/image";
// Components
import CTA from "../CTA/CTA";
// Media
import Ratio from "media/instagram-marketing/ratio.png"
const Statistics = () => {
  return (
    <div className="py-14">
      <div className="container">
                <div className="grid grid-cols-2 gap-x-14 items-center">
                <div className="">
                        <Image src={Ratio} alt="Icons" />
                    </div>
                    <div className="">
                        <h2 className="text-[40px] leading-[50px] text-black font-extrabold mb-4">Statistics Speak Why <br className="lg:block hidden"/> Instagram Must Be Your Secret Marketing Weapon!</h2>
                        <p className="text-sm pb-4 font-medium text-black">Did you know how many active users Instagram has? A whopping 1 billion.</p>
                        <p className="text-sm pb-4 font-medium text-black">And did you know how many Instagram accounts follow a brand? The ratio is highly impressive, 8 out of 10!</p>
                        <p className="text-sm pb-4 font-medium text-black">With such extensive Instagram usage, do you think you can find your next client anywhere else? A big NO! On a daily basis, the forum spectates almost 200 million visits to brand accounts, in which the people ranging between 18-19 share a significant portion. In order to support your business, Instagram gives you every reason to rely on. With this in mind, LeadzExperts gives Instagram management services to help you connect with millions of potential customers, who may turn out to be your long-lasting clients! Who Knows? (We are marketers, not product sellers. So, you better refine your services; meanwhile, we refine the marketing strategies for your brand!)</p>
                        
                        <CTA
                            text="GET A FREE QUOTE"
                            icon=""
                            bg="bg-[#fe9e3f]"
                            color="text-white"
                            hover="hover:bg-black hover:text-[#fe9e3f]"
                            width="w-max"
                            padding="px-4"
                            height="h-10"
                            margin="mt-4"
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
