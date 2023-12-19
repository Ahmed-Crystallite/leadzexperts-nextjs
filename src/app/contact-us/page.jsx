import Footer from "@/components/Footer/Footer";
import GetInTouch from "@/components/Contact-us/getInTouch";
import Header from "@/components/Header/Header";
import Info from "@/components/Contact-us/Info";

const page = () => {
    return (
      <>
      <Header padding="py-1"/>
      <GetInTouch/>
      <Info/>
      <Footer/>
      </>
    )
  }
  
  export default page;