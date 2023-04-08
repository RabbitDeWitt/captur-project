type Props = {
  title?: string,
  message?: string
}

const Hero = ({ title, message }: Props) => {
  return (
    <section className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-hero-bg">
      <div
        className="absolute top-0 left-0 h-screen w-full bg-black/50 z-[2]"
      />

      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="py-5 text-xl">{message}</p>
        <button className="px-8 py-2 border hover:bg-black/25 duration-300">Book</button>
      </div>
    </section>
  )
}

export default Hero