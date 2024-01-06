import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ComboPackages from "@/components/Home/ComboPackages";
import Faqs from "@/components/Home/Faqs/Faqs";
import Form from "@/components/Home/Form";
import Package from "@/components/Packages/Package";
import Testimonials from "@/components/Testimonial/Testimonials";
import Confide from "@/components/social-media-advertising-services/Confide";
import Examples from "@/components/social-media-marketing-services/Examples";
import Hero from "@/components/social-media-marketing-services/Hero";
import Majorly from "@/components/social-media-marketing-services/Majorly";
import Opportunities from "@/components/social-media-marketing-services/Opportunities";
import Platforms from "@/components/social-media-marketing-services/Platforms";
import Pricing from "@/components/social-media-marketing-services/Pricing";

const page = () => {
  return (
    <>
      <Header 
      linkHover="hover:text-blue" 
      ctaBg="bg-[#4292ff]" 
      ctaColor="text-white" 
      iconCss="brightness-0 invert group-hover:brightness-100 group-hover:invert-0"
      ctaHover="hover:bg-white hover:text-[#4292ff]"
      />
      <Hero />
      <Opportunities/>
      <Testimonials 
        beforeBg="before:bg-[url('../../public/social-media-marketing/testimonial.png')] before:bg-center before:bg-no-repeat before:bg-cover"
        bg="bg-black"
        testimonialHead="See How Our Customers Sing Praises For Us!"
      />
      <Pricing/>
      <ComboPackages/>
      <Platforms/>
      <Majorly/>
      <Examples/>
      <Confide/>
      <Form 
      beforeBackground="before:bg-[url('../../public/social-media-marketing/white-line.png')]"
      background="bg-[url('../../public/social-media-marketing/form-banner.png')]"
      CTABackground="bg-blue"
      />
      <Faqs/>
      <Footer />
    </>
  )
}

export default page;