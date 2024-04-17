'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import '../../../style/embla.css'

type PropType = {
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const {options} = props
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()])

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
            <div className="embla__slide">
              <Image className="embla__slide__number" height={0} width={10000} src={'/carousel/startup.JPG'} alt={'man focused on target'} />
            </div>                        
            <div className="embla__slide">
              <Image className="embla__slide__number" height={0} width={10000} src={'/carousel/computer_boy.jpg'} alt={'using computer to work on class'} />
            </div>
            <div className="embla__slide">
              <Image className="embla__slide__number" height={0} width={10000} src={'/carousel/evento.jpg'} alt={'engaged people talking with each other'} />
            </div>           
        </div>
      </div>
  </section>

)

}


export default EmblaCarousel
