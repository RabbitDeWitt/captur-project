import { Contact, Hero, Navbar } from "@/components"
import Head from "next/head"

const contact = () => {
  return (
    <>
      <Head>
        <title>Captur</title>
      </Head>
      <Navbar />
      <Hero title="Contact" message="Submit the form below for more work and quotes." />
      <Contact />
    </>
  )
}

export default contact