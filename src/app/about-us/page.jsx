import Header from "@/components/Header/Header";
import About from "@/components/About-us/about";
import AboutServices from "@/components/About-us/aboutServices";
import JoinOurCommunity from "@/components/About-us/joinOurCommunity";
import Footer from "@/components/Footer/Footer";
import Form from "@/components/Home/Form";

const page = () => {
  return (
    <>
    <Header padding="py-1" bg="bg-black"/>
    <About/>
    <AboutServices/>
    <Form 
      background="bg-[url('../../public/about-us/form-banner.png')]"
      spanColor="text-black"
      beforeBackground="before:bg-[url('../../public/about-us/white-line.png')]"
      CTABackground="bg-blue"
    />
    <JoinOurCommunity/>
    <Footer/>
    </>
  )
}

export default page;
