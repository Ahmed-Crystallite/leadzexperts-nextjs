// Next
import Image from "next/image";
// Media
import ProcessImage from "media/social-media-advertising/process.png"
const Process = () => {
    let ourProcess = [
        {
            title: "It All Starts With Dedicated Account Management",
            text: "The advertising game starts with assigning a devoted social media account manager who oversees every bit of the advertising efforts, from planning the strategy to executing it. We don't let ourselves onto the field until we are 100% what your business and your marketing goals are. We decide a medium that is suitable for you to keep in touch with us for approvals and suggestions."
        },
        {
            title: "Drafting Social Media Strategy Tailored To Your Business.",
            text: "Every business is unique, so should be the social media advertising strategy. With comprehensive research and competitive analysis, we define social media campaigns that best mirrors your marketing goals and your buyers' persona."
        },
        {
            title: "Devising Worth-sharing Content",
            text: "At the heart of social media advertising, there lies CONTENT. Our content strategist and marketing experts bring EXCEPTIONAL writing expertise to the table and formulate share-worthy marketing copies that make your brand an internet SENSATION. We share our content calendar to keep you in our confidence and welcome suggestions with an open heart."
        },
        {
            title: "Have You In Loop",
            text: "We walk you through the entire process and entertain you with the monthly reports to gain your feedback. Our Social media consultant is always all ears to your concerns and schedules timely meetings to make you aware of the progress so far."
        },
        {
            title: "Optimization and Maintenance Go Hand In Hand.",
            text: "Our team ensures that marketing for your brand never gets fade, which is why they keep an eagle eye on the progress. With constant monitoring of your account, we learn what your clients are saying and respond to their concerns within 24 business hours. We employ organic marketing tactics, i.e., following, contests, hashtags etc., to strengthen your digital presence across all social media forums."
        },
    ]
    return (
        <div className="lg:py-16 md:py-14 py-12">
            <div className="container">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-x-10 items-center">
                    <div className="md:mb-0 mb-6">
                        <Image src={ProcessImage} alt="Icons" />
                    </div>
                    <div>
                        {
                            ourProcess && ourProcess.map((e, i) => (
                                <div key={i} className="mb-3">
                                    <h4 className="md:text-xl text-lg font-extrabold">{e.title}</h4>
                                    <p className="md:text-base text-sm">{e.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process;
