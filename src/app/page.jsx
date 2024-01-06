// Components
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Testimonials from "@/components/Testimonial/Testimonials";
import Packages from "@/components/Home/Sparking";
import ComboPackages from "@/components/Home/ComboPackages";
import Services from "@/components/Home/Services/Services";
import Marketing from "@/components/Home/Marketing";
import Form from "@/components/Home/Form";
import Faqs from "@/components/Home/Faqs/Faqs";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const Page = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Testimonials />
      <Packages />
      <ComboPackages />
      <Services />
      <Marketing />
      <Form />
      <Faqs />
      <Footer />
    </>
  )
};

export default Page;