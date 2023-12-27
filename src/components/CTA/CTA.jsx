const CTA = ({
    href = "javascript:;",
    text,
    textSize = "text-base",
    textWeight = "font-bold",
    contentAlignment = "justify-center",
    bg = "bg-primary",
    color = "text-white",
    width = "w-[250px]",
    height = "h-12",
    padding,
    border,
    rounded,
    hover,
    icon = "/home/call-icon.png",
    iconCss,
    margin,
    flexDirection,

}) => {
    return (
        <div dangerouslySetInnerHTML={{
            __html: `<a ${href} class="relative gap-2 cursor-pointer flex ${flexDirection} items-center ${contentAlignment} ${bg} ${color} ${width} ${height} text-center ${padding} ${textSize} ${border} ${margin} ${textWeight} duration-500 group ${rounded} ${hover}">
            ${icon && (`<img src=${icon} alt="Icons" width="20" height="20" class=" duration-500 ease-in-out ${iconCss}" />`)}
            <span>${text}</span>
            </a>`
        }}>

        </div>
    )
}

export default CTA;
