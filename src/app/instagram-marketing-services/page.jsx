import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Testimonials from "@/components/Testimonial/Testimonials";
import PartnerSlider from "@/components/facebook-marketing-services/PartnerSlider";
import Domients from "@/components/instagram-marketing-services/Domients";
import Hero from "@/components/instagram-marketing-services/Hero";
import Pricing from "@/components/instagram-marketing-services/Pricing";

const page = () => {
    return (
      <>
        <Header 
        ctaHover="hover:bg-white hover:text-[#fc9347]" 
        ctaBg="bg-[#fc9347]" 
        ctaRadius="" 
        ctaColor="text-white"
        iconCss="brightness-0 invert group-hover:brightness-100 group-hover-invert"
        linkHover="hover:text-[#fc9347]"
        />
        <Hero/>
        <PartnerSlider/>
        <Domients/>
        <Testimonials beforeBg="before:bg-[#fc9347]" testimonialHead="Still On The Fence? Read How Our Clients Turned Out To Be Our Raving Fans!"/>
        <Pricing/>
        <Footer/>
      </>
    )
  }
  
  export default page;