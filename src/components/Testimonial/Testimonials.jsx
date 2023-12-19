// Components
import CTA from "C/CTA/CTA";
import TestimonialSlider from "./TestimonialSlider";

const Testimonials = ({
    beforeBg = "before:bg-secondary",
    bg = "bg-primary"
}) => {
    return (
        <section>
            <div className={`my-14 relative before:md:block before:hidden before:absolute ${beforeBg} before:w-full before:h-[60%] before:top-28 before:-z-50`}>
                <div className="container">
                    <div className={`relative lg:w-[85%] w-full ${bg} md:py-14 py-8 px-10 bg-[url('../../public/home/map.png')] bg-center bg-auto bg-no-repeat mx-auto`}>
                        <h2 className="text-white lg:text-[40px] md:text-[30px] text-[25px] lg:leading-[50px] md:leading-[40px] leading-[35px] text-center font-bold md:mb-0 mb-4">Don't Take Our Word For It Trust <br className="xl:block hidden" /> Our Customers</h2>
                        <TestimonialSlider />
                        <div className="flex justify-center flex-wrap md:gap-7 gap-4">
                            <CTA
                                text="TALK TO AN EXPERT"
                                border="border"
                                width="w-max"
                                icon=""
                                padding="px-4"
                                bg="bg-transparent"
                                hover="hover:bg-white hover:text-black"
                            />
                            <CTA
                                text="(346)-299-2221"
                                border="border"
                                width="w-max"
                                padding="px-4"
                                bg="bg-transparent"
                                hover="hover:bg-white hover:text-black"
                                chngImage="brightness-0 invert group-hover:brightness-100 group-hover:invert-0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;