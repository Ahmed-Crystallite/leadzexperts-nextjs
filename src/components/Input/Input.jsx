// React
import { useId } from "react";

const Input = ({
    type = "text",
    placeholder,
    label,
    display = "block",
    width = "w-full",
    height = "h-10",
    weigth = "font-bold",
    background = "bg-trasparent",
    border = "border-b",
    bordercolor = "border-black",
    color = "text-[#495057]",
    placeholderColor = "placeholder:text-[#495057]",
    padding = "pl-1",
    margin = "mb-5",
    required = true,
}) => {
    const id = useId();
    return (
        <>
            {label && (<label htmlFor={id} className={`block w-full text-base ${weigth} mb-1`}>{label}</label>)}
            <input type={type} id={id} placeholder={placeholder} required = {required}
                className={`${display} ${width} ${height} ${background} ${border} ${margin} ${bordercolor} ${color} focus:outline-none ${placeholderColor} ${padding}`} />
        </>
    )
}
export default Input;
