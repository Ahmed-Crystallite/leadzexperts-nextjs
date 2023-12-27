import CTA from "../CTA/CTA";

const Advertising = () => {
  let advertisingCard = [
    {
      bgImage: "bg-[url('../../public/facebook-marketing/facebook.png')]",
      title: "Facebook Advertising Services",
      text: "Get ready to be on top of your prospects' minds and help them stay updated with your offerings. We make Facebook advertising easy with our well-thought-out Facebook ads campaigns.",
      CtaText: "Advertise on Facebook"
    },
    {
      bgImage: "bg-[url('../../public/facebook-marketing/youtube.png')]",
      title: "Youtube Advertising Services",
      text: "LeadzExperts develop video-based and text-based ads to drive valuable traffic and capture exceptional leads for your business. Rest assured, we help you enjoy outstanding returns on advertising investment.",
      CtaText: "Advertise on Youtube"
    },
    {
      bgImage: "bg-[url('../../public/facebook-marketing/instagram.png')]",
      title: "Instagram Advertising Services",
      text: "Instagram has become a must-used advertising channel as it welcomes influencers and young audiences from every nook and corner of the world. Build brand awareness by running competitive Instagram ad campaigns with LeadzExperts.",
      CtaText: "Advertise on Instagram"
    },
    {
      bgImage: "bg-[url('../../public/facebook-marketing/twitter.png')]",
      title: "Twitter Advertising Services",
      text: "LeadzExperts maximizes the marketing opportunities and breaks the noise of the endless influx of posts with its aggressive Twitter advertising campaign. Long story short, we help you become the brand the users trust and follow!",
      CtaText: "Advertise on Twitter"
    },
  ]
  return (
    <div className="lg:py-16 md:py-12 py-9">
      <div className="container">
        <div className="text-center">
          <h2 className="lg:text-[38px] md:text-3xl text-2xl lg:leading-[48px] font-extrabold mb-2">Level Up Your Marketing Efforts And Change The Whole Advertising Game With LeadzExperts!</h2>
          <p className="lg:text-lg md:text-base text-sm font-medium">Our Facebook marketing solutions are the missing pieces of your online lead generation puzzle. We set ourselves on the wheel to offer accelerated growth to your business. Here’s how we connect you to qualified prospects and help you capture their interest in your brand.</p>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:py-16 md:py-12 py-9">
          {
            advertisingCard && advertisingCard.map((e, i) => (
              <div key={i} className={`relative xl:mb-0 mb-4 ${e.bgImage} group hover:bg-[#006cff] w-[300px] bg-no-repeat md:bg-contain bg-cover px-4 py-7 h-[370px] bg-center`}>
                <h4 className="text-xl group-hover:text-white font-bold text-black">{e.title}</h4>
                <p className="text-sm group-hover:text-white min-h-[220px] font-medium pt-3 pb-10">{e.text}</p>
                <CTA
                  icon=""
                  bg="bg-transparent"
                  text={e.CtaText}
                  border="border border-[#0f75ff]"
                  color="text-#0f75ff"
                  margin="mb-4"
                  hover="group-hover:text-white group-hover:border-white"
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Advertising;
