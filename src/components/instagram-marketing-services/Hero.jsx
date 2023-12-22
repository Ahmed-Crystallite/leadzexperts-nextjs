// Next
import Image from "next/image";
// Components
import CTA from "../CTA/CTA";
import Input from "../Input/Input";
// Media
import Heart from "media/facebook-marketing/heart.png"
import Emoji from "media/facebook-marketing/emoji.png"

const Hero = () => {
    return (
        <div className="md:pt-32 pt-28 pb-12 bg-[url('../../public/instagram-marketing/hero.png')] bg-center bg-no-repeat bg-cover">
            <div className="container">
                <div className="text-center text-white">
                    <h4 className="mb-2 text-2xl font-normal font-berlin">LeadzExperts</h4>
                    <h3 className="mb-2 text-2xl font-normal font-berlin">Get Ready to Become the Talk of the Town with Our</h3>
                    <h1 className="mb-2 font-berlin font-extrabold text-[50px] leading-[60px]">Instagram Marketing Services!</h1>
                    <p className="text-sm leading-7 px-12 font-normal">Leads running dry? Do you know why? Because you haven't yet accessed the untapped and unprecedented marketing opportunities, Instagram offers you! From helping you engage with
                    your high-intent customers to driving you to real business growth, there is nothing our experts can't do for you! So, with leadzeXperts, get ready to STAND OUT from the rest with our outstanding Instagram marketing services.</p>
                    <div className="md:my-10 my-5 flex flex-wrap justify-center gap-5">
                        <CTA 
                        text="TALK TO AN EXPERT"
                        icon=""
                        bg="bg-white"
                        color="text-black"
                        hover="hover:bg-black hover:text-white"
                        />
                        <CTA 
                        text="(346)-299-2221"
                        bg="bg-transparent"
                        border="border border-white"
                        hover="hover:bg-white hover:text-black"
                        />
                    </div>
                    <h3 className="md:text-[40px] md:leading-[50px] text-3xl font-berlin text-white font-medium mb-4">We l<Image src={Heart} alt="Icons" className="inline-block"/><Image src={Heart} alt="Icons" className="inline-block"/>k forward to hearing from y<Image src={Emoji} alt="Icons" className="inline-block"/>u</h3>
              <div className="flex md:flex-nowrap flex-wrap md:gap-5 gap-3">
                <Input 
                  placeholder="Name"
                  background="bg-transparent"
                  border="border"
                  bordercolor="border-white"
                  color="text-white"
                  height="h-12"
                  placeholderColor="placeholder:text-white"
                  type="text"
                />
                <Input 
                  placeholder="Email"
                  background="bg-transparent"
                  border="border"
                  bordercolor="border-white"
                  color="text-white"
                  height="h-12"
                  placeholderColor="placeholder:text-white"
                  type="email"
                />
                <Input 
                  placeholder="Phome"
                  background="bg-transparent"
                  border="border"
                  bordercolor="border-white"
                  color="text-white"
                  height="h-12"
                  placeholderColor="placeholder:text-white"
                  type="tel"
                />
                <CTA 
                text="Schedule Consultation"
                bg="bg-white"
                color="text-black"
                icon=""
                hover="hover:bg-black hover:text-white hover:border hover:border-white"
              />
              </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
