import Image from 'next/image'

const MoreText = () => {
  return (
    <section id="moreText">
      <p
        className="font-normal text-md lg:text-xl text-neutral-300 text-center 
      [text-wrap:balance] lg:px-72 px-2"
      >
        Sempre em busca de négocios com próposito, acreditando sempre no{' '}
        <span className="font-bold text-amber-800">
          impacto que o empreendedorismo + tecnologia
        </span>{' '}
        tem para oferecer ao mundo. 🖤
      </p>
      <div className="flex justify-center mt-4 animate-bounce">
        <Image src={'/arrow-down.png'} width={24} height={24} alt="arrow" />
      </div>
    </section>
  )
}

export default MoreText
