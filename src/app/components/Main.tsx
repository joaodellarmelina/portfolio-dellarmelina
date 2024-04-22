import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

const main = () => {
  return (
    <main className="flex flex-col gap-6">
      <div className="flex justify-center">
        <div className="flex flex-col gap-6 justify-center">
          <div className="flex justify-center">
            <Avatar>
              <AvatarImage src="avatar.jpg" />
              <AvatarFallback>Jv</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex flex-row gap-4 justify-center">
            <HoverCard>
              <HoverCardTrigger>
                <Badge className="md:text-xs text-[8px] cursor-pointer bg-blue-500">
                  Desenvolvedor Front End
                </Badge>
              </HoverCardTrigger>
              <HoverCardContent className="bg-neutral-600 w-80">
                <div className="space-y-1">
                  <h4 className="text-neutral-200 text-sm font-bold">
                    Front End
                  </h4>
                </div>
                <p className="text-neutral-200 text-sm">
                  É o responsável por colocar em prática, através de códigos, o
                  design de um site ou interface.
                </p>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger>
                <Badge className="md:text-xs text-[8px] cursor-pointer bg-amber-600">
                  Aplicações mobile
                </Badge>
              </HoverCardTrigger>
              <HoverCardContent className="bg-neutral-600 w-80">
                <div className="space-y-1">
                  <h4 className="text-neutral-200 text-sm font-bold">
                    Aplicações mobile
                  </h4>
                </div>
                <p className="text-neutral-200 text-sm">
                  Softwares que são especialmente desenvolvidos para o uso em
                  dispositivos como smartphones ou tablets.
                </p>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger>
                <Badge className="md:text-xs text-[8px] cursor-pointer bg-amber-500">
                  Desenvolvimento Web
                </Badge>
              </HoverCardTrigger>
              <HoverCardContent className="bg-neutral-600 w-80">
                <div className="space-y-1">
                  <h4 className="text-neutral-200 text-sm font-bold">
                    Desenvolvimento Web
                  </h4>
                </div>
                <p className="text-neutral-200 text-sm">
                  Processo de criação e manutenção de aplicações web.
                </p>
              </HoverCardContent>
            </HoverCard>
            {/* 
            <HoverCard>
              <HoverCardTrigger>
                <Badge className="md:text-xs text-[8px] cursor-pointer bg-amber-950">
                  Aprendizado constante.
                </Badge>
              </HoverCardTrigger>
              <HoverCardContent>
                The React Framework – created and maintained by @vercel.
              </HoverCardContent>
            </HoverCard> */}
          </div>

          {/* meu nome */}
          <h1
            className="font-extrabold 
			text-center
            text-3xl
			md:text-5xl 
			[text-wrap:balance] 
			bg-clip-text 
			text-neutral-200"
          >
            João Vitor Dellarmelina
          </h1>

          {/* letreiro */}
          <div
            className=" sm:px-0 px-6 inline-flex flex-col 
			h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] 
			md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden bg-amber-700/35 rounded-xl"
          >
            <ul className=" text-neutral-200 block animate-text-slide text-left leading-tight [&_li]:block">
              <li
                className="flex align-center justify-center 
					text-center m-auto p-1 md:p-2  text-2xl font-bold"
              >
                Perfil Inovador
              </li>
              <li
                className="flex align-center justify-center 
					text-center m-auto p-1 md:p-2 text-2xl font-bold"
              >
                Programação
              </li>
              <li
                className="flex align-center justify-center 
					text-center m-auto p-1 md:p-2 text-2xl font-bold"
              >
                Intraempreendedorismo
              </li>
              <li
                className="flex align-center justify-center 
					text-center m-auto p-1 md:p-2 text-2xl font-bold"
              >
                Design
              </li>
              <li
                className="flex align-center justify-center 
					text-center m-auto p-1 md:p-2 text-2xl font-bold"
              >
                Criatividade
              </li>
              <li
                aria-hidden="true"
                className="flex align-center justify-center 
					text-center m-auto p-1 md:p-2 text-2xl font-bold"
              >
                Perfil Inovador
              </li>
            </ul>
          </div>
        </div>
      </div>
      <span className="flex justify-center ">
        <p className="text-sm md:text-md text-neutral-200 text-center font-light px-12 md:w-[520px]">
          "The <span className="font-black text-amber-800">doers</span> are the
          major <span className="font-black text-amber-800">thinkers.</span> The
          people that really create the things that change this industry are
          both the thinker and doer in one person." <br />– Steve Jobs
        </p>
      </span>
    </main>
  )
}

export default main
