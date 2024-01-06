// Next
import Image from "next/image";
// Media
import Graphics from "media/social-media-marketing/Graphics.png"
import Process from "../social-media-advertising-services/Process";
const Examples = () => {
  return (
    <div className="lg:pt-16 md:pt-14 pt-12">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10">
          <div className="md:mb-0 mb-6">
            <Image src={Graphics} alt="Icons" />
          </div>
          <div>
            <h3 className="text-blue md:text-xl text-lg font-medium">Get Quality Content For Your Business</h3>
            <h2 className="lg:text-[50px] lg:leading-[60px] md:text-[40px] md:leading-[50px] text-3xl font-extrabold font-berlin text-black">Social Media <br className="lg:block hidden" /> Marketing <br className="lg:block hidden" /> Graphic Examples</h2>
          </div>
        </div>
      </div>
      <Process />
    </div>
  )
}

export default Examples;
