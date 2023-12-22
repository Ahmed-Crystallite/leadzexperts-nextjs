import React from 'react'
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import CTA from '../CTA/CTA';

const getInTouch = () => {
    return (
        <section>
            <div className='md:pt-32 pt-28 pb-12'>
                <div className='container'>
                    <div className='text-center'>
                        <h1 className='text-[40px] text-black font-berlin pb-3 leading-[50px] font-semibold'>Get in touch!</h1>
                        <p>Have questions? Send us a message, and we will get back to you quickly!</p>
                    </div>
                    <div className='pt-10 flex justify-center'>
                        <div className='md:basis-[75%] basis-full'>
                        <Input
                            label="Your Name *"
                            type='text'
                            weigth='font-medium'
                            placeholder="Please enter your firstname *"
                        />
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-6 justify-center'>
                        <div className='md:basis-[37%] basis-full'>
                        <Input
                            label="Your Email *"
                            type='text'
                            weigth='font-medium'
                            placeholder="Please enter your email *"
                        />
                        </div>
                        <div className='md:basis-[36%] basis-full'>
                        <Input
                            label="Phone"
                            type='text'
                            weigth='font-medium'
                            placeholder="Please enter your phone"
                        />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='md:basis-[75%] basis-full'>
                        <TextArea
                            label="Message *"
                            placeholder="Message for me *"
                        />
                        </div>
                    </div>
                    <div className="relative before:bg-[url('../../public/contact-us/message.png')] before:absolute before:bg-no-repeat before:bg-cover before:bg-center before:w-[334px] before:h-[182px] before:lg:right-48 md:before:right-28 md:before:block before:hidden">
                    <CTA 
                        text="SEND MESSAGE"
                        margin="mx-auto md:mb-20"
                        icon=''
                        color='text-blue'
                        bg='bg-transparent'
                        border="border border-blue"
                        hover="hover:text-black"
                    />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default getInTouch;
