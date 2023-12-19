// React
import { useId } from "react";

const TextArea = ({
  weigth = "font-medium",
  width = "w-full",
  label,
  placeholder,
  border = "border-b",
  text,
  height = "h-28",
  background = "bg-trasparent",
  color = "text-[#495057]",
  padding = "pl-1",
  margin = "mb-14",
}) => {
  const id = useId();
  return (
    <>
      {label && (<label htmlFor={id} className={`block w-full text-base ${weigth} mb-2`}>{label}</label>)}
      <textarea id={id} placeholder={placeholder} className={`focus:outline-none ${border} ${height} ${background} border-black ${color} ${padding} ${margin} resize-none block ${width}`}>{text}</textarea>
    </>
  )
}

export default TextArea;
