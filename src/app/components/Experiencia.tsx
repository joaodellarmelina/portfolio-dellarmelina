import Link from "next/link";
import Image
 from "next/image";
const Experiencia = () => { 
  return ( 
    <section id="experienciaSec" className="hidden flex gap-12 flex-col justify-center items-center">
      
      <h1 className="font-extrabold 
			text-3xl
			md:text-5xl 
			[text-wrap:balance] 
			bg-clip-text 
			text-transparent 
			bg-gradient-to-r from-neutral-200/60 to-50% to-neutral-200">Experiencias</h1>

      <article className="flex flex-col md:grid md:grid-cols-2 gap-12 py-12 ">

      <div className="rounded-md flex flex-col gap-4 p-6  w-full text-black  md:text-lg bg-white">
          
          <div className="text-left flex flex-col gap-1">
            <div className="flex flex-col">
              <h2 className="font-light text-sm">Empresa:</h2>
              <h1 className="font-black text-lg">Mevon Web | WebDesign Agency</h1>
            </div>
            <div className="flex flex-row gap-2">
              <Link href={"https://www.linkedin.com/company/mevon-web/"} target="_blank" >
                <Image src={"/social_media/linkedin.png"} alt={"mevon linkedin link"} width={24} height={24} />
                </Link>
              <Link href={"https://www.figma.com/proto/r4qYS87DxtMKdWTqO07ZZ1/mevon?type=design&node-id=148-210&t=pLFCKFsbUAcmmg9k-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=148%3A155&mode=design"} target="_blank" >
                <Image src={"/social_media/website.jpg"} alt={"mevon website link"} width={24} height={24} />
                </Link>
            </div>
          </div>
          

          <div className="flex flex-col gap-4">
          
            <h2 className="font-light text-sm">Cargo e Principais Atribuições:</h2>
            
            <div>
              <h1 className="font-black text-lg">Founder e Dev</h1>

              <ul>
                <li>- Desenvolvimento de Lading Pages e Web Sites;</li>
                <li>- Figma; </li>
                <li>- Prospecção de novos clientes. </li>
                <li>- Gestão de projetos. </li>

              </ul>
            </div>
          
          </div>

        </div>

        <div className="rounded-md flex flex-col gap-4 p-6  w-full text-black  md:text-lg bg-white">
          
          <div className="text-left flex flex-col gap-1">
            <div className="flex flex-col">
              <h2 className="font-light text-sm">Empresa:</h2>
              <h1 className="font-black text-lg">Flowih Venture Studio</h1>
            </div>
            <div className="flex flex-row gap-2">
              <Link href={"https://www.linkedin.com/company/flowih/mycompany/verification/"} target="_blank" >
                <Image src={"/social_media/linkedin.png"} alt={"flowih linkedin link"} width={24} height={24} />
                </Link>
              <Link href={"https://www.flowih.com/"} target="_blank" >
                <Image src={"/social_media/website.jpg"} alt={"flowih website link"} width={24} height={24} />
                </Link>
            </div>
          </div>
          

          <div className="flex flex-col gap-4">

            <h2 className="font-light text-sm">Cargo e Principais Atribuições:</h2>
            
          <div>

            <h1 className="font-black text-lg">Tech Lead e Desenvolvedor full stack</h1>

            <ul>
              <li>- Desenvolvimento de aplicativos mobile, websites e landing pages; </li>
              <li>- Ajuda na estruturação de startups de todo o mundo;</li>
              <li>- Gestão de projetos e pessoas;</li>
              <li>- Criação de MVP.</li>

            </ul>
        
        </div>  
          </div>
        </div>

        <div className="rounded-md flex flex-col gap-4 p-6  w-full text-black  md:text-lg bg-white">
          
          <div className="text-left flex flex-col gap-1">
            <div className="flex flex-col">
              <h2 className="font-light text-sm">Empresa:</h2>
              <h1 className="font-black text-lg">Jade Autism | Brazilian Startup</h1>
            </div>
            <div className="flex flex-row gap-2">
              <Link href={"https://www.linkedin.com/company/jadeautism/"} target="_blank" >
                <Image src={"/social_media/linkedin.png"} alt={"jade linkedin link"} width={24} height={24} />
                </Link>
              <Link href={"https://www.jadeautism.com/"} target="_blank" >
                <Image src={"/social_media/website.jpg"} alt={"flowih website link"} width={24} height={24} />
                </Link>
            </div>
          </div>
          

          <div className="flex flex-col gap-4">
          
            <h2 className="font-light text-sm">Cargo e Principais Atribuições:</h2>
            
            <div>
              <h1 className="font-black text-lg">Criação de novos produtos e Suporte</h1>

              <ul>
                <li>- Criação e estruturação de novos produtos; </li>
                <li>- Cuidar do setor de suporte ao cliente em uma das ferramentas; </li>
                <li>- Ministrar Treinamentos;</li>
              </ul>
            </div>
          
          </div>

        </div>
    
    
        
        
        
      </article>
    </section>
  )

};

export default Experiencia;