import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
     <Head>
     <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=swap" rel="stylesheet"/>
     </Head>
     <div className="flex h-screen bg-no-repeat bg-cover bg-[url('/images/pattern-background-mobile.svg')] md:bg-[url('/images/pattern-background-desktop.svg')]">
    
        <div className="container m-auto  max-w-xs rounded-2xl bg-slate-50">
          <img className="rounded-t-2xl w-full" src={"/images/illustration-hero.svg"}/>
          <p className=" red-hat font-bold text-lg p-4 text-center" >Order Summary</p>
          <p className="text-slate-500 red-hat text-center text-sm px-5">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like</p>
          <AnnualPlan/>
          <div className="flex flex-col">
          <button className="bg-indigo-700 hover:bg-indigo-400 mx-5 mb-2 rounded-xl p-3 text-sm text-white font-bold">Proceed to Payment</button>
          <button className="text-slate-500 mx-5 rounded-l p-3 mb-2 text-sm font-bold">Cancel Order</button>
          </div>

        </div>
    </div>
    </div>
  )
}

const AnnualPlan : NextPage = () => {
  return (
    <div className="flex mx-5 my-4  px-5 py-2 bg-zinc-100 rounded-xl" >
    <img className="w-9" src="/images/icon-music.svg"/>
    <div className="m-auto ">
    <p className="red-hat font-bold text-xs" >Annual Plan</p>
    <p className="text-xs text-slate-500">$59.99/year</p>
    </div>
    <a href="#" className="underline font-bold text-indigo-700 text-xs self-center">Change</a>
    </div>
  )
}

export default Home
