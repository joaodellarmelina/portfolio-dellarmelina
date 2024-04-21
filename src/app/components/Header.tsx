'use client'
import Link from "next/link";
import Image from "next/image";
import swal from "sweetalert";
import { Spin as Hamburger } from 'hamburger-react'

const Header = () => {
  
  const NotYet = () => {
    swal({ title: 'oooh no! :(',
          text: 'This language is not avaible yet. Please try google translate to a better experience.', 
          })
  }

   return (
    <header className="w-full h-24"> 
{/* PC SCREEN */}
      <div className="rounded-full h-12 
      w-[70%] left-[15%] xl:w-[60%] xl:left-[20%] top-8 absolute -z-1 hidden 
      lg:block lg:blur-xl lg:bg-neutral-700"></div>
 
      <div className="absolute right-10 top-10 gap-4 hidden lg:flex">
        <Link href={'/'}><Image src={'/languages/flag-brazil.png'} alt={''} width={24} height={24} /></Link>
        <a onClick={NotYet} ><Image src={'/languages/flag-us.png'} className="cursor-pointer" alt={''} width={24} height={24} /></a>
      </div>

      <nav className="lg:flex hidden justify-center gap-56 relative top-10
      text-neutral-500 font-bold text-lg">
        <Link href="/" className="relative hover:bottom-1 hover:brightness-150">Sobre mim</Link>
        <Link href="/" className="relative hover:bottom-1 hover:brightness-150">Experiências</Link>
        <Link href="/" className="relative hover:bottom-1 hover:brightness-150">Projetos</Link>
      </nav>
 

{/* CELULAR SCREEN */}

      <div className="lg:hidden block p-6 z-20 absolute right-5 ">
        <Hamburger color="#8c8c8c" rounded label="Show menu" hideOutline={false} easing="ease-in"  onToggle={toggled => {
          let menu = document.getElementById('open-menu');
          let html = document.getElementsByTagName('html')[0];
          if (toggled) {
            html.classList.add('overflow-hidden');
            menu?.classList.remove('hidden');
          } else {
            html.classList.remove('overflow-hidden');
            menu?.classList.add('hidden');
          }
          }} />
      </div>
      <nav id="open-menu" className="absolute hidden rounded-bl-full h-48 w-full bg-neutral-800 overflow-auto">
        <ul className="flex gap-6 py-8 text-left justify-center items-center flex-col z-20">
          <Link href={'/'}><li className="text-neutral-400 active:text-neutral-500 text-md font-bold">Sobre mim</li></Link>
          <Link href={'/'}><li className="text-neutral-400 active:text-neutral-500 text-md font-bold">Experiências</li></Link>
          <Link href={'/'}><li className="text-neutral-400 active:text-neutral-500 text-md font-bold">Projetos</li></Link>
        </ul>
      </nav>
      

    </header>
  )
}

export default Header;