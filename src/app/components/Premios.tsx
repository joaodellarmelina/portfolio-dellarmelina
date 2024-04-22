import Image from 'next/image'
import Link from 'next/link'

import { AspectRatio } from '@/components/ui/aspect-ratio'

const Premios = () => {
  return (
    <section
      id="premiosSec"
      className="flex flex-col gap-24 justify-center items-center"
    >
      <h1
        className="font-extrabold 
			text-3xl
			md:text-5xl 
			[text-wrap:balance] 
			bg-clip-text 
			text-transparent 
			bg-gradient-to-r from-amber-800/60 to-50% to-amber-800"
      >
        Premiações🏆
      </h1>

      <article className="2xl:grid 2xl:grid-cols-3 2xl:p-12 flex flex-col gap-12 ">
        <div className="flex flex-col gap-8  px-6 lg:w-[980px]">
          <div className="flex flex-col gap-4">
            <h2 className="text-neutral-300 lg:text-2xl font-black">
              1º Lugar - Hack27 2023 🎖️
            </h2>
            <Link
              className={'underline text-neutral-300'}
              target="_blank"
              href={'https://www.instagram.com/base27hub/'}
            >
              Base27 | Vitoria - ES
            </Link>
            {/* <p className="text-neutral-300 lg:text-lg lg:pr-96">
              Com muito trabalho duro, conseguimos chegar a um MVP funcional e
              com 5 minutos de Pitch transmitirmos nossa ideia! <br /> <br />
              Ganhamos todas as categorias possíveis:
            </p>
            <ul className="text-neutral-300 lg:text-lg lg:pr-96">
              <li>- Melhor Pitch 🥇</li>
              <li>- Solução mais inovadora 🥇</li>
              <li>- Melhor solução do desafio Fucape Business School 🥇</li>
            </ul> */}
          </div>
          <div className="w-[300px] md:w-[500px]">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={'/premiacoes/hack27.jpeg'}
                alt="Time mind link na base 27"
                className="rounded-md object-cover"
                fill={true}
              />
            </AspectRatio>
          </div>
        </div>

        <div className="flex flex-col gap-8 px-6 lg:w-[980px]">
          <div className="flex flex-col gap-4 ">
            <h2 className="text-neutral-300 lg:text-2xl font-black">
              2º Lugar - InovaApps 2023 🥈
            </h2>
            <Link
              className={'underline text-neutral-300'}
              target="_blank"
              href={'https://www.instagram.com/uvvoficial/'}
            >
              UVV | Vila Velha - ES
            </Link>
            {/* <p className="text-neutral-300 lg:text-lg  lg:pr-96">
              Menos de um mês depois, participei do InovaApps, precisavamos
              criar uma solução para um desafio de uma startup chamada InPeace,
              e conseguimos o segundo lugar!
            </p> */}
          </div>
          <div className="w-[300px] md:w-[500px]">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={'/premiacoes/inovaapps.jpeg'}
                alt="Time mind link na base 27"
                className="rounded-md object-cover"
                fill={true}
              />
            </AspectRatio>
          </div>
        </div>

        <div className="flex flex-col gap-8 px-6 xl:w-[500px] lg:w-[980px]">
          <div className="flex flex-col gap-4">
            <h2 className="text-neutral-300 lg:text-2xl font-black">
              Programa de Aceleração 🚀
            </h2>
            <Link
              className={'underline text-neutral-300'}
              target="_blank"
              href={'https://www.instagram.com/wadhwanifoundation/'}
            >
              Wadhwani Foundation | Earth
            </Link>
            {/* <p className="text-neutral-300 lg:text-lg xl:pr-0 lg:pr-96">
              Minha startup (ainda em ideação) foi aceita no Programa Next-Gen
              (Activate e Ignite) da Fundação Wadhwani, através de um edital
              Decolagem powered by InovAtiva.
              <br />
            </p> */}
          </div>
          <div className="w-[300px] md:w-[500px]">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={'/premiacoes/opened.jpeg'}
                alt="Time mind link na base 27"
                className="rounded-md object-cover"
                fill={true}
              />
            </AspectRatio>
          </div>
        </div>
      </article>
      <div className="flex flex-col gap-4 px-12">
        <h2 className="text-neutral-300 2xl:text-2xl font-black">{`...What's Next? 🚀`}</h2>
      </div>
    </section>
  )
}

export default Premios
