"use client"
// Swipper
import { register } from 'swiper/element/bundle';
// React
import { useState, useEffect, useRef } from "react";
// Next Image
import Image from 'next/image';
// Media
import Done from "media/facebook-marketing/done.png"
// Components
import CTA from '../CTA/CTA';

const Package = ({
    tab1Bg = "bg-[#3681e8]",
    tab2Bg = "bg-[#3681e8]",
    tab3Bg = "bg-[#3681e8]",
    tab1Color = "text-white",
    tab2Color = "text-white",
    tab3Color = "text-white",
    ctaBG = "bg-[#1c6cd9]",
    ctaHover = "hover:bg-black",
}) => {
    let packageContent = [
        {
            plansType: "The Good Plan",
            amount: "$350",
            amount2: "$280",
            amount3: "$210",
            limit: "/month",
            text: "Ideal For Start-ups That Need Help Getting Started On Social Media",
            serviceTitle: "Social Media Posts",
            serviceText: "Total 15 Posts Per Month",
        },
        {
            plansType: "The Better Plan",
            amount: "$700",
            amount2: "560",
            amount3: "$420",
            limit: "/month",
            text: "Percect For Small Businesses Ready To Take Their Business To The Next Level.",
            serviceTitle: "Social Media Posts",
            serviceText: "Total 15 Posts Per Month",
        },
        {
            plansType: "The Best Plan",
            amount: "$1000",
            amount2: "$800",
            amount3: "$600",
            limit: "/month",
            text: "Tailored For Successful Businesses That Are Looking To Outsource Their Social Media.",
            serviceTitle: "Social Media Posts",
            serviceText: "Total 15 Posts Per Month",
        },
    ]
    let packageservices = [
        {
            serviceText: "Total 15 Posts Per Month",
        },
        {
            serviceText: "10 Graphic Social Posts",
        },
        {
            serviceText: "03 Stories",
        },
        {
            serviceText: "02 GIFS/Carousel Posts",
        },
    ]
    let packageservices2 = [
        {
            serviceText: "Facebook",
        },
        {
            serviceText: "Instagram",
        },
    ]
    let packageservices3 = [
        {
            serviceText: "Facebook and Instagram Ads",
        },
        {
            serviceText: "Total 1 Campaign Per Month",
        },
        {
            serviceText: "05 Adsets Per Month",
        },
    ]
    let packageservices4 = [
        {
            serviceText: "01 Dedicated Social Media Copywriter",
        },
        {
            serviceText: "01 Dedicated Graphic Designer",
        },
        {
            serviceText: "01 Dedicated Ads Expert",
        },
        {
            serviceText: "01 Dedicated Account Manager",
        },
    ]
    let packageservices5 = [
        {
            serviceText: "Monthly Social Posts Scheduling",
        },
        {
            serviceText: "Social Community Management (Query + Comment Responses)",
        },
        {
            serviceText: "Social Page Optimization (Cover Photo, About Section, Display Picture and more)",
        },
        {
            serviceText: "Facebook Business Manager Setup",
        },
        {
            serviceText: "Facebook Pixel Integration",
        },
    ]
    const [activeTab1, setActiveTab1] = useState("tab1");
    function prices(tabs1) {
        setActiveTab1(tabs1);
    }
    const swiperRef = useRef(null);
    useEffect(() => {
        register();
        const params = {
            // slidesPerGroupSkip: 1,
            speed: 1500,
            slidesPerView: 3,
            loop: true,
            breakpoints: {
                300: {
                    slidesPerView: 1,
                    autoplay: true,
                    autoplayDelay: 2500,
                    pagination: true,
                },
                992: {
                    slidesPerView: 2,
                    autoplay: true,
                    autoplayDelay: 2500,
                    pagination: true,
                },
                1200: {
                    slidesPerView: 3,
                    autoplay: true,
                    autoplayDelay: 2500,
                },
            },
        };
        // Assign it to swiper element
        Object.assign(swiperRef.current, params);
        // initialize swiper
        swiperRef.current.initialize();
    }, [activeTab1]);
    return (
        <>
            <div className='bg-white shadow-[2px_2px_20px_rgb(0,0,0,70%)] w-[400px] mx-auto py-5 rounded-2xl mt-10 flex justify-center gap-x-5'>
                <button onClick={() => prices("tab1")} className={`text-base font-bold duration-300 ease-in-out hover:text-[#0056b3] active:bg-black active:text-white block`}>MONTHLY<span className='text-sm block'>(SAVE 10%)</span></button>
                <button onClick={() => prices("tab2")} className={`text-base font-bold duration-300 ease-in-out hover:text-[#0056b3] active:bg-black active:text-white block`}>QUARTERLY<span className='text-sm block'>(SAVE 25%)</span></button>
                <button onClick={() => prices("tab3")} className={`text-base font-bold duration-300 ease-in-out hover:text-[#0056b3] active:bg-black active:text-white block`}>ANNUALLY<span className='text-sm block'>(SAVE 33%)</span></button>
            </div>
            {activeTab1 == "tab1" && (
                <swiper-container ref={swiperRef} init={false}>
                    {
                        packageContent && packageContent.map((e, i) => (
                            <swiper-slide>
                                <div key={i} className='text-left border border-[rgba(128,128,128,.5)]'>
                                    <div className={` ${tab1Bg} ${tab1Color} text-left px-2 py-12`}>
                                        <p className="text-2xl font-light">{e.plansType}</p>
                                        <h3 className="text-[50px] leading-[60px] font-bold">{e.amount}<span className="text-xl">{e.limit}</span></h3>
                                        <p className='text-sm font-normal'>{e.text}</p>
                                    </div>
                                    <div className={`scroll-smooth h-[500px] overflow-y-scroll px-4 py-4`}>
                                        <h5 className='mb-2 text-base font-extrabold'>
                                            <span className="border-b-2 border-[#519bff]">
                                                Social Media Posts
                                            </span>
                                        </h5>
                                        {
                                            packageservices && packageservices.map((e, i) => (
                                                <p key={i} className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />{e.serviceText}</p>
                                            ))
                                        }
                                        <h5 className='my-2 text-base font-extrabold'>
                                            <span className="border-b-2 border-[#519bff]">
                                                Social Platforms Supported
                                            </span>
                                        </h5>
                                        {
                                            packageservices2 && packageservices2.map((e, i) => (
                                                <p key={i} className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />{e.serviceText}</p>
                                            ))
                                        }
                                        <h5 className='my-2 text-base font-extrabold'>
                                            <span className="border-b-2 border-[#519bff]">
                                                Social Ads Management
                                            </span>
                                        </h5>
                                        {
                                            packageservices3 && packageservices3.map((e, i) => (
                                                <p key={i} className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />{e.serviceText}</p>
                                            ))
                                        }
                                        <h5 className='my-2 text-base font-extrabold'>
                                            <span className="border-b-2 border-[#519bff]">
                                                Total Designated Team Members
                                            </span>
                                        </h5>
                                        {
                                            packageservices4 && packageservices4.map((e, i) => (
                                                <p key={i} className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />{e.serviceText}</p>
                                            ))
                                        }
                                        <h5 className='my-2 text-base font-extrabold'>
                                            <span className="border-b-2 border-[#519bff]">
                                                Social Media Management
                                            </span>
                                        </h5>
                                        {
                                            packageservices5 && packageservices5.map((e, i) => (
                                                <p key={i} className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />{e.serviceText}</p>
                                            ))
                                        }
                                    </div>
                                    <div className='pt-10 pb-2 px-6'>
                                        <CTA
                                            text="Order Now"
                                            bg={ctaBG}
                                            icon=''
                                            width='w-full'
                                            hover={ctaHover}
                                        />
                                        <CTA
                                            text="Call (346)-299-2221"
                                            bg='bg-transparent'
                                            color='text-black'
                                            width='w-full'
                                            margin="mt-5"
                                        />
                                    </div>
                                </div>
                            </swiper-slide>
                        ))
                    }
                </swiper-container>
            )}
            {activeTab1 == "tab2" && (
                <swiper-container ref={swiperRef} init={false}>
                    {
                        packageContent && packageContent.map((e, i) => (
                            <swiper-slide>
                                <div key={i} className='text-left border border-[rgba(128,128,128,.5)]'>
                                    <div className={` ${tab1Bg} ${tab1Color} text-left px-2 py-12`}>
                                        <p className="text-2xl font-light">{e.plansType}</p>
                                        <h3 className="text-[50px] leading-[60px] font-bold">{e.amount2}<span className="text-xl">{e.limit}</span></h3>
                                        <p className='text-sm font-normal'>{e.text}</p>
                                    </div>
                                    <div className={`scroll-smooth h-[500px] overflow-y-scroll px-4 py-4`}>
                                        <h5 className='mb-2 text-base font-extrabold'>
                                            <span className="border-b-2 border-[#519bff]">
                                                Social Media Posts
                                            </span>
                                        </h5>
                                        {
                                            packageservices && packageservices.map((e, i) => (
                                                <p key={i} className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />{e.serviceText}</p>
                                            ))
                                        }
                                        <h5 className='my-2 text-base font-extrabold'>
                                            <span className="border-b-2 border-[#519bff]">
                                                Social Platforms Supported
                                            </span>
                                        </h5>
                                        {
                                            packageservices2 && packageservices2.map((e, i) => (
                                                <p key={i} className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />{e.serviceText}</p>
                                            ))
                                        }
                                        <h5 className='my-2 text-base font-extrabold'>
                                            <span className="border-b-2 border-[#519bff]">
                                                Social Ads Management
                                            </span>
                                        </h5>
                                        {
                                            packageservices3 && packageservices3.map((e, i) => (
                                                <p key={i} className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />{e.serviceText}</p>
                                            ))
                                        }
                                        <h5 className='my-2 text-base font-extrabold'>
                                            <span className="border-b-2 border-[#519bff]">
                                                Total Designated Team Members
                                            </span>
                                        </h5>
                                        {
                                            packageservices4 && packageservices4.map((e, i) => (
                                                <p key={i} className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />{e.serviceText}</p>
                                            ))
                                        }
                                        <h5 className='my-2 text-base font-extrabold'>
                                            <span className="border-b-2 border-[#519bff]">
                                                Social Media Management
                                            </span>
                                        </h5>
                                        {
                                            packageservices5 && packageservices5.map((e, i) => (
                                                <p key={i} className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />{e.serviceText}</p>
                                            ))
                                        }
                                    </div>
                                    <div className='pt-10 pb-2 px-6'>
                                        <CTA
                                            text="Order Now"
                                            bg={ctaBG}
                                            icon=''
                                            width='w-full'
                                            hover={ctaHover}
                                        />
                                        <CTA
                                            text="Call (346)-299-2221"
                                            bg='bg-transparent'
                                            color='text-black'
                                            width='w-full'
                                            margin="mt-5"
                                        />
                                    </div>
                                </div>
                            </swiper-slide>
                        ))
                    }
                </swiper-container>
            )}
            {activeTab1 == "tab3" && (
                <swiper-container ref={swiperRef} init={false}>
                    {
                        packageContent && packageContent.map((e, i) => (
                            <swiper-slide>
                                <div key={i} className='text-left border border-[rgba(128,128,128,.5)]'>
                                    <div className={` ${tab1Bg} ${tab1Color} text-left px-2 py-12`}>
                                        <p className="text-2xl font-light">{e.plansType}</p>
                                        <h3 className="text-[50px] leading-[60px] font-bold">{e.amount3}<span className="text-xl">{e.limit}</span></h3>
                                        <p className='text-sm font-normal'>{e.text}</p>
                                    </div>
                                    <div className={`scroll-smooth h-[500px] overflow-y-scroll px-4 py-4`}>
                                        <h5 className='mb-2 text-base font-extrabold'>
                                            <span className="border-b-2 border-[#519bff]">
                                                Social Media Posts
                                            </span>
                                        </h5>
                                        {
                                            packageservices && packageservices.map((e, i) => (
                                                <p key={i} className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />{e.serviceText}</p>
                                            ))
                                        }
                                        <h5 className='my-2 text-base font-extrabold'>
                                            <span className="border-b-2 border-[#519bff]">
                                                Social Platforms Supported
                                            </span>
                                        </h5>
                                        {
                                            packageservices2 && packageservices2.map((e, i) => (
                                                <p key={i} className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />{e.serviceText}</p>
                                            ))
                                        }
                                        <h5 className='my-2 text-base font-extrabold'>
                                            <span className="border-b-2 border-[#519bff]">
                                                Social Ads Management
                                            </span>
                                        </h5>
                                        {
                                            packageservices3 && packageservices3.map((e, i) => (
                                                <p key={i} className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />{e.serviceText}</p>
                                            ))
                                        }
                                        <h5 className='my-2 text-base font-extrabold'>
                                            <span className="border-b-2 border-[#519bff]">
                                                Total Designated Team Members
                                            </span>
                                        </h5>
                                        {
                                            packageservices4 && packageservices4.map((e, i) => (
                                                <p key={i} className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />{e.serviceText}</p>
                                            ))
                                        }
                                        <h5 className='my-2 text-base font-extrabold'>
                                            <span className="border-b-2 border-[#519bff]">
                                                Social Media Management
                                            </span>
                                        </h5>
                                        {
                                            packageservices5 && packageservices5.map((e, i) => (
                                                <p key={i} className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />{e.serviceText}</p>
                                            ))
                                        }
                                    </div>
                                    <div className='pt-10 pb-2 px-6'>
                                        <CTA
                                            text="Order Now"
                                            bg={ctaBG}
                                            icon=''
                                            width='w-full'
                                            hover={ctaHover}
                                        />
                                        <CTA
                                            text="Call (346)-299-2221"
                                            bg='bg-transparent'
                                            color='text-black'
                                            width='w-full'
                                            margin="mt-5"
                                        />
                                    </div>
                                </div>
                            </swiper-slide>
                        ))
                    }
                </swiper-container>
            )}
        </>
    );
}
export default Package;