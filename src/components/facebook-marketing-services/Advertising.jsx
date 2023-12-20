import CTA from "../CTA/CTA";

const Advertising = () => {
  return (
    <div className="py-16">
      <div className="container">
        <div className="text-center">
            <h2 className="text-[38px] leading-[48px] font-extrabold mb-2">Level Up Your Marketing Efforts And Change The Whole Advertising Game With LeadzExperts!</h2>
            <p className="text-lg font-medium">Our Facebook marketing solutions are the missing pieces of your online lead generation puzzle. We set ourselves on the wheel to offer accelerated growth to your business. Here’s how we connect you to qualified prospects and help you capture their interest in your brand.</p>
        </div>
            <div className="grid grid-cols-4">
            <div className="relative bg-[url('../../public/facebook-marketing/facebook.png')] w-full bg-no-repeat bg-contain px-5 bg-center">
                <h4 className="text-xl font-bold text-black pt-8">Facebook Advertising Services</h4>
                <p className="mb-14">Get ready to be on top of your prospects' minds and help them stay updated with your offerings. We make Facebook advertising easy with our well-thought-out Facebook ads campaigns.</p>
                <CTA 
                icon=""
                bg="bg-transparent"
                text="Advertise on Facebook"
                border="border border-[#0f75ff]"
                color="text-#0f75ff"
                margin="mb-4"
                />
            </div>
            </div>
      </div>
    </div>
  )
}

export default Advertising;
