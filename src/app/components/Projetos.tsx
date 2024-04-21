'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import swal from 'sweetalert';

type Projects =
	| "parkspace-lp"
	| "parkspace-app"
	| "mazzi"
	| "carnawash";

const getClassNameForProject = (currentProject: Projects | null, project: Projects) =>
	currentProject === project ? "flex" : "hidden";

const Projetos = () => {
	const [currentProject, setCurrentProject] = useState<Projects | null>(null);

	const NotYet = () => {
		swal({
			title: 'oooh no! :(',
			text: 'Esse aplicativo ainda está em desenvolvimento...',
		})
	}

	return (
		<section id="projetosSec" className="hidden flex gap-12 flex-col justify-center items-center">

			<h1 className="font-extrabold 
			text-3xl
			md:text-5xl 
			[text-wrap:balance] 
			bg-clip-text 
			text-transparent 
			bg-gradient-to-r from-neutral-200/60 to-50% to-neutral-200">Projetos</h1>

			<p className="px-6 font-normal text-md lg:text-xl text-neutral-300 text-center 
			[text-wrap:balance]">
				Alguns dos projetos que desenvolvi ou participei, com foco em Front-end e UI/UX Design.
			</p>
			<p className="px-2 font-normal text-md lg:text-xl text-neutral-300 text-center 
			[text-wrap:balance]">Clique nas imagens para saber mais sobre cada projeto:</p>
			<article className="md:grid md:grid-cols-2 gap-2 md:gap-12 grid grid-cols-1 md:px-0 px-4">

				{/* Parkspace Site */}
				<div className="relative flex flex-col items-center gap-6">
					<a onClick={() => setCurrentProject("parkspace-lp")} >
						<Image className="rounded-lg cursor-pointer" src={'/projetos/parkspace.svg'}
							alt="parkspace" width={400} height={60} />
					</a>

					<div id="InfoParkspaceSite" className={getClassNameForProject(currentProject, "parkspace-lp")}>
						<div className="flex flex-col gap-1 items-center">
							<Link href={'https://parkspace.app'} target="_blank">
								<h1 className="font-bold text-md underline">Parkspace Site</h1></Link>
							<h2 className="font-light text-sm">Landing Page</h2>
						</div>

						<div className="flex gap-6 p-4">
							<Image src={'/programacao/html.svg'} alt="HTML" width={36} height={24} />
							<Image src={'/programacao/Tailwind.svg'} alt="Tailwind CSS" width={36} height={24} />
							<Image src={'/programacao/javascript.svg'} alt="JavaScript" width={36} height={24} />
						</div>

					</div>

				</div>
				{/* Parkspace App */}
				<div className="relative flex flex-col items-center gap-6">
					<a onClick={() => setCurrentProject("parkspace-app")} >
						<Image className="rounded-lg cursor-pointer"
							src={'/projetos/ParkspaceApp.svg'} alt="parkspace" width={400} height={50} />
					</a>

					<div id="InfoParkApp" className={getClassNameForProject(currentProject, "parkspace-app")}>
						<div className="flex flex-col gap-1 items-center">
							<a onClick={NotYet} className="cursor-pointer">
								<h1 className="font-bold text-md underline">Parkspace App</h1></a>
							<h2 className="font-light text-sm">Aplicativo Ainda em desenvolvimento</h2>
							<Image src={'/programacao/ReactNative.svg'} alt="React Native Js" width={36} height={24} />
						</div>


					</div>

				</div>
				{/* Mazzi */}
				<div className="relative flex flex-col items-center gap-6">
					<a onClick={() => setCurrentProject("mazzi")} ><Image className="rounded-lg cursor-pointer" src={'/projetos/YouDriver.svg'} alt="parkspace" width={400} height={60} />
					</a>

					<div id="InfoYouDriver" className={getClassNameForProject(currentProject, "mazzi")}>
						<div className="flex flex-col gap-1 items-center">
							<Link href={'https://www.youdriver.com.br/'} target="_blank">
								<h1 className="font-bold text-md underline">You Driver</h1></Link>
							<h2 className="font-light text-sm">Landing Page</h2>
						</div>

						<div className="flex gap-6 p-4">
							<Image src={'/programacao/Nextjs.svg'} alt="Next Js" width={36} height={24} />
							<Image src={'/programacao/Tailwind.svg'} alt="Tailwind CSS" width={36} height={24} />
						</div>

					</div>

				</div>
				{/* Carnawash */}
				<div className="relative flex flex-col items-center gap-6">
					<a onClick={() => setCurrentProject("carnawash")} >
						<Image className="rounded-lg cursor-pointer" src={'/projetos/Carnawash.svg'}
							alt="parkspace" width={416} height={60} />
					</a>

					<div id="InfoCarnawashSite" className={getClassNameForProject(currentProject, "carnawash")}>
						<div className="flex flex-col gap-1 items-center">
							<Link href={'https://www.carnawashapp.com/'} target="_blank">
								<h1 className="font-bold text-md underline">Carnawash</h1></Link>
							<h2 className="font-light text-sm">Landing Page</h2>
						</div>

						<div className="flex gap-6 p-4">
							<Image src={'/programacao/Nextjs.svg'} alt="Next Js" width={36} height={24} />
							<Image src={'/programacao/Tailwind.svg'} alt="Tailwind CSS" width={36} height={24} />
						</div>

					</div>

				</div>


			</article>
		</section>
	);
};

export default Projetos;
