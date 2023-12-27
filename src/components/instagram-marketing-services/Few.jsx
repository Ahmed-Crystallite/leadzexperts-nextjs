import CTA from "../CTA/CTA";

const Few = () => {
    return (
        <div className="py-16">
            <div className="container">
                <div className="grid grid-cols-2 items-center">
                    <div className="text-center bg-[black] py-14">
                        <h2 className="mb-3 text-[35px] leading-[45px] font-bold bg-gradient-to-r from-[#fe9e3f] to-primary [-webkit-background-clip:text] [-webkit-text-fill-color:#00000021]">Get A Lot in Just a Few!</h2>
                        <p className="mb-3 text-white font-medium">In just a few dollars, you are going to have plenty of bounties.</p>
                        <ul className="text-white font-medium">
                            <li className="text-base leading-7">Boosted brand awareness</li>
                            <li className="text-base leading-7">The massive fan following</li>
                            <li className="text-base leading-7">Increased user engagement</li>
                            <li className="text-base leading-7">Sales-ready leads</li>
                            <li className="text-base leading-7">Word-of-mouth referrals</li>
                            <li className="text-base leading-7">Human-centric and future-proof content that SELLS</li>
                            <li className="text-base leading-7">And a lot more!</li>
                        </ul>
                        <CTA
                            text="GET A FREE INSTAGRAM ADS QUOTE"
                            icon=""
                            bg="bg-[#fe9e3f]"
                            color="text-white"
                            hover="hover:bg-white hover:text-[#fe9e3f]"
                            width="w-max"
                            padding="px-4"
                            height="h-10"
                            margin="mx-auto mt-4"
                            rounded="rounded-lg"
                            textWeight="font-medium"
                        />
                    </div>
                    <div className="text-center bg-[#f0f0f0] py-3">
                        <h2 className="mb-3 text-[27px] leading-[37px] font-bold">What to Expect When You Say US YES?</h2>
                        <p className="text-sm mb-3 px-8 font-medium">We love to build your brand and pave the path to your business excellence. Here’s a snapshot of our Instagram marketing solutions that we bring at your disposal.</p>
                        <ul className="px-8 font-medium">
                            <li className="text-sm leading-6">An in-depth audit of your Instagram account</li>
                            <li className="text-sm leading-6">A custom strategy tailored to your goals</li>
                            <li className="text-sm leading-6">Setting up your Instagram account in the most optimized way</li>
                            <li className="text-sm leading-6">Aggressive management of your Instagram account</li>
                            <li className="text-sm leading-6">Proactive and competitive IG advertising services that bolster your marketing efforts</li>
                            <li className="text-sm leading-6">Periodic consultation with our dedicated Instagram account managers</li>
                            <li className="text-sm leading-6">Highly intuitive content that helps you break the rest of the noise on Instagram</li>
                            <li className="text-sm leading-6">Eye-catching and professionally designed images mirroring your business goals</li>
                            <li className="text-sm leading-6">Monthly Reports</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Few;
