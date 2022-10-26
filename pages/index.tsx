import type { NextPage } from 'next'
import Head from 'next/head'
import Clients from '../components/clients/Clients'
import Contact from '../components/contact/Contact'
import Features from '../components/features/Features'
import Footer from '../components/footer/Footer'
import Intro from "../components/home/Home"
import HomeStats from '../components/home/HomeStats'
import NavigationBar from '../components/navigation/NavigationBar'
import Product from '../components/product/Product'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>HooBank</title>
        <meta name="description" content="A simple bank website using tailwind css, nextjs, typescript" />
        <link rel="icon" href="/hoobank.svg" />
      </Head>
      <div className="bg-primary w-full flex justify-center">
        <div className="bg-primary min-h-[200vh] max-w-[95rem]">
          <NavigationBar />
          <Intro />
          <HomeStats />
          <Features />
          <Product />
          <Clients />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home
