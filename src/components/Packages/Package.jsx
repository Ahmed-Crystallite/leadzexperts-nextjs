"use client"
// React
import { useState } from 'react';
// Next Image
import Image from 'next/image';
// Media
import Done from "media/facebook-marketing/done.png"
// Components
import CTA from '../CTA/CTA';

const Package = () => {
    const [activeTab1, setActiveTab1] = useState("tab1");
    function prices(tabs1) {
        setActiveTab1(tabs1);
    }
    const packagesTab1 = [
        {}
    ]
    return (
        <>
            <div className='bg-white shadow-[2px_2px_20px_rgb(0,0,0,70%)] w-[400px] mx-auto py-5 rounded-2xl mt-10 flex justify-center gap-x-5'>
                <button onClick={() => prices("tab1")} className={`text-base font-bold duration-300 ease-in-out hover:text-[#0056b3] active:bg-black active:text-white block`}>MONTHLY<span className='text-sm block'>(SAVE 10%)</span></button>
                <button onClick={() => prices("tab2")} className={`text-base font-bold duration-300 ease-in-out hover:text-[#0056b3] active:bg-black active:text-white block`}>QUARTERLY<span className='text-sm block'>(SAVE 25%)</span></button>
                <button onClick={() => prices("tab3")} className={`text-base font-bold duration-300 ease-in-out hover:text-[#0056b3] active:bg-black active:text-white block`}>ANNUALLY<span className='text-sm block'>(SAVE 33%)</span></button>
            </div>
            {activeTab1 == "tab1" && (
                <div className='grid grid-cols-3 items-center'>
                    <div>
                        <div className='text-left border border-[rgba(128,128,128,.5)]'>
                            <div className='bg-[#3681e8] text-left px-2 py-12'>
                                <p className="text-2xl font-light text-white">The Good Plan</p>
                                <h3 className="text-[50px] leading-[60px] font-bold text-white">$350<span className="text-xl">/month</span></h3>
                                <p className='text-sm font-normal text-white'>Ideal For Start-ups That Need Help Getting Started On Social Media</p>
                            </div>
                            <div className={`scroll-smooth h-[500px] overflow-y-scroll px-4 py-4`}>
                                <h5 className='mb-2 text-base font-extrabold'>
                                    <span className="border-b-2 border-[#519bff]">
                                        Social Media Posts
                                    </span>
                                </h5>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Total 15 Posts Per Month</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />10 Graphic Social Posts</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />03 Stories</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />02 GIFS/Carousel Posts</p>
                                <h5 className='mb-2 text-base font-extrabold'>
                                    <span className="border-b-2 border-[#519bff]">
                                        Social Platforms Supported
                                    </span>
                                </h5>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Facebook</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />Instagram</p>
                                <h5 className='mb-2 text-base font-extrabold'>
                                    <span className="border-b-2 border-[#519bff]">
                                        Social Ads Management
                                    </span>
                                </h5>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Facebook and Instagram Ads</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Total 1 Campaign Per Month</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />05 Adsets Per Month</p>
                                <h5 className='mb-2 text-base font-extrabold'>
                                    <span className="border-b-2 border-[#519bff]">
                                        Total Designated Team Members
                                    </span>
                                </h5>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />01 Dedicated Social Media Copywriter</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />01 Dedicated Graphic Designer</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />01 Dedicated Ads Expert</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />01 Dedicated Account Manager</p>
                                <h5 className='mb-2 text-base font-extrabold'>
                                    <span className="border-b-2 border-[#519bff]">
                                        Social Media Management
                                    </span>
                                </h5>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Monthly Social Posts Scheduling</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' /> Social Community Management (Query + Comment Responses)</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' /> Social Page Optimization (Cover Photo, About Section, Display Picture and more)</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' /> Facebook Business Manager Setup</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' /> Facebook Pixel Integration</p>
                            </div>
                            <div className='pt-10 pb-2 px-6'>
                                <CTA
                                    text="Order Now"
                                    bg='bg-[#1c6cd9]'
                                    icon=''
                                    width='w-full'
                                    hover="hover:bg-black"
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
                    </div>
                    <div>
                        <div>
                            <div className='text-left border border-[rgba(128,128,128,.5)]'>
                                <div className='bg-[#3681e8] text-left px-2 py-12'>
                                    <p className="text-2xl font-light text-white">The Better Plan</p>
                                    <h3 className="text-[50px] leading-[60px] font-bold text-white">$700<span className="text-xl">/month</span></h3>
                                    <p className='text-sm font-normal text-white'>Percect For Small Businesses Ready To Take Their Business To The Next Level.</p>
                                </div>
                                <div className={`scroll-smooth h-[500px] overflow-y-scroll px-4 py-4`}>
                                    <h5 className='mb-2 text-base font-extrabold'>
                                        <span className="border-b-2 border-[#519bff]">
                                            Social Media Posts
                                        </span>
                                    </h5>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Total 15 Posts Per Month</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />10 Graphic Social Posts</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />03 Stories</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />02 GIFS/Carousel Posts</p>
                                    <h5 className='mb-2 text-base font-extrabold'>
                                        <span className="border-b-2 border-[#519bff]">
                                            Social Platforms Supported
                                        </span>
                                    </h5>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Facebook</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />Instagram</p>
                                    <h5 className='mb-2 text-base font-extrabold'>
                                        <span className="border-b-2 border-[#519bff]">
                                            Social Ads Management
                                        </span>
                                    </h5>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Facebook and Instagram Ads</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Total 1 Campaign Per Month</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />05 Adsets Per Month</p>
                                    <h5 className='mb-2 text-base font-extrabold'>
                                        <span className="border-b-2 border-[#519bff]">
                                            Total Designated Team Members
                                        </span>
                                    </h5>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />01 Dedicated Social Media Copywriter</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />01 Dedicated Graphic Designer</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />01 Dedicated Ads Expert</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />01 Dedicated Account Manager</p>
                                    <h5 className='mb-2 text-base font-extrabold'>
                                        <span className="border-b-2 border-[#519bff]">
                                            Social Media Management
                                        </span>
                                    </h5>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Monthly Social Posts Scheduling</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' /> Social Community Management (Query + Comment Responses)</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' /> Social Page Optimization (Cover Photo, About Section, Display Picture and more)</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' /> Facebook Business Manager Setup</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' /> Facebook Pixel Integration</p>
                                </div>
                                <div className='pt-10 pb-2 px-6'>
                                    <CTA
                                        text="Order Now"
                                        bg='bg-[#1c6cd9]'
                                        icon=''
                                        width='w-full'
                                        hover="hover:bg-black"
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
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='text-left border border-[rgba(128,128,128,.5)]'>
                                <div className='bg-[#3681e8] text-left px-2 py-12'>
                                    <p className="text-2xl font-light text-white">The Best Plan</p>
                                    <h3 className="text-[50px] leading-[60px] font-bold text-white">$1000<span className="text-xl">/month</span></h3>
                                    <p className='text-sm font-normal text-white'>Tailored For Successful Businesses That Are Looking To Outsource Their Social Media.</p>
                                </div>
                                <div className={`scroll-smooth h-[500px] overflow-y-scroll px-4 py-4`}>
                                    <h5 className='mb-2 text-base font-extrabold'>
                                        <span className="border-b-2 border-[#519bff]">
                                            Social Media Posts
                                        </span>
                                    </h5>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Total 15 Posts Per Month</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />10 Graphic Social Posts</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />03 Stories</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />02 GIFS/Carousel Posts</p>
                                    <h5 className='mb-2 text-base font-extrabold'>
                                        <span className="border-b-2 border-[#519bff]">
                                            Social Platforms Supported
                                        </span>
                                    </h5>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Facebook</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />Instagram</p>
                                    <h5 className='mb-2 text-base font-extrabold'>
                                        <span className="border-b-2 border-[#519bff]">
                                            Social Ads Management
                                        </span>
                                    </h5>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Facebook and Instagram Ads</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Total 1 Campaign Per Month</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />05 Adsets Per Month</p>
                                    <h5 className='mb-2 text-base font-extrabold'>
                                        <span className="border-b-2 border-[#519bff]">
                                            Total Designated Team Members
                                        </span>
                                    </h5>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />01 Dedicated Social Media Copywriter</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />01 Dedicated Graphic Designer</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />01 Dedicated Ads Expert</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />01 Dedicated Account Manager</p>
                                    <h5 className='mb-2 text-base font-extrabold'>
                                        <span className="border-b-2 border-[#519bff]">
                                            Social Media Management
                                        </span>
                                    </h5>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Monthly Social Posts Scheduling</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' /> Social Community Management (Query + Comment Responses)</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' /> Social Page Optimization (Cover Photo, About Section, Display Picture and more)</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' /> Facebook Business Manager Setup</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' /> Facebook Pixel Integration</p>
                                </div>
                                <div className='pt-10 pb-2 px-6'>
                                    <CTA
                                        text="Order Now"
                                        bg='bg-[#1c6cd9]'
                                        icon=''
                                        width='w-full'
                                        hover="hover:bg-black"
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
                        </div>
                    </div>
                </div>
            )}
            {activeTab1 == "tab2" && (
                <div className='grid grid-cols-3 items-center'>
                    <div>
                        <div className='text-left border border-[rgba(128,128,128,.5)]'>
                            <div className='bg-[#3681e8] text-left px-2 py-12'>
                                <p className="text-2xl font-light text-white">The Good Plan</p>
                                <h3 className="text-[50px] leading-[60px] font-bold text-white">$$280<span className="text-xl">/month</span></h3>
                                <p className='text-sm font-normal text-white'>Ideal For Start-ups That Need Help Getting Started On Social Media</p>
                            </div>
                            <div className={`scroll-smooth h-[500px] overflow-y-scroll px-4 py-4`}>
                                <h5 className='mb-2 text-base font-extrabold'>
                                    <span className="border-b-2 border-[#519bff]">
                                        Social Media Posts
                                    </span>
                                </h5>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Total 15 Posts Per Month</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />10 Graphic Social Posts</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />03 Stories</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />02 GIFS/Carousel Posts</p>
                                <h5 className='mb-2 text-base font-extrabold'>
                                    <span className="border-b-2 border-[#519bff]">
                                        Social Platforms Supported
                                    </span>
                                </h5>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Facebook</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />Instagram</p>
                                <h5 className='mb-2 text-base font-extrabold'>
                                    <span className="border-b-2 border-[#519bff]">
                                        Social Ads Management
                                    </span>
                                </h5>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Facebook and Instagram Ads</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Total 1 Campaign Per Month</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />05 Adsets Per Month</p>
                                <h5 className='mb-2 text-base font-extrabold'>
                                    <span className="border-b-2 border-[#519bff]">
                                        Total Designated Team Members
                                    </span>
                                </h5>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />01 Dedicated Social Media Copywriter</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />01 Dedicated Graphic Designer</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />01 Dedicated Ads Expert</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />01 Dedicated Account Manager</p>
                                <h5 className='mb-2 text-base font-extrabold'>
                                    <span className="border-b-2 border-[#519bff]">
                                        Social Media Management
                                    </span>
                                </h5>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Monthly Social Posts Scheduling</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' /> Social Community Management (Query + Comment Responses)</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' /> Social Page Optimization (Cover Photo, About Section, Display Picture and more)</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' /> Facebook Business Manager Setup</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' /> Facebook Pixel Integration</p>
                            </div>
                            <div className='pt-10 pb-2 px-6'>
                                <CTA
                                    text="Order Now"
                                    bg='bg-[#1c6cd9]'
                                    icon=''
                                    width='w-full'
                                    hover="hover:bg-black"
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
                    </div>
                    <div>
                        <div>
                            <div className='text-left border border-[rgba(128,128,128,.5)]'>
                                <div className='bg-[#3681e8] text-left px-2 py-12'>
                                    <p className="text-2xl font-light text-white">The Better Plan</p>
                                    <h3 className="text-[50px] leading-[60px] font-bold text-white">$560<span className="text-xl">/month</span></h3>
                                    <p className='text-sm font-normal text-white'>Percect For Small Businesses Ready To Take Their Business To The Next Level.</p>
                                </div>
                                <div className={`scroll-smooth h-[500px] overflow-y-scroll px-4 py-4`}>
                                    <h5 className='mb-2 text-base font-extrabold'>
                                        <span className="border-b-2 border-[#519bff]">
                                            Social Media Posts
                                        </span>
                                    </h5>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Total 15 Posts Per Month</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />10 Graphic Social Posts</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />03 Stories</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />02 GIFS/Carousel Posts</p>
                                    <h5 className='mb-2 text-base font-extrabold'>
                                        <span className="border-b-2 border-[#519bff]">
                                            Social Platforms Supported
                                        </span>
                                    </h5>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Facebook</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />Instagram</p>
                                    <h5 className='mb-2 text-base font-extrabold'>
                                        <span className="border-b-2 border-[#519bff]">
                                            Social Ads Management
                                        </span>
                                    </h5>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Facebook and Instagram Ads</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Total 1 Campaign Per Month</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />05 Adsets Per Month</p>
                                    <h5 className='mb-2 text-base font-extrabold'>
                                        <span className="border-b-2 border-[#519bff]">
                                            Total Designated Team Members
                                        </span>
                                    </h5>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />01 Dedicated Social Media Copywriter</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />01 Dedicated Graphic Designer</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />01 Dedicated Ads Expert</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />01 Dedicated Account Manager</p>
                                    <h5 className='mb-2 text-base font-extrabold'>
                                        <span className="border-b-2 border-[#519bff]">
                                            Social Media Management
                                        </span>
                                    </h5>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Monthly Social Posts Scheduling</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' /> Social Community Management (Query + Comment Responses)</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' /> Social Page Optimization (Cover Photo, About Section, Display Picture and more)</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' /> Facebook Business Manager Setup</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' /> Facebook Pixel Integration</p>
                                </div>
                                <div className='pt-10 pb-2 px-6'>
                                    <CTA
                                        text="Order Now"
                                        bg='bg-[#1c6cd9]'
                                        icon=''
                                        width='w-full'
                                        hover="hover:bg-black"
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
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='text-left border border-[rgba(128,128,128,.5)]'>
                                <div className='bg-[#3681e8] text-left px-2 py-12'>
                                    <p className="text-2xl font-light text-white">The Best Plan</p>
                                    <h3 className="text-[50px] leading-[60px] font-bold text-white">$800<span className="text-xl">/month</span></h3>
                                    <p className='text-sm font-normal text-white'>Tailored For Successful Businesses That Are Looking To Outsource Their Social Media.</p>
                                </div>
                                <div className={`scroll-smooth h-[500px] overflow-y-scroll px-4 py-4`}>
                                    <h5 className='mb-2 text-base font-extrabold'>
                                        <span className="border-b-2 border-[#519bff]">
                                            Social Media Posts
                                        </span>
                                    </h5>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Total 15 Posts Per Month</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />10 Graphic Social Posts</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />03 Stories</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />02 GIFS/Carousel Posts</p>
                                    <h5 className='mb-2 text-base font-extrabold'>
                                        <span className="border-b-2 border-[#519bff]">
                                            Social Platforms Supported
                                        </span>
                                    </h5>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Facebook</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />Instagram</p>
                                    <h5 className='mb-2 text-base font-extrabold'>
                                        <span className="border-b-2 border-[#519bff]">
                                            Social Ads Management
                                        </span>
                                    </h5>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Facebook and Instagram Ads</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Total 1 Campaign Per Month</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />05 Adsets Per Month</p>
                                    <h5 className='mb-2 text-base font-extrabold'>
                                        <span className="border-b-2 border-[#519bff]">
                                            Total Designated Team Members
                                        </span>
                                    </h5>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />01 Dedicated Social Media Copywriter</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />01 Dedicated Graphic Designer</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />01 Dedicated Ads Expert</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />01 Dedicated Account Manager</p>
                                    <h5 className='mb-2 text-base font-extrabold'>
                                        <span className="border-b-2 border-[#519bff]">
                                            Social Media Management
                                        </span>
                                    </h5>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Monthly Social Posts Scheduling</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' /> Social Community Management (Query + Comment Responses)</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' /> Social Page Optimization (Cover Photo, About Section, Display Picture and more)</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' /> Facebook Business Manager Setup</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' /> Facebook Pixel Integration</p>
                                </div>
                                <div className='pt-10 pb-2 px-6'>
                                    <CTA
                                        text="Order Now"
                                        bg='bg-[#1c6cd9]'
                                        icon=''
                                        width='w-full'
                                        hover="hover:bg-black"
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
                        </div>
                    </div>
                </div>
            )}
            {activeTab1 == "tab3" && (
                <div className='grid grid-cols-3 items-center'>
                    <div>
                        <div className='text-left border border-[rgba(128,128,128,.5)]'>
                            <div className='bg-[#3681e8] text-left px-2 py-12'>
                                <p className="text-2xl font-light text-white">The Good Plan</p>
                                <h3 className="text-[50px] leading-[60px] font-bold text-white">$210<span className="text-xl">/month</span></h3>
                                <p className='text-sm font-normal text-white'>Ideal For Start-ups That Need Help Getting Started On Social Media</p>
                            </div>
                            <div className={`scroll-smooth h-[500px] overflow-y-scroll px-4 py-4`}>
                                <h5 className='mb-2 text-base font-extrabold'>
                                    <span className="border-b-2 border-[#519bff]">
                                        Social Media Posts
                                    </span>
                                </h5>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Total 15 Posts Per Month</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />10 Graphic Social Posts</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />03 Stories</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />02 GIFS/Carousel Posts</p>
                                <h5 className='mb-2 text-base font-extrabold'>
                                    <span className="border-b-2 border-[#519bff]">
                                        Social Platforms Supported
                                    </span>
                                </h5>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Facebook</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />Instagram</p>
                                <h5 className='mb-2 text-base font-extrabold'>
                                    <span className="border-b-2 border-[#519bff]">
                                        Social Ads Management
                                    </span>
                                </h5>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Facebook and Instagram Ads</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Total 1 Campaign Per Month</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />05 Adsets Per Month</p>
                                <h5 className='mb-2 text-base font-extrabold'>
                                    <span className="border-b-2 border-[#519bff]">
                                        Total Designated Team Members
                                    </span>
                                </h5>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />01 Dedicated Social Media Copywriter</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />01 Dedicated Graphic Designer</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />01 Dedicated Ads Expert</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />01 Dedicated Account Manager</p>
                                <h5 className='mb-2 text-base font-extrabold'>
                                    <span className="border-b-2 border-[#519bff]">
                                        Social Media Management
                                    </span>
                                </h5>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Monthly Social Posts Scheduling</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' /> Social Community Management (Query + Comment Responses)</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' /> Social Page Optimization (Cover Photo, About Section, Display Picture and more)</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' /> Facebook Business Manager Setup</p>
                                <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' /> Facebook Pixel Integration</p>
                            </div>
                            <div className='pt-10 pb-2 px-6'>
                                <CTA
                                    text="Order Now"
                                    bg='bg-[#1c6cd9]'
                                    icon=''
                                    width='w-full'
                                    hover="hover:bg-black"
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
                    </div>
                    <div>
                        <div>
                            <div className='text-left border border-[rgba(128,128,128,.5)]'>
                                <div className='bg-[#3681e8] text-left px-2 py-12'>
                                    <p className="text-2xl font-light text-white">The Better Plan</p>
                                    <h3 className="text-[50px] leading-[60px] font-bold text-white">$420<span className="text-xl">/month</span></h3>
                                    <p className='text-sm font-normal text-white'>Percect For Small Businesses Ready To Take Their Business To The Next Level.</p>
                                </div>
                                <div className={`scroll-smooth h-[500px] overflow-y-scroll px-4 py-4`}>
                                    <h5 className='mb-2 text-base font-extrabold'>
                                        <span className="border-b-2 border-[#519bff]">
                                            Social Media Posts
                                        </span>
                                    </h5>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Total 15 Posts Per Month</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />10 Graphic Social Posts</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />03 Stories</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />02 GIFS/Carousel Posts</p>
                                    <h5 className='mb-2 text-base font-extrabold'>
                                        <span className="border-b-2 border-[#519bff]">
                                            Social Platforms Supported
                                        </span>
                                    </h5>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Facebook</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />Instagram</p>
                                    <h5 className='mb-2 text-base font-extrabold'>
                                        <span className="border-b-2 border-[#519bff]">
                                            Social Ads Management
                                        </span>
                                    </h5>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Facebook and Instagram Ads</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Total 1 Campaign Per Month</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />05 Adsets Per Month</p>
                                    <h5 className='mb-2 text-base font-extrabold'>
                                        <span className="border-b-2 border-[#519bff]">
                                            Total Designated Team Members
                                        </span>
                                    </h5>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />01 Dedicated Social Media Copywriter</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />01 Dedicated Graphic Designer</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />01 Dedicated Ads Expert</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />01 Dedicated Account Manager</p>
                                    <h5 className='mb-2 text-base font-extrabold'>
                                        <span className="border-b-2 border-[#519bff]">
                                            Social Media Management
                                        </span>
                                    </h5>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Monthly Social Posts Scheduling</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' /> Social Community Management (Query + Comment Responses)</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' /> Social Page Optimization (Cover Photo, About Section, Display Picture and more)</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' /> Facebook Business Manager Setup</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' /> Facebook Pixel Integration</p>
                                </div>
                                <div className='pt-10 pb-2 px-6'>
                                    <CTA
                                        text="Order Now"
                                        bg='bg-[#1c6cd9]'
                                        icon=''
                                        width='w-full'
                                        hover="hover:bg-black"
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
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='text-left border border-[rgba(128,128,128,.5)]'>
                                <div className='bg-[#3681e8] text-left px-2 py-12'>
                                    <p className="text-2xl font-light text-white">The Best Plan</p>
                                    <h3 className="text-[50px] leading-[60px] font-bold text-white">$600<span className="text-xl">/month</span></h3>
                                    <p className='text-sm font-normal text-white'>Tailored For Successful Businesses That Are Looking To Outsource Their Social Media.</p>
                                </div>
                                <div className={`scroll-smooth h-[500px] overflow-y-scroll px-4 py-4`}>
                                    <h5 className='mb-2 text-base font-extrabold'>
                                        <span className="border-b-2 border-[#519bff]">
                                            Social Media Posts
                                        </span>
                                    </h5>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Total 15 Posts Per Month</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />10 Graphic Social Posts</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />03 Stories</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />02 GIFS/Carousel Posts</p>
                                    <h5 className='mb-2 text-base font-extrabold'>
                                        <span className="border-b-2 border-[#519bff]">
                                            Social Platforms Supported
                                        </span>
                                    </h5>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Facebook</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />Instagram</p>
                                    <h5 className='mb-2 text-base font-extrabold'>
                                        <span className="border-b-2 border-[#519bff]">
                                            Social Ads Management
                                        </span>
                                    </h5>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Facebook and Instagram Ads</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Total 1 Campaign Per Month</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />05 Adsets Per Month</p>
                                    <h5 className='mb-2 text-base font-extrabold'>
                                        <span className="border-b-2 border-[#519bff]">
                                            Total Designated Team Members
                                        </span>
                                    </h5>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />01 Dedicated Social Media Copywriter</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />01 Dedicated Graphic Designer</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />01 Dedicated Ads Expert</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' />01 Dedicated Account Manager</p>
                                    <h5 className='mb-2 text-base font-extrabold'>
                                        <span className="border-b-2 border-[#519bff]">
                                            Social Media Management
                                        </span>
                                    </h5>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' />Monthly Social Posts Scheduling</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' /> Social Community Management (Query + Comment Responses)</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' /> Social Page Optimization (Cover Photo, About Section, Display Picture and more)</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1' /> Facebook Business Manager Setup</p>
                                    <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mb-3 mr-1' /> Facebook Pixel Integration</p>
                                </div>
                                <div className='pt-10 pb-2 px-6'>
                                    <CTA
                                        text="Order Now"
                                        bg='bg-[#1c6cd9]'
                                        icon=''
                                        width='w-full'
                                        hover="hover:bg-black"
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
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
export default Package;