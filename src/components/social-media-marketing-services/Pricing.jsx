import Package from "../Packages/Package";

const Pricing = () => {
  return (
    <div className="pb-16">
      <div className="container">
        <div className="text-center">
            <h2 className="lg:text-[50px] lg:leading-[60px] md:text-[40px] text-3xl font-berlin font-extrabold lg:py-5 py-3">Expand Your Reach without Stretching Your Wallet</h2>
            <p className="lg:text-lg md:text-base text-sm font-medium">Our company knows it has been a taxing For all the budget-conscious brands, LeadzExperts is the perfect Social Media advertising company, as the prices of the Social media packages are way too AFFORDABLE.</p>
        </div>
        <Package 
        ctaBG="bg-black"
        ctaHover="hover:bg-gradient-to-r from-[#ffb109] to-blue"
        />
      </div>
    </div>
  )
}

export default Pricing;
