import Image from "next/image";

const main = () => {
  return ( 
	<main className="flex flex-col gap-6">
		
	<div className="flex justify-center">
		<div className="flex flex-col gap-6 justify-center">
			
			{/* meu nome */}
			<h1 className="font-extrabold 
			text-3xl
			md:text-5xl 
			[text-wrap:balance] 
			bg-clip-text 
			text-transparent 
			bg-gradient-to-r from-neutral-200/60 to-50% to-neutral-200">João Vitor Dellarmelina</h1>
			
			{/* letreiro */}
			<div className=" sm:px-0 px-6 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
				<ul className="bg-neutral-700 text-neutral-400 block animate-text-slide text-left leading-tight [&_li]:block">
					<li className="flex align-center justify-center 
					text-center m-auto p-1 md:p-2  text-2xl font-bold">Perfil Inovador</li>
					<li className="flex align-center justify-center 
					text-center m-auto p-1 md:p-2 text-2xl font-bold">Programação</li>
					<li className="flex align-center justify-center 
					text-center m-auto p-1 md:p-2 text-2xl font-bold">Intraempreendedorismo</li>
					<li className="flex align-center justify-center 
					text-center m-auto p-1 md:p-2 text-2xl font-bold">Design</li>
					<li className="flex align-center justify-center 
					text-center m-auto p-1 md:p-2 text-2xl font-bold">Criatividade</li>
					<li aria-hidden="true" className="flex align-center justify-center 
					text-center m-auto p-1 md:p-2 text-2xl font-bold">Perfil Inovador</li>
				</ul>
			</div>
       
		</div>
	</div>

	<div className="px-12 lg:px-56 2xl:px-[500px]">		
			<p className="font-normal text-md sm:text-md text-neutral-300 text-center 
			[text-wrap:balance]">
				Desenvolvedor Front-end, com foco em aplicações mobile e web.  <br />
				Aprendizado constante.
			</p>
	</div>
	
	<Image src={"/arrow-down.png"} alt={"arrow down point down"} width={36} height={36} className=" m-auto pt-4 animate-bounce" />


    </main> 
  );
};

export default main;