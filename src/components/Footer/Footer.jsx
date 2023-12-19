// Next
import Image from "next/image";
import Link from "next/link";
// Components
import CTA from "C/CTA/CTA";
// Media
import FooterLogo from "media/footer/logo.png"
import FacebookLogo from "media/footer/facebook.png"
import TwitterLogo from "media/footer/twitter.png"
import InstagramLogo from "media/footer/instagram.png"
const Footer = () => {
    const smmLinks = [
        {
            href: "https://www.facebook.com/Leadzexperts",
            icon: FacebookLogo,
        },
        {
            href: "https://twitter.com/leadzexperts",
            icon: TwitterLogo,
        },
        {
            href: "https://www.instagram.com/leadzexperts/",
            icon: InstagramLogo,
        },
    ]
    const pages = [
        {
            text: "Home",
            href: "/",
        },
        {
            text: "About Us",
            href: "./about-us",
        },
        {
            text: "Contact Us",
            href: "./contact-us",
        },
    ]
    const services = [
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
        <footer>
            <div className="bg-black py-12">
                <div className="container">
                    <div className="flex gap-x-5 flex-wrap lg:flex-nowrap justify-between gap-y-5 lg:gap-y-0">
                        <div className="basis-full sm:basis-[48%] lg:basis-[30%]">
                            <Image
                                src={FooterLogo}
                                alt="Icons"
                                width={227}
                                height={40}
                                className="pb-5"
                            />
                            <p className="text-white font-medium lg:text-base text-sm">LeadzExperts, the leading social media marketing agency, devises such marketing copies that hit the chord with the target audience and leave them hooked with your brand for many more years to come.</p>
                            <div className="flex gap-4 items-center pt-5">
                                {
                                    smmLinks && smmLinks.map((e, i) => (
                                        <Link key={i} href={e.href}>
                                            <Image
                                                src={e.icon}
                                                alt="Icons"
                                                width={30}
                                                height={30}
                                                className="bg-primary p-1 cursor-pointer hover:opacity-50 ease-in-out duration-500 hover:translate-y-1 hover:rounded-full"
                                            />
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="basis-full sm:basis-[48%] lg:basis-[20%]">
                            <h3 className="text-xl font-bold text-white pb-5">Links</h3>
                            <ul>
                                {
                                    pages && pages.map((e, i) => (
                                        <li key={i}><Link href={e.href} className="block text-white md:text-base text-sm transition-all duration-500 ease-in-out hover:text-primary mb-4">{e.text}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="basis-full sm:basis-[48%] lg:basis-1/4">
                            <h3 className="text-xl font-bold text-white pb-5">Services</h3>
                            <ul>
                                {
                                    services && services.map((e, i) => (
                                        <li key={i}><Link href={e.href} className="block text-white md:text-base text-sm transition-all duration-500 ease-in-out hover:text-primary mb-4">{e.text}</Link></li>
                                    ))}
                            </ul>
                        </div>
                        <div className="basis-full sm:basis-[48%] lg:basis-1/4">
                            <h3 className="text-xl font-bold text-white pb-5">Contact Us</h3>
                            <CTA
                                text="(346)-299-2221"
                                icon="/footer/call.png"
                                bg="bg-transparent"
                                contentAlignment="justify-start"
                                textSize="lg:text-base text-sm"
                                textWeight="font-medium"
                                width="w-full"
                                height="h-10"
                                hover="hover:text-primary"
                            />
                            <CTA
                                text="mailto:info@leadzexpert.com"
                                icon="/footer/mail.png"
                                bg="bg-transparent"
                                contentAlignment="justify-start"
                                textSize="lg:text-base text-sm"
                                textWeight="font-medium"
                                width="w-full"
                                height="h-10"
                                hover="hover:text-primary"
                            />
                            <CTA
                                text="8 The Green, Ste #10962 Dover"
                                icon="/footer/location.png"
                                bg="bg-transparent"
                                contentAlignment="justify-start"
                                textSize="lg:text-base text-sm"
                                textWeight="font-medium"
                                width="w-full"
                                height="h-10"
                                hover="hover:text-primary"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
