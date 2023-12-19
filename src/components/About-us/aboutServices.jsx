// Next
import Image from "next/image";
// Media
import smmAgency from "media/about-us/smm-agency.png"
import HeadphoneIcon from "media/about-us/about-headphone.png"
import SettingsIcon from "media/about-us/about-setting.png"
const aboutServices = () => {
  const agencyTabs = [
    {
      icon: HeadphoneIcon,
      title: "Customer-centric Attitude",
      text: "Our agency treats customers like royalty and strives to surpass their expectations with results that speak for themselves."
    },
    {
      icon: SettingsIcon,
      title: "No Cookie-cutter Marketing",
      text: "We throw creativity and innovation in the advertising mix and refrain from embracing cookie-cutter marketing techniques."
    },
    {
      icon: SettingsIcon,
      title: "Size Of The Job Doesn't Matter To Us",
      text: "Whether your business is in its infancy or declining age, we have solutions to cater to your unique marketing goals. No matter the size and shape of your business, we are ready to make it even BIGGER!"
    },
  ]
  return (
    <section>
      <div className="lg:py-16 md:py-12 py-10">
        <div className="container">
          <div className="grid gap-7 items-center md:grid-cols-2 grid-cols-1">
            <div>
              <Image
                src={smmAgency}
                alt="Icons"
              />
            </div>
            <div>
              <h1 className="lg:text-[42px] lg:leading-[52px] font-berlin text-3xl font-extrabold text-black pb-3">We Are Not Your Average Social Media Marketing Agency!</h1>
              <p className="md:text-base text-sm text-black font-medium pb-2">The name of our company is enough to tell who we are. Experts That Capture Leads For You! Out of endless reasons to confide in our top-leading social media agency, here are several business values you are bound to fall in love with!</p>
              {
                agencyTabs && agencyTabs.map((e, i) => (
                  <div key={i} className="flex mt-5 gap-3">

                    <div className="min-w-[9%]">
                      <Image
                        src={e.icon}
                        alt="Icons"
                        width={59}
                        height={55}
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-berlin text-black font-extrabold pb-1">{e.title}</h4>
                      <p className="text-base text-black font-medium">{e.text}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="text-center lg:pt-12 pt-6">
            <h2 className="lg:text-[30px] font-berlin text-2xl text-black lg:leading-[40px] font-extrabold">With Impressive Clicks, Sales-ready Leads, and Relevant Traffic to Your Website, Are Your Ready to Transform Your Business from Drab to Fab?</h2>
            <p className="text-black text-base font-medium py-4">If yes, you better know what to do. Call the marketing experts right away, and let the SOCIAL magic begins!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default aboutServices;
