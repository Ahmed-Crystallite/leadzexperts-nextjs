import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ComboPackages from "@/components/Home/ComboPackages";
import Faqs from "@/components/Home/Faqs/Faqs";
import Form from "@/components/Home/Form";
import Sparking from "@/components/Home/Sparking";
import Testimonials from "@/components/Testimonial/Testimonials";
import PartnerSlider from "@/components/facebook-marketing-services/PartnerSlider";
import Campaigns from "@/components/influencer-marketing-services/Campaigns";
import GamePlan from "@/components/influencer-marketing-services/GamePlan";
import Hero from "@/components/influencer-marketing-services/Hero";
import Influencer from "@/components/influencer-marketing-services/Influencer";

const page = () => {
  return (
    <>
      <Header
        linkHover="hover:text-green"
        ctaBg="bg-green"
        ctaColor="text-white"
        ctaHover="hover:bg-white hover:text-green"
        iconCss="brightness-0 invert group-hover:brightness-100 group-hover:invert"
      />
      <Hero />
      <PartnerSlider />
      <Influencer />
      <Testimonials
        beforeBg="before:bg-[#00d9a5]"
        bg="bg-[#0cae87]"
        testimonialHead="Still On The Fence? Read How Our Clients Turned Out To Be Our Raving Fans!"
      />
      <Sparking
        headBg="bg-[#00d9a5]"
        headEvenBg="even:bg-[#0cae87]"
        tableBottomBg="bg-[#0cae87]"
        tableBottomBg2="bg-[#00d9a5]"
        ctaTable="bg-[#0cae87]"
        title="LEADZEXPERTS HELPS YOU FLY HIGH WITHOUT HITTING YOUR WALLET SO HARD!"
        text="Our company knows it has been a taxing journey for you to fill in your bank accounts. So, we thought to price our Influencer marketing services at the most honest rates. After all, your satisfaction and peace are what we thrive on ! Have a glimpse at our Influencer marketing services packages."
        beforeHead=""
        first="first:text-white first:bg-black"
      />
      <ComboPackages
        featureBg="bg-[#0cae87]"
        CTABg="bg-[#0cae87]"
      />
      <GamePlan />
      <Campaigns />
      <Form
        background="bg-[url('../../public/influencer-marketing/formBg.png')]"
        spanColor="text-green"
        CTABackground="bg-green"
      />
      <Faqs/>
      <Footer />
    </>
  )
}

export default page;