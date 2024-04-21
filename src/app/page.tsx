
import React from 'react'

import Header from "./components/Header";
import Footer from "./components/Footer";

import SobreMim from "./components/SobreMim";
import Experiencia from './components/Experiencia';
import Projetos from './components/Projetos';

export default function Home() {
  


  return (
    <section id="mainPage" className="bg-[url('/giphy.gif')] bg-cover">
      <Header />
      <div className="flex flex-col justify-between pt-24 "> 
        <SobreMim />
        <Experiencia />
        <Projetos />
        <Footer />  
      </div>
    </section>
  );
}
