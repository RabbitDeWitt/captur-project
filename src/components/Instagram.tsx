import { instagramImgs } from "@/constants"
import InstagramImg from "./InstagramImg"

const Instagram = () => {
  return (
    <section className="max-w-[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-bold">Follow me on Instagram</p>
      <p className="pb-4">Captur</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        {instagramImgs.map(({ img, id }) => (
          <InstagramImg key={id} img={img} />
        ))}
      </div>
    </section>
  )
}

export default Instagram