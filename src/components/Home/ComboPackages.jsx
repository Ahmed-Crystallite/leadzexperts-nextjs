// Next
import Image from "next/image";
// Components
import CTA from "C/CTA/CTA";
// Media
import BlueTick from "media/home/check-blue.png"
import WhiteTick from "media/home/check-white.png"
import Satisfaction from "media/home/satisfaction.png"
const ComboPackages = ({
  title = "Complete",
  beforeImg = "before:bg-[url('../../public/home/ultimate-img.png')]",
  sec4Image = Satisfaction,
  featureBg = "bg-blue"
}) => {
  let seo = [
    {
      text: "Upto 100 Keywords"
    },
    {
      text: "Competitor Analysis"
    },
    {
      text: "Articles"
    },
    {
      text: "Blog Posts"
    },
    {
      text: "Press Releases"
    },
    {
      text: "Guest Blogs"
    },
    {
      text: "Power Posts"
    },
    {
      text: "Featured Posts"
    },
    {
      text: "Infographics"
    },
    {
      text: "Directory Submissions"
    },
    {
      text: "Classified Ads"
    },
    {
      text: "Community Participation"
    },
    {
      text: "Business Profiles"
    },
    {
      text: "Google Analytics Installation"
    },
    {
      text: "Google Webmaster Installation"
    },
    {
      text: "Google Places Submissions"
    },
    {
      text: "Converstion Tracking"
    },
    {
      text: "Weekly Rankings Report"
    },
    {
      text: "Before and After Progress Reports"
    },
    {
      text: "Social Media Posts"
    },
    {
      text: "Monthly Progress Report"
    },
  ]
  let psa = [
    {
      text: "Google Ads"
    },
    {
      text: "Bing Ads"
    },
    {
      text: "Keyword Research"
    },
    {
      text: "Competitor Analysis"
    },
    {
      text: "Ads Creation"
    },
    {
      text: "Banner Creation"
    },
    {
      text: "Adwords Account Setup"
    },
    {
      text: "Adwords Account Configuration"
    },
    {
      text: "Daily Spend Configuration"
    },
    {
      text: "Search Metrics Configuration"
    },
    {
      text: "Daily Bid Adjustment"
    },
    {
      text: "Daily Campaign Monitoring"
    },
    {
      text: "Negative Keyword Identification"
    },
    {
      text: "Google Webmaster Installation"
    },
    {
      text: "Weekly Ranking Report"
    },
    {
      text: "Google Analytics Report"
    },
  ]
  let branding = [
    {
      text: "Featured Posts on Yahoo"
    },
    {
      text: "Featured Posts on Entrepreneur"
    },
    {
      text: "Featured Blog Posts"
    },
  ]
  let smm = [
    {
      text: "Facebook/Twitter Page Creation"
    },
    {
      text: "Facebook/Twitter Posts & Outreach"
    },
    {
      text: "Linkedin Profile Creation"
    },
    {
      text: "Linkedin Posts and Outreach"
    },
    {
      text: "Instagram/Pinterest Page Creation"
    },
    {
      text: "Instagram/Pinterest Posts and Outreach"
    },
    {
      text: "YouTube Channel Creation"
    },
    {
      text: "YouTube Videos and Outreach"
    },
    {
      text: "Weekly/Monthly Progress Reports"
    },
  ]
  let psm = [
    {
      text: "Facebook Ads"
    },
    {
      text: "Twitter Ads"
    },
    {
      text: "Linkedin Ads"
    },
    {
      text: "Instagram Ads"
    },
    {
      text: "YouTube Ads"
    },
    {
      text: "Weekly/Monthly Progress Reports"
    },
  ]
  let webop = [
    {
      text: "Landing Page Optimization"
    },
    {
      text: "Call to Action Optimization"
    },
    {
      text: "Content Optimization"
    },
    {
      text: "Mobile Friendly Optimization"
    },
  ]
  let features = [
    {
      text: "Dedicated Project Manager"
    },
    {
      text: "24 HR Support, 6 Days a Week"
    },
    {
      text: "Client Dashboard Access"
    },
    {
      text: "100% Money Back Guarantee"
    },
  ]
  return (
    <section>
      <div className="lg:py-16 py-12 bg-[url('../../public/home/comboPackages.png')] bg-no-repeat bg-cover bg-center">
        <div className={`relative ${beforeImg} before:bg-no-repeat before:bg-cover before:bg-center before:absolute before:w-[18%] before:h-full before:lg:block before:hidden`}>
          <div className="container">
            <div className="">
              <h2 className="xl:text-[40px] xl:leading-[50px] md:text-[30px] md:leading-[40px] text-[25px] leading-[35px] text-black text-center font-berlin pb-3">The {title} Internet Marketing Package!</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-12 justify-center">
            <div className="px-3 lg:pb-0 pb-4">
              <h3 className="lg:text-xl text-lg font-extrabold pb-3 text-black">SEO</h3>
              <ul>
                {
                  seo && seo.map((e, i) => (
                    <li key={i} className="flex text-sm font-semibold items-center gap-2 mb-2">
                      <Image src={BlueTick} alt="Icons" width={15} height={15} />
                      {e.text}</li>
                  ))
                }
              </ul>
            </div>
            <div className="px-3 lg:pb-0 pb-4">
              <h3 className="lg:text-xl text-lg font-extrabold pb-3 text-black">Paid Search Advertising</h3>
              <ul>
                {
                  psa && psa.map((e, i) => (
                    <li key={i} className="flex text-sm font-semibold items-center gap-2 mb-2">
                      <Image src={BlueTick} alt="Icons" width={15} height={15} />
                      {e.text}</li>
                  ))
                }
              </ul>
              <h3 className="lg:text-xl text-lg font-extrabold pb-3 text-black">Branding</h3>
              <ul>
                {
                  branding && branding.map((e, i) => (
                    <li key={i} className="flex text-sm font-semibold items-center gap-2 mb-2">
                      <Image src={BlueTick} alt="Icons" width={15} height={15} />
                      {e.text}</li>
                  ))
                }
              </ul>
            </div>
            <div className="px-3 lg:pb-0 pb-4">
              <h3 className="lg:text-xl text-lg font-extrabold pb-3 text-black">Social Media Marketing</h3>
              <ul>
                {
                  smm && smm.map((e, i) => (
                    <li key={i} className="flex text-sm font-semibold items-center gap-2 mb-2">
                      <Image src={BlueTick} alt="Icons" width={15} height={15} />
                      {e.text}</li>
                  ))
                }
              </ul>
              <h3 className="lg:text-xl text-lg font-extrabold pb-3 text-black">Paid Social Marketing</h3>
              <ul>
                {
                  psm && psm.map((e, i) => (
                    <li key={i} className="flex text-sm font-semibold items-center gap-2 mb-2">
                      <Image src={BlueTick} alt="Icons" width={15} height={15} />
                      {e.text}</li>
                  ))
                }
              </ul>
              <h3 className="lg:text-xl text-lg font-extrabold pb-3 text-black">Website Optimization</h3>
              <ul>
                {
                  webop && webop.map((e, i) => (
                    <li key={i} className="flex text-sm font-semibold items-center gap-2 mb-2">
                      <Image src={BlueTick} alt="Icons" width={15} height={15} />
                      {e.text}</li>
                  ))
                }
              </ul>
            </div>
            <div className="px-3 lg:pb-0 pb-4">
              <Image src={sec4Image} alt="Icons" className="mx-auto pb-5" />
              <div className={`${featureBg} py-4 px-2`}>
                <h3 className="lg:text-xl text-lg font-extrabold pb-3 text-white">Features</h3>
                <ul>
                  {
                    features && features.map((e, i) => (
                      <li key={i} className="flex text-sm text-white font-semibold items-center gap-2 mb-2">
                        <Image src={WhiteTick} alt="Icons" width={15} height={15} />
                        {e.text}</li>
                    ))
                  }
                </ul>
              </div>
              <div className="mb-3">
                <h3 className="lg:text-2xl md:text-xl text-lg font-extrabold py-3 text-black">CALL FOR CUSTOM PRICING & STRATEGY</h3>
                <p className="text-base font-medium">Free 30 Min Consultation</p>
                <CTA
                  text="Live Chat Now"
                  bg="bg-trasparent"
                  color="text-black"
                  contentAlignment="justify-start"
                  height="h-7"
                  icon="/home/chat.png"
                  margin="mt-5"
                />
                <CTA
                  text="Call 346-299-2221"
                  bg="bg-trasparent"
                  color="text-black"
                  contentAlignment="justify-start"
                  height="h-7"
                  iconCss="brightness-0 contrast-100 saturate-100"
                />
              </div>
              <div className="pt-4">
                <CTA
                  text="Request a Quote"
                  bg="bg-blue"
                  height="h-9"
                  icon=""
                  width="w-max"
                  padding="px-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComboPackages;