import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ComboPackages from "@/components/Home/ComboPackages";
import Faqs from "@/components/Home/Faqs/Faqs";
import Form from "@/components/Home/Form";
import Testimonials from "@/components/Testimonial/Testimonials";
import PartnerSlider from "@/components/facebook-marketing-services/PartnerSlider";
import Confused from "@/components/instagram-marketing-services/Confused";
import Domients from "@/components/instagram-marketing-services/Domients";
import Few from "@/components/instagram-marketing-services/Few";
import Hero from "@/components/instagram-marketing-services/Hero";
import Marketing from "@/components/instagram-marketing-services/Marketing";
import Pricing from "@/components/instagram-marketing-services/Pricing";
import Sales from "@/components/instagram-marketing-services/Sales";
import Statistics from "@/components/instagram-marketing-services/Statistics";
// Media
import IgMarket from "media/instagram-marketing/igMarket.png"

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
      <Hero />
      <PartnerSlider />
      <Domients />
      <Testimonials
        beforeBg="before:bg-[#fc9347]"
        testimonialHead="Still On The Fence? Read How Our Clients Turned Out To Be Our Raving Fans!" />
      <Pricing />
      <ComboPackages
        beforeImg="before:bg-[url('../../public/instagram-marketing/insta-ultimate.png')]"
        sec4Image={IgMarket}
        featureBg="bg-red-400" />
      <Marketing />
      <Sales />
      <Statistics />
      <Few />
      <Confused />
      <Form
        beforeBackground="before:bg-[url('../../public/instagram-marketing/white-line.png')]"
        background="bg-[url('../../public/instagram-marketing/formSec.png')]"
        textColor="text-white"
        spanColor="text-black"
        CTABackground="bg-[#fc9347]"
      />
      <Faqs/>
      <Footer />
    </>
  )
}

export default page;