import Package from "../Packages/Package";

const Pricing = () => {
  return (
    <div className="lg:pb-20 md:pb-16 pb-10">
      <div className="container">
        <div className="text-center lg:w-[85%] w-full lg:mx-auto">
            <h2 className="lg:text-[40px] md:text-3xl text-2xl lg:leading-[50px] font-extrabold text-black mb-2">LeadzExperts Helps You Fly High Without Hitting Your Wallet So HARD!</h2>
            <p className="lg:text-lg md:text-base text-sm font-semibold text-black">Our company knows it has been a taxing journey for you to fill in your bank accounts. So, we thought to price our Facebook account managing services at the most honest rates. After all, your satisfaction and peace are what we thrive on! Have a glimpse at our Facebook marketing services packages.</p>
            <Package/>
        </div>
      </div>
    </div>
  )
}

export default Pricing;
