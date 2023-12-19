import CTA from "C/CTA/CTA";
import Input from "C/Input/Input";

const Form = ({
    background = "bg-[url('../../public/home/formBg.png')]",
    spanColor = "text-yellow ",
    CTABackground = "bg-primary",
    beforeBackground = "before:bg-[url('../../public/home/line.png')]",
}) => {
    return (
        <section>
            <div className={`lg:py-16 md:py-12 py-9 ${background}  bg-no-repeat bg-cover bg-center`}>
                <div className="container">
                    <div className="lg:flex lg:flex-wrap grid md:grid-cols-2 grid-cols-1 gap-4 items-center justify-between">
                        <div className="lg:basis-7/12">
                            <h2 className="xl:text-[40px] xl:leading-[50px] md:text-[30px] md:leading-[40px] text-[25px] leading-[35px] text-white font-berlin lg:pb-8 pb-6">Get your free <span className={`${spanColor} relative ${beforeBackground} before:bg-no-repeat before:bg-cover before:bg-center before:absolute before:w-full xl:before:top-11 before:top-8 xs:before:hidden before:left-0 before:h-2`}>30 minute</span> strategy session with an experienced digital marketer valued at <span className={`${spanColor}`}>$300USD.</span></h2>
                            <CTA
                                text="GET MY FREE 30 MINUTES STRATEGY SESSION"
                                bg="bg-white"
                                icon=""
                                color="text-black"
                                width="w-max lg:block hidden"
                                height="h-10"
                                padding="lg:px-10 px-2 py-2"
                            />
                        </div>
                        <div className="lg:basis-1/3">
                            <div className="bg-white shadow-xl shadow-[#888] py-6">
                                <form action="" className="px-6">
                                    <h4 className="lg:text-3xl text-2xl font-bold text-center pb-5">Get Started Today</h4>
                                    <div className="w-full">
                                        <Input
                                            label="Full Name*"
                                            placeholder="Your name..."
                                        />
                                        <Input
                                            label="Email Address *"
                                            placeholder="Type Email Address"
                                            type="email"
                                        />
                                        <Input
                                            label="Phone *"
                                            placeholder="(000) 000-0000"
                                            type="phone"
                                        />
                                        <Input
                                            label="Website *"
                                            placeholder="Type Your Website"
                                            type="url"
                                        />
                                        <CTA
                                            text="INCREASE MY SALES"
                                            icon=""
                                            bg={CTABackground}
                                            width="w-full"
                                            hover="hover:bg-black"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Form;
