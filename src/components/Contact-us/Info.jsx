// Next
import Image from "next/image";
// Media
import MailBox from "media/contact-us/mail.png"
import Phone from "media/contact-us/iphone-14.png"
import Link from "next/link";
const Info = () => {
    return (
        <section>
            <div className="bg-blue py-12">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-8 grid-cols-1">
                        <div className="text-center">
                            <Image src={MailBox} alt="Icons" width={50} height={50} className="mx-auto"/>
                            <h3 className="md:text-3xl text-xl font-medium font-berlin text-white py-3">Email Address</h3>
                            <Link href="mail:info@leadxpert.com" className="md:text-4xl text-2xl font-medium text-white">info@leadxpert.com</Link>
                        </div>
                        <div className="text-center">
                            <Image src={Phone} alt="Icons" width={50} height={50} className="mx-auto"/>
                            <h3 className="md:text-3xl text-xl font-berlin font-medium text-white py-3">Contact Info</h3>
                            <Link href="tel:(346)-299-2221" className="md:text-4xl text-2xl font-medium text-white">(346)-299-2221</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info;
