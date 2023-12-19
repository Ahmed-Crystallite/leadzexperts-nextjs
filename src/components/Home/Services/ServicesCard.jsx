// Next
import Image from "next/image";
const ServicesCard = (props) => {
    const { texts, icons, titles } = props;
    return (
        <div className="min-h-[400px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 ease-in-out [transform-style:preserve-3d] group hover:[transform:rotateY(180deg)]">
                <div className="rounded-2xl p-4 absolute flex flex-col item-center justify-center gap-5 bg-[#171616] [backface-visibility:hidden]
                                [webkit-backface-visibility:hidden] z-10 w-full h-full top-0 right-0 left-0 bottom-0">
                    <Image src={icons} alt="icon" className="mx-auto object-cover" />
                    <h3 className="mb-2 text-white text-center font-bold lg:text-xl text-lg ">{titles}</h3>
                </div>
                <div className="h-full w-full rounded-xl bg-[#171616] p-4 text-slate-200 [transform:rotateY(180deg)]">
                    <p className=" text-white text-justify text-sm">{texts}</p>
                </div>
            </div>
        </div>
    )
}

export default ServicesCard;
