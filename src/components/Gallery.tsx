import { slideData } from "@/constants"
import Image from "next/image"
import { useState } from "react"
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Gallery = () => {
  const [currentImg, setCurrentImg] = useState<number>(0)
  const length = slideData.length

  const { image } = slideData[currentImg]

  const nextSlideImg = () => {
    setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1)
  }

  const prevSlideImg = () => {
    setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1)
  }

  return (
    <section id="gallery" className="max-w-[1240px] mx-auto">
      <h3 className="text-center">
        Gallery
      </h3>

      <div className="relative flex justify-center p-4 max-h-[700px] min-h-[300px]">

        <FaArrowCircleLeft
          onClick={prevSlideImg}
          size={50}
          className='absolute top-[50%] left-[30px] text-white cursor-pointer select-none z-[2]'
        />

        <Image
          src={image}
          alt="/"
          width={1440}
          height={600}
          className="object-cover"
        />

        <FaArrowCircleRight
          onClick={nextSlideImg}
          size={50}
          className='absolute top-[50%] right-[30px] text-white cursor-pointer select-none z-[2]'
        />

      </div>
    </section>
  )
}

export default Gallery