'use client'
import Link from "next/link";
import Image from "next/image";
import swal from "sweetalert";

const Header = () => {
  
  const NotYet = () => {
    swal({ title: 'oooh no! :(',
          text: 'This language is not avaible yet. Please try google translate to a better experience.', 
          button: 'its ok!'})
  }


  return (
    <header className="w-full h-24">
      <div className="h-12 w-full absolute -z-1 hidden lg:block lg:blur-xl lg:bg-neutral-700"></div>
      
      <div className="absolute right-10 top-5 gap-4 hidden  sm:flex">
        <Link href={'/'}><Image src={'/languages/flag-brazil.png'} alt={''} width={24} height={24} /></Link>
        <a onClick={NotYet} ><Image src={'/languages/flag-us.png'} className="cursor-pointer" alt={''} width={24} height={24} /></a>
      </div>

      <nav className="lg:flex hidden justify-center gap-56 relative top-10
      text-neutral-500 font-bold text-lg">
        <Link href="/" className="relative hover:bottom-1 hover:blur-lg hover:brightness-150 line-through">Sobre mim</Link>
        <Link href="/" className="relative hover:bottom-1 hover:brightness-150">Experiências</Link>
        <Link href="/" className="relative hover:bottom-1 hover:brightness-150">Projetos</Link>
      </nav>

    </header>
  )
}

export default Header;