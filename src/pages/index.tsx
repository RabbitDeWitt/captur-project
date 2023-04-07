import { Hero, Navbar } from '@/components'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Captur</title>
      </Head>

      <Navbar />
      <Hero title='Captur Photography' message='I capture moments and keep them alive.' />
    </>
  )
}
