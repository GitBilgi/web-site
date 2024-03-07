'use client'

import Carousel from 'react-multi-carousel'
import { Avaliation } from './Avaliation'
import { Avaliations, Support } from './Avaliation/Avaliation.interface'
import { Heading } from '@/components/core/Typography/Heading'

import * as S from './CarouselSupport.Style'
export function CarouselSupport() {
  return (
    <S.Content>
      <div className="content">
        <div className="text">
          <Heading size="md" className="heading">
            Love the simplicity of the service and the prompt customer support.
            We can’t imagine working without it.
          </Heading>
        </div>
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
                max: 768,
                min: 0
              },
              items: 1
            },
            tablet: {
              breakpoint: {
                max: 1035,
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
      </div>
    </S.Content>
  )
}
