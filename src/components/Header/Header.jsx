"use client"
import Image from "next/image";
import React, { useState } from 'react'
import Link from 'next/link';
import Logo from "media/footer/logo.png"
import Toggler from "media/header/toggler.png"
import CTA from "../CTA/CTA";
import styles from "./header.module.css"

const Header = ({
    padding = "md:pt-6 pt-6 pb-3",
    bg,
    ctaHover = "hover:text-white hover:bg-primary",
    ctaBg = "md:bg-white bg-primary",
    ctaColor = "md:text-primary text-black",
    ctaRadius = "rounded-xl",
    linkHover = "hover:text-primary",
    iconCss = "group-hover:brightness-100 group-hover-invert",
}) => {
    const [toggler, setToggler] = useState(false);
    const [openSubMenu, setopenSubMenu] = useState(false);
    const dropDownIcons = [
        {
            text: "Facebook Marketing",
            href: "./facebook-marketing-services"
        },
        {
            text: "Instagram Marketing",
            href: "./instagram-marketing-services"
        },
        {
            text: "Social Media Advertising",
            href: "./social-media-advertising-services"
        },
        {
            text: "Social Media Marketing",
            href: "./social-media-marketing-services"
        },
        {
            text: "Influencer Marketing",
            href: "./influencer-marketing-services"
        },
    ]
    return (
        <header className="relative">
            <div className={`absolute w-full ${bg}`}>
                <div className='container relative'>
                    <nav className={`flex items-center justify-between ${padding}`}>
                        <Link href="/" className='inline-block'>
                            <Image src={Logo} alt="Logo" width={227} height={40} />
                        </Link>
                        <button type='button' onClick={() => setToggler((prev) => (!prev))} className='md:hidden'>
                            <Image src={Toggler} alt="Logo" width={50} height={28} className='block ml-auto' />
                        </button>
                        <ul className={`${!toggler ? "hidden md:flex" : "md:flex"} md:gap-9 items-center md:relative sm:absolute xs:absolute md:bg-inherit bg-white pl-3 z-50 md:w-auto w-full top-full left-0 right-0 text-start md:text-center md:py-0 py-5 md:justify-center justify-between`}>
                            <li className="md:text-white md:mb-0 mb-5 text-black"><Link href="/" className={`relative block transition-all duration-500 ease-in-out text-sm lg:text-base font-medium ${linkHover}`}>Home</Link></li>
                            <li onClick={() => setopenSubMenu((prev) => (!prev))} className={`${styles.hoverable} md:static md:mb-0 mb-5 md:text-white text-black`}>
                                <Link href="/" className={`${linkHover} md:text-white text-black`}>
                                    Services
                                </Link>
                                <div className={`${styles.megaMenu} mt-2  opacity-0 invisible -z-50 md:absolute relative md:right-48 md:w-[50%] w-full text-left shadow-xl bg-white hover:opacity-100 hover:visible hover:z-50`}>
                                    <ul className={`${!openSubMenu ? "block" : "hidden"}`}>
                                        {
                                            dropDownIcons && dropDownIcons.map((e, i) => (<li key={i} className={`font-medium transition-all duration-500 ease-in-out ${linkHover} text-base px-4 my-2 py-1 border-b text-black hover:bg-slate-200`}><Link href={e.href}>
                                                {e.text}
                                            </Link>
                                            </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </li>
                            <li className="md:text-white md:mb-0 mb-5 text-black"><Link href="./about-us" className={`relative block transition-all duration-500 ease-in-out text-sm lg:text-base font-medium ${linkHover}`}>About</Link></li>
                            <li className="md:text-white md:mb-0 mb-5 text-black"><Link href="./contact-us" className={`relative block transition-all duration-500 ease-in-out text-sm lg:text-base font-medium ${linkHover}`}>Contact</Link></li>
                            <CTA text="(346)-299-2221" margin="my-3" rounded={ctaRadius} width="w-max" padding="px-5" height="h-10" bg={ctaBg} color={ctaColor} hover={`${ctaHover}`} iconCss={iconCss} />
                        </ul>
                    </nav>
                </div>
            </div>
        </header >
    )
}

export default Header;