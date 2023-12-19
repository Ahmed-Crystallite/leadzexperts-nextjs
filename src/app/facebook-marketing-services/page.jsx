// Components 
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Testimonials from "@/components/Testimonial/Testimonials";
import Dominent from "@/components/facebook-marketing-services/Dominent";
import Hero from "@/components/facebook-marketing-services/Hero";
import PartnerSlider from "@/components/facebook-marketing-services/PartnerSlider";
import Pricing from "@/components/facebook-marketing-services/Pricing";

const page = () => {
  return (
    <>
    <Header 
      ctaHover="hover:text-white hover:bg-black"
      linkHover="hover:text-lightblue"
    />
    <Hero/>
    <PartnerSlider/>
    <Dominent/>
    <Testimonials 
    beforeBg="before:bg-[#045FD9]"
     bg="bg-[#006cff]"
     />
     <Pricing/>
    <Footer/>
    </>
  )
}

export default page;
