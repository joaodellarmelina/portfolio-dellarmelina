import Main from "./components/Main";

import React from 'react'
import EmblaCarousel from './components/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }

  return (
    <>
      <Header />
      <div className="flex flex-col justify-between gap-24 md:gap-12 h-[900px] py-36 md:py-28"> 
        <Main />
        <EmblaCarousel options={OPTIONS} />
        <section id="moreText">
          <p className="font-normal text-md sm:text-md text-neutral-300 text-center 
          [text-wrap:balance] lg:px-72 px-2">Em busca de négocios com próposito, acreditando sempre no 
          <span className="font-black text-neutral-0"> impacto que o empreendedorismo + tecnologia </span>
          tem para oferecer ao mundo. 🗺🖤</p>
        </section>
      </div>
      <Footer />
    </>
  );
}
