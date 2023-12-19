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
    <section>
      <div className="md:pt-32 pt-28 pb-12 bg-[url('../../public/facebook-marketing/fbMarketingHero.png')] bg-center bg-no-repeat bg-cover">
        <div className="container">
          <div className="text-center">
            <span className="md:text-2xl text-xl text-white font-normal">LeadzExperts</span>
            <h1 className="lg:text-[50px] lg:leading-[60px] text-4xl font-berlin text-white font-extrabold">Facebook Marketing Services</h1>
            <h2 className="md:text-2xl text-xl text-white font-berlin font-medium md:py-5 ">Helping Your <span className="relative font-bold text-yellow md:before:block before:hidden before:absolute before:bg-[url('../../public/facebook-marketing/virtual-line.png')] before:bg-center before:bg-no-repeat before:bg-cover before:w-28 before:-bottom-3 before:-right-6 before:h-3">Brand</span> Experience Social Life!</h2>
            <p className="text-sm leading-6 text-white">LeadzExperts goes crazy when it comes to inducting new leads into your pipeline, and why not? They know the ART of marketing and the SCIENCE of sales to boost your business! Our Facebook marketing services bring you an ample chance to build rapport with your high-converting consumers and strengthen your ONLINE presence.</p>
            <div className="md:my-10 my-5 flex flex-wrap justify-center gap-5">
              <CTA 
                text="TALK TO AN EXPERT"
                bg="bg-white"
                color="text-black"
                icon=""
                hover="hover:bg-black hover:text-white"
              />
              <CTA 
                text="(346)-299-2221"
                bg="bg-transparent"
                border="border border-white"
                color="text-white"
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
    </section>
  )
}

export default Hero;
