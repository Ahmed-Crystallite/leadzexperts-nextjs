import Package from "../Packages/Package";

const Pricing = () => {
    return (
        <div className="">
            <div className="container">
                <div className="text-center relative mb-10">
                    <h2 className="text-[50px] leading-[60px] font-extrabold font-berlin text-black relative mb-3">Expand Your Brand Without <span className="relative bg-gradient-to-r from-[#fe9e3f] to-primary [-webkit-background-clip:text] [-webkit-text-fill-color:#00000021] before:bg-[url('../../public/instagram-marketing/line-1.png')] before:bg-no-repeat before:bg-cover before:bg-center before:absolute before:w-full before:h-3 before:top-14">Spending</span> Too Much!</h2>
                    <p className="text-lg px-8 leading-[22px] font-normal text-black">Our company knows it has been a taxing journey for you to fill in your bank accounts. So, we thought to price our Instagram Marketing Services at the most honest rates. After all, your satisfaction and peace are what we thrive on! Have a glimpse at our Instagram marketing services packages.</p>
                </div>
                <Package/>
            </div>
        </div>
    )
}

export default Pricing;
