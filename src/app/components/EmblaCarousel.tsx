'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

import Image from 'next/image'
import '../../../style/embla.css'

type PropType = {
  options?: EmblaOptionsType
}

const Imagens = [
  { src: '/carousel/startup.JPG', alt: 'man focused on target' },
  { src: '/carousel/computer_boy.jpg', alt: 'using computer to work on class' },
  {
    src: '/carousel/evento.jpg',
    alt: 'engaged people talking with each other',
  },
]

const EmblaCarousel = () => {
  return (
    <Carousel
      className="w-full"
      opts={{ loop: true, align: 'start' }}
      plugins={[Autoplay({ delay: 3500 })]}
    >
      <CarouselContent className="items-center">
        {Imagens.map(({ alt, src }, i) => (
          <CarouselItem key={i}>
            <div className="flex items-center justify-center">
              <Image
                src={src}
                alt={alt}
                width={350}
                height={120}
                className="rounded-lg select-none"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default EmblaCarousel
