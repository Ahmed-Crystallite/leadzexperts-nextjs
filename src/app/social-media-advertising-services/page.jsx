import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ComboPackages from "@/components/Home/ComboPackages";
import Faqs from "@/components/Home/Faqs/Faqs";
import Form from "@/components/Home/Form";
import Sparking from "@/components/Home/Sparking";
import Testimonials from "@/components/Testimonial/Testimonials";
import Advertising from "@/components/social-media-advertising-services/Advertising";
import Customer from "@/components/social-media-advertising-services/Customer";
import Growth from "@/components/social-media-advertising-services/Growth";
import Hero from "@/components/social-media-advertising-services/Hero";
import Process from "@/components/social-media-advertising-services/Process";
import Services from "@/components/social-media-advertising-services/Services";

const page = () => {
    return (
      <>
      <Header 
      linkHover="hover:text-[#88e7ff]" 
      ctaBg="bg-[#88e7ff]" 
      ctaColor="text-white" 
      iconCss="brightness-0 invert" 
      ctaHover="hover:text-[#88e7ff] hover:bg-black" />
      <Hero/>
      <Growth/>
      <Testimonials beforeBg="before:bg-[#09b9fa]" bg="bg-[#09b9fa]" />
      <Sparking 
      beforeTable="before:bg-[url('../../public/social-media-advertising/back-image.png')]"
      headBg="bg-[#09b9fa]"
      headEvenBg="even:bg-[#c9c1ea]"
      tableBottomBg="bg-[#09b9fa]"
      tableBottomBg2="bg-[#c9c1ea]"
      ctaTable="bg-[#09b9fa]"
      title="SOCIAL MEDIA ADVERTISING WITHIN YOUR REACH"
      text="LeadzExperts prices its offbeat Social Media Advertising Services at the most affordable rates to help you beat your competition without getting bankrupt."
      beforeHead=""
      />
      <ComboPackages/>
      <Services/>
      <Customer/>
      <Advertising/>
      <Process/>
      <Form 
      background="bg-[url('../../public/social-media-advertising/formBg.png')]"
      spanColor="text-[#fb6464]"
      CTABackground="bg-blue"
      />
      <Faqs 
      faqsBG="bg-black"
      faqsText="text-white"
      />
      <Footer/> 
      </>
    )
  }
  
  export default page;