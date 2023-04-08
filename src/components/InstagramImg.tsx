import Image, { StaticImageData } from "next/image"
import { FaInstagram } from "react-icons/fa"

type Props = {
  img: StaticImageData
}

const InstagramImg = ({ img }: Props) => {
  return (
    <div className="relative">
      <Image
        className="w-full h-full"
        src={img}
        alt='/'
      />
      <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full hover:bg-black/50 duration-300 group">
        <p className="text-gray-300 hidden group-hover:block"><FaInstagram size={30} /></p>
      </div>
    </div>
  )
}

export default InstagramImg