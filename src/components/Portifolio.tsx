import { portfolioImgs } from "@/constants"
import Image from "next/image"

const Portifolio = () => {
  return (
    <section className="max-w-[1240px] mx-auto py-16 text-center">
      <h3>Travel Photos</h3>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">

        {portfolioImgs.map(({ id, url }, index) => (
          <article key={id} className={`${index === 0 ? 'min-h-[392px] col-span-2 md:col-span-3 row-span-2' : 'min-h-[200px]'} relative`}>
            <Image
              src={url}
              alt="/"
              fill
              className="object-cover"
            />
          </article>
        ))}


      </div>

    </section>
  )
}

export default Portifolio