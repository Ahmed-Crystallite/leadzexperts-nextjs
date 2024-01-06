import CTA from "../CTA/CTA";

const Hero = () => {
  return (
    <div className="md:py-[700px] pt-[600px] pb-10 md:bg-[url('../../public/social-media-marketing/social-media-banner.png')] bg-[url('../../public/social-media-marketing/banner.png')] bg-center bg-no-repeat bg-cover">
      <div className="container">
        <div className="text-center text-white">
          <h1 className="lg:text-[50px] lg:leading-[60px] text-[40px] leading-[50px] text-3xl font-extrabold font-berlin py-5 -mt-[450px]">Social Media Marketing <br className="lg:block hidden" /> Services</h1>
          <p className="md:text-base text-sm font-semibold">Spread like wildfire With Our Marketing Maestros!</p>
          <div className="flex md:flex-nowrap flex-wrap gap-3 justify-center mt-5 items-center">
            <CTA
              text="TALK TO AN EXPERT"
              icon=""
              bg="bg-[#4292ff]"
              hover="hover:bg-white hover:text-black"
            />
            <CTA
              text="(346)-299-2221"
              iconCss="brightness-0 invert group-hover:brightness-100 group-hover:invert-0"
              bg="bg-transparent"
              hover="hover:bg-white hover:text-black"
              border="border border-white"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
