'use client'
import Link from 'next/link'
import Image from 'next/image'
import swal from 'sweetalert'
import { Spin as Hamburger } from 'hamburger-react'
import { useState } from 'react'

const Header = () => {
  const [isTrue, setIsTrue] = useState(false)

  const NotYet = () => {
    swal({
      title: 'oooh no! :(',
      text: 'This language is not avaible yet. Please try google translate to a better experience.',
    })
  }

  const NavSobreMim = () => {
    let SobreMimSec = document.getElementById('sobreMimSec')
    let ProjetosSec = document.getElementById('projetosSec')

    let menu = document.getElementById('open-menu')
    let html = document.getElementsByTagName('html')[0]

    setIsTrue(false)
    html.classList.remove('overflow-hidden')
    menu?.classList.add('hidden')

    SobreMimSec?.classList.remove('hidden')
    ProjetosSec?.classList.add('hidden')
  }

  const NavProjetos = () => {
    let SobreMimSec = document.getElementById('sobreMimSec')
    let ProjetosSec = document.getElementById('projetosSec')

    let menu = document.getElementById('open-menu')
    let html = document.getElementsByTagName('html')[0]

    setIsTrue(false)
    html.classList.remove('overflow-hidden')
    menu?.classList.add('hidden')

    SobreMimSec?.classList.add('hidden')
    ProjetosSec?.classList.remove('hidden')
  }

  return (
    <header className="w-full h-24">
      {/* PC SCREEN */}
      <div
        className="rounded-full h-12 
      w-[70%] left-[15%] xl:w-[60%] xl:left-[20%] top-8 absolute -z-1 hidden 
      lg:block lg:blur-xl lg:bg-amber-700/20"
      ></div>

      <div className="absolute z-30 right-10 top-10 gap-4 hidden lg:flex">
        <Link href={'/'}>
          <Image
            src={'/languages/flag-brazil.png'}
            alt={''}
            width={24}
            height={24}
          />
        </Link>
        <a onClick={NotYet} className="cursor-pointer">
          <Image
            src={'/languages/flag-us.png'}
            className="cursor-pointer"
            alt={'english'}
            width={24}
            height={24}
          />
        </a>
      </div>

      <nav
        className="lg:flex hidden justify-center gap-56 relative top-10
      text-neutral-200 font-bold text-lg"
      >
        <a
          onClick={NavSobreMim}
          id="SobreMimLink"
          className="cursor-pointer relative hover:bottom-1 hover:brightness-150"
        >
          Sobre mim
        </a>
        {/* <a onClick={NavXP} id="ExperienciaLink" className="cursor-pointer relative hover:bottom-1 hover:brightness-150">Experiências</a> */}
        <a
          onClick={NavProjetos}
          id="ProjetosLink"
          className="cursor-pointer relative hover:bottom-1 hover:brightness-150"
        >
          Projetos
        </a>
      </nav>

      {/* CELULAR SCREEN */}

      <div className="lg:hidden block p-6 z-20 absolute right-5 ">
        <Hamburger
          color="#8c8c8c"
          rounded
          label="Show menu"
          hideOutline={false}
          easing="ease-in"
          toggled={isTrue}
          onToggle={(toggled) => {
            let menu = document.getElementById('open-menu')
            let html = document.getElementsByTagName('html')[0]
            if (toggled) {
              html.classList.add('overflow-hidden')
              menu?.classList.remove('hidden')
              setIsTrue(true)
            } else {
              html.classList.remove('overflow-hidden')
              menu?.classList.add('hidden')
              setIsTrue(false)
            }
          }}
        />
      </div>
      <nav
        id="open-menu"
        className="absolute hidden rounded-bl-full h-48 w-full bg-neutral-800 overflow-auto"
      >
        <ul className="flex gap-6 py-8 text-left justify-center items-center flex-col z-20">
          <a onClick={NavSobreMim} id="SobreMimLink">
            <li className="text-neutral-400 active:text-neutral-500 text-md font-bold">
              Sobre mim
            </li>
          </a>
          {/* <a onClick={NavXP} id="ExperienciaLink" ><li className="text-neutral-400 active:text-neutral-500 text-md font-bold">Experiências</li></a> */}
          <a onClick={NavProjetos}>
            <li className="text-neutral-400 active:text-neutral-500 text-md font-bold">
              Projetos
            </li>
          </a>

          <li className="flex flex-row gap-4">
            <Link href={'/'}>
              <Image
                src={'/languages/flag-brazil.png'}
                alt={''}
                width={24}
                height={24}
              />
            </Link>
            <a onClick={NotYet} className="cursor-pointer">
              <Image
                src={'/languages/flag-us.png'}
                className="cursor-pointer"
                alt={'english'}
                width={24}
                height={24}
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
