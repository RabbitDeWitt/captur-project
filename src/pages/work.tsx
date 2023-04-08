import { Hero, Navbar, Portifolio } from "@/components"
import Head from "next/head"

const work = () => {
  return (
    <>
      <Head>
        <title>Captur</title>
      </Head>
      <Navbar />
      <Hero title="My Work" message="This is some of my recent work traveling the world." />

      <Portifolio />
    </>
  )
}

export default work