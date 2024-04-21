import Link from "next/link";
import Image from "next/image";


const Footer = () => {
  return (
    <footer className="bg-neutral-700 flex flex-col sm:mt-16 mt-64 gap-8 p-12 justify-center items-center">

      <h1 className="text-neutral-300 font-bold text-xl">Contate-me!</h1>

      <div className="flex flex-row gap-6">
        <Link target="_blank" href={'https://www.linkedin.com/in/jo%C3%A3o-vitor-dellarmelina/'}><Image width={36} height={36} src={'/social_media/linkedin.png'} alt={'Linkedin'} /></Link>
        <Link target="_blank" href={'https://api.whatsapp.com/send?phone=5528999572152&text=Ol%C3%A1!%20Vim%20do%20seu%20portf%C3%B3lio.%20%0A%0AGostaria%20de%20uma%20conversa.%20'}><Image width={36} height={36} src={'/social_media/whatsapp.png'} alt={'Mensagem direta no WhatsApp'} /></Link>
        <Link target="_blank" href={'https://github.com/joaodellarmelina'}><Image width={36} height={36} src={'/social_media/github.png'} alt={'GitHub'} /></Link>
      </div>

    </footer>
  )
};

export default Footer;
