"use client"
// Next
import Image from "next/image";
// Media
import Check from "media/home/check-icon.png"
// Components
import CTA from "C/CTA/CTA";
const Packages = () => {
    let tableHead = [
        {
            theading: "FEATURES"
        },
        {
            theading: "GOOD"
        },
        {
            theading: "BETTER"
        },
        {
            theading: "BEST"
        },
        {
            theading: "CUSTOM"
        },
    ]
    let tableData = [
        [
            "Monthly Social Ad Spend with Netwo", "$500 to $3499", "$3500 to $6999", "$7000-$9999", "Unilimited"
        ],
        [
            "Account Setup Fee", "$300 (Call us to walve)", "$300 (Call us to walve)", "$300 (Call us to walve)", "$300 (Call us to walve)"
        ],
        [
            "Platforms Included: Facebook & Instagram", true, true, true, true
        ],
        [
            "Additonal Social Networks (Twitter, LinkedIn, etc.)", "$100/mo per network", "$100/mo per network", "$100/mo per network", "$100/mo per network"
        ],
        [
            "Advance Ad Placements within Network", true, true, true, true
        ],
        [
            "Initial Campaign Strategy", true, true, true, true
        ],
        [
            "Ad Creation & Development", true, true, true, true
        ],
        [
            "Mon-Fri Ad Monitoring", true, true, true, true
        ],
        [
            "Conversion Tracking Installation", true, true, true, true
        ],
        [
            "Dedicated Account Rep", true, true, true, true
        ],
        [
            "Geotargeting & Location Exclusions", true, true, true, true
        ],
        [
            "Results Analysis/Reporting", true, true, true, true
        ],
        [
            "Social Media Retargeting", true, true, true, true
        ],
        [
            "Video Ads (Provide Video or Purchase a Video Plan)", true, true, true, true
        ],
        [
            "Custom rule based bidding", true, true, true, true
        ],
        [
            "Landing Pages", true, true, true, true
        ],
        [
            "Up to two hours of consultation per month", true, true, true, true
        ],
    ]
    return (
        <section>
            <div className="relative lg:py-16 py-12 before:xl:block before:hidden before:absolute before:bg-[url('../../public/home/table-before.png')] before:bg-no-repeat before:bg-cover before:bg-center before:w-[9.2rem] before:h-[64%] before:-left-0 before:-z-20 before:object-contain">
                <div className='container'>
                    <div className='text-center'>
                        <div className="relative before:bg-[url('../../public/home/line.png')] before:bg-no-repeat before:bg-cover before:bg-center before:absolute before:w-2/4 xl:before:bottom-2 before:right-64 before:h-2 before:xl:block before:hidden">
                            <h2 className='xl:text-[40px] xl:leading-[50px] md:text-[30px] md:leading-[40px] text-[25px] leading-[35px] text-black font-berlin pb-3'>SPARKING YOUR BRAND UP WITH COST-EFFECTIVE SOCIAL MEDIA MARKETING SERVICES</h2>
                        </div>
                        <p className='text-lg px-12 pt-2'>LeadzExperts takes care of your wallet from getting holed with its affordable social media services. No matter the size and shape of your brand, we have multiple packages to suit your needs and requirements.</p>
                    </div>
                    <div className="lg:overflow-hidden overflow-x-scroll">
                            <table className="table-auto border xl:w-[90%] w-full xl:mx-auto mt-14 mb-6">
                                <thead>
                                    <tr>
                                        {
                                            tableHead && tableHead.map((e, i) => (
                                                <th scope="col" key={i} className="py-5 px-2 bg-[#d984ca] first:text-white even:bg-[#CB77BC] w-max ">{e.theading}</th>
                                            ))
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        tableData && tableData.map((row, i) => (
                                            <tr key={i} className="text-center">
                                                {
                                                    row && row.map((td, i) => (
                                                        <td key={i} className="py-5 px-2 border font-semibold w-max first:text-left">{
                                                            td === true ? <Image src={Check} alt="Icons" className="inline-block mx-auto" /> : td
                                                        }</td>
                                                    ))}
                                            </tr>
                                        ))
                                    }
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th className="border text-left text-[22px] px-2">Need more information?</th>
                                        <td className="border">
                                            <CTA
                                                text="TALK TO AN EXPERT"
                                                textSize="text-sm"
                                                icon=""
                                                color="black"
                                                bg="bg-[#d984ca]"
                                                width="w-max"
                                                padding="py-7 px-3"
                                                margin="mx-auto my-2"
                                            />
                                        </td>
                                        <td className="border">
                                            <CTA
                                                text="TALK TO AN EXPERT"
                                                textSize="text-sm"
                                                icon=""
                                                color="black"
                                                bg="bg-[#d984ca]"
                                                width="w-max"
                                                padding="py-7 px-3"
                                                margin="mx-auto my-2"
                                            />
                                        </td>
                                        <td className="border">
                                            <CTA
                                                text="TALK TO AN EXPERT"
                                                textSize="text-sm"
                                                icon=""
                                                color="black"
                                                bg="bg-[#d984ca]"
                                                width="w-max"
                                                padding="py-7 px-3"
                                                margin="mx-auto my-2"
                                            />
                                        </td>
                                        <td className="border">
                                            <CTA
                                                text="TALK TO AN EXPERT"
                                                textSize="text-sm"
                                                icon=""
                                                color="black"
                                                bg="bg-[#d984ca]"
                                                width="w-max"
                                                padding="py-7 px-3"
                                                margin="mx-auto my-2"
                                            />
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                    </div>
                    <p className="text-base font-medium text-gray-500 xl:w-[90%] w-full xl:mx-auto">Need more? Contact us to see how we can create a social media advertising pricing proposal specifically for you. Also, check out some of ourcommon add-ons below:</p>
                    <table className="table-auto border xl:w-[90%] w-full xl:mx-auto mt-6">
                        <tbody className="text-center font-semibold">
                            <tr>
                                <th className="py-3 px-2 bg-[#d984ca] w-2/4">FEATURES</th>
                                <th className="py-3 px-2 bg-[#CB77BC]">Price</th>
                            </tr>
                            <tr>
                                <td className="border py-3 px-2 first:text-left">Email Drip (1 sequence, 4 emails)</td>
                                <td className="border py-3 px-2">$500</td>
                            </tr>
                            <tr>
                                <td className="border py-3 px-2 first:text-left">Landing Pages or Funnel</td>
                                <td className="border py-3 px-2">Included (As Needed)</td>
                            </tr>
                            <tr>
                                <td className="border py-3 px-2 first:text-left">One-Time Video Service</td>
                                <td className="border py-3 px-2">
                                    <CTA
                                        text="TALK TO AN EXPERT"
                                        icon=""
                                        color="text-primary"
                                        bg="bg-transparent"
                                        width="w-max"
                                        margin="mx-auto"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border py-2 px-2 first:text-left text-2xl">Need more information?</td>
                                <td className="border py-2 px-2">
                                    <CTA
                                        text="TALK TO AN EXPERT"
                                        icon=""
                                        color="text-primary"
                                        bg="bg-transparent"
                                        width="w-max"
                                        margin="mx-auto"
                                    /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Packages;
