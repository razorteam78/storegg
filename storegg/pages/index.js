import Head from 'next/head'
import Navbar from '../components/Navbar'

import { BiAlarm } from "react-icons/bi";
import Banner from '../components/Banner';
import Services from '../components/Services';
import Featured from '../components/Featured';
import Story from '../components/Story';
import Footer from '../components/Footer';
import { useState } from 'react';


export default function Home({data}) {
  const [gameData, setGameData] = useState(data.slice(0,10))

  return (
    <div>
      <Head>
        <title>Store GG</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="icon.png" />
      </Head>
      

      <Navbar/>
        <main>
          <Banner/>

          <Services/>

          <Featured gameData={gameData}/>

          <Story/>

        </main>
      <Footer/>

    </div>
  )
}

export async function getServerSideProps(context) {

  const res = await fetch(`https://www.freetogame.com/api/games`)
  const data = await res.json()


  return {
    props: { data: data}
  }
}