import { useId } from "react";

const FaqsToggle = (props) => {
    const { title, text, faqsBG, faqsText } = props
    const id = useId();
    return (
        <div className="relative lg:w-[70%] w-full mx-auto mb-4">
            <input type="checkbox" id={id} className="toggle transition-all duration-500 ease-in-out hidden" />
            <label className={`title block font-medium ${faqsBG} ${faqsText} shadow-xl rounded-2xl p-4 cursor-pointer`} htmlFor={id}>
                {title}
            </label>
            <div className={`content max-h-0 bg-transparent ${faqsBG} transition-all duration-500 ease-in-out overflow-hidden`}>
                <p className="p-4">{text}</p>
            </div>
        </div>
    )
}
export default FaqsToggle;