'use client'

import Carousel from 'react-multi-carousel'
import { Avaliation } from './Avaliation'
import { Avaliations, Support } from './Avaliation/Avaliation.interface'

export function CarouselSupport() {
  return (
    <Carousel
      className="react-multi-carousel-dot"
      containerClass="container"
      dotListClass=""
      arrows={false}
      itemClass=""
      minimumTouchDrag={80}
      showDots
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 1
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 1
        }
      }}
    >
      {Support.map((item: Avaliations, idx) => (
        <Avaliation
          key={idx}
          title={item.title}
          resume={item.resume}
          cover={item.cover}
        />
      ))}
    </Carousel>
  )
}
