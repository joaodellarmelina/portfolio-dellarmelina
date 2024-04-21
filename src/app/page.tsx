import Main from "./components/Main";

import React from 'react'
import EmblaCarousel from './components/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoreText from "./components/MoreText";

export default function Home() {
  
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }

  return (
    <section className=" bg-[url('/giphy.gif')] bg-cover">
      <Header />
      <div className="flex flex-col justify-between gap-24 md:gap-12 h-[900px] py-36 md:py-28"> 
        <Main />
        <EmblaCarousel options={OPTIONS} />
        <MoreText />
      </div>
      <Footer />
    </section>
  );
}
