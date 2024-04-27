import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

type Project = {
  name: string
  github: string
  site?: string
  description: string
}

const projects: Project[] = [
  {
    name: 'Carnawash | Site',
    site: 'https://www.carnawashapp.com/',
    description:
      'Site feito para um startup localizada na autralia, feito em Next.js e TailwindCSS.',
    github: '',
  },
  {
    name: 'Parkspace | Landing Page',
    site: 'https://parkspace.app/',
    description:
      'Desenvolvimento do site da startup Parkspace, localizada na Espanha, o site foi feito usando HTML e TailwindCSS.',
    github: '',
  },
  {
    name: 'YouDriver | Landing Page',
    site: 'https://youdriver-lp.vercel.app/',
    description: 'Landing Page para startup.',
    github: '',
  },
]

const ProjetosTitle = () => {
  return (
    <>
      <h1
        className="font-extrabold 
			text-3xl
			md:text-5xl 
			[text-wrap:balance] 
			bg-clip-text 
			text-neutral-200"
      >
        Projetos
      </h1>

      <p
        className="px-6 font-normal text-sm lg:text-lg text-neutral-300 text-center 
			[text-wrap:balance]"
      >
        Alguns dos projetos que desenvolvi ou participei, com foco em Front-end
        e UI/UX Design.
        <br />
        <br />
        Clique nas imagens para saber mais sobre cada projeto:
      </p>
    </>
  )
}

const Projetos = () => {
  return (
    <section
      id="projetosSec"
      className="hidden flex gap-12 flex-col justify-center items-center"
    >
      <ProjetosTitle />
      <article className="md:grid md:grid-cols-2 xl:px-72 px-6 gap-12 grid grid-cols-1">
        {projects.map((p) => (
          <Card className="bg-amber-800/20 border-neutral-100/10" key={p.name}>
            <CardHeader className="flex flex-col gap-1">
              <CardTitle className="text-neutral-300">
                <Link href={p.site ?? p.github}>{p.name}</Link>
              </CardTitle>
              <div className="flex flex-row gap-2">
                {p.github && (
                  <Link target="_blank" href={p.github}>
                    <Badge className="md:text-xs text-[8px] cursor-pointer bg-neutral-800">
                      GitHub
                    </Badge>
                  </Link>
                )}
                {p.site && (
                  <Link target="_blank" href={p.site}>
                    <Badge className="cursor-pointer bg-neutral-800">
                      Ver mais
                    </Badge>
                  </Link>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-400">{p.description}</p>
            </CardContent>
          </Card>
        ))}
      </article>
    </section>
  )
}

export default Projetos
