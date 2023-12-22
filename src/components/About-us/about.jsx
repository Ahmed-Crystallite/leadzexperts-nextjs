// Next
import Image from "next/image";
// Media
import aboutIcon from "media/about-us/aboutUs.png"
const About = () => {
  return (
    <section>
      <div className="md:pt-32 pt-28 pb-12">
      <div className="container">
        <div className="grid gap-7 items-center md:grid-cols-2 grid-cols-1">
          <div>
            <h1 className="lg:text-[40px] font-berlin lg:leading-[50px] text-3xl font-bold text-blue">ABOUT US</h1>
            <h2 className="lg:text-3xl font-berlin text-2xl font-bold py-2">LeadzExperts — the Creative Agency That Converts Your Conservative Brand Into an Internet Sensation!</h2>
            <p className="md:text-base text-sm text-black font-medium pb-2">LeadzExperts is a social media marketing agency that aims to bridge the gap between brand and their high-converting customers. Being in the industry for an appreciable number of years, we have mastered the ART of MARKETING and SCIENCE of SALES. And it’s not a claim; it’s simply what we do!</p>
            <p className="md:text-base text-sm text-black font-medium">To help you win new clients, we conduct thorough research on your competitors’ marketing habits and find the opportunity gaps to be filled. Our marketing experts learn your customers' purchasing patterns and devise advertising solutions that influence their buying decision and turn them into your long-lasting clients.</p>
          </div>
          <div>
            <Image
              src={aboutIcon}
              alt="Icons"
            />
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default About;
