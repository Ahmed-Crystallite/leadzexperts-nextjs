"use client"
import Image from 'next/image';
import { useState, useId } from 'react';
import Done from "media/facebook-marketing/done.png"
const Package = () => {
    // const [activeTab1, setActiveTab1] = useState("tab1");
    // function fun1(tabs1) {
    //   setActiveTab1(tabs1);
    // }
    // const [currentTab, setCurrentTab] = useState('1');
    // const pricingId = useId("")
    // const tabs = [
    //     {
    //         id: pricingId,
    //         tabTitle: 'Monthly',
    //         tabSpan: '(SAVE 10%)',
    //         title: 'The Good Plan',
    //         content: 'Ideal For Start-ups That Need Help Getting Started On Social Media'
    //     },
    // ];
    // const tabsContent = [
    //     {
    //         title: 'Title 1',
    //         content: 'Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.'
    //     },
    // ];

    // const handleTabClick = (e) => {
    //     setCurrentTab(e.target.id);
    // }
    return (

        <div className='container'>
            {/* <div
                  className={activeTab1 == "tab1" ? styles.active : ""}
                  onClick={() => fun1("tab1")}
                  href="#"
                >
                  Mobile
                </div> */}
            <div className='tabs'>
                {/* {tabs.map((e, i) => */}
                    {/* <button className="bg-black text-white text-base font-bold rounded-xl px-4 p-2">
                        <span className='block text-[12px]'></span></button> */}
                {/* )} */}
            </div>
            <div className='grid grid-cols-3'>
                <div className='__content'>
                    {/* {tabs.map((e, i) => */}
                        <div>
                            {/* {currentTab === `${e.id}` && */}
                                <div className='text-left border border-[rgba(128,128,128,.5)]'>
                                    <div className='bg-[#3681e8] text-left px-6 py-12'>
                                        <p className="text-2xl font-light text-white">(SAVE 10%)</p>
                                        <h3 className="text-[50px] leading-[60px] font-bold text-white">$350<span className="text-xl">/month</span></h3>
                                        <p className='text-sm font-normal text-white'></p>
                                    </div>
                                    <div className='px-6 py-4'>
                                        <h5 className='mb-2 text-base font-extrabold'>
                                            <span className="border-b border-[#519bff]">
                                                Social Media Posts
                                            </span>
                                        </h5>
                                        <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1'/>Total 15 Posts Per Month</p>
                                        <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1'/>10 Graphic Social Posts</p>
                                        <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1'/>03 Stories</p>
                                        <p className='text-sm font-medium'><Image src={Done} alt='Icons' width={20} height={20} className='inline-block mr-1'/>02 GIFS/Carousel Posts</p>
                                    </div>
                                </div>
                            {/* } */}
                        </div>
                    {/* )} */}
                </div>
            </div>
        </div>
    );
}
export default Package;