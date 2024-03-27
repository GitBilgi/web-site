'use client'
import Carousel from 'react-multi-carousel'
import { ILogo, LOGOS } from './Carousel/Carousel.Interface'
import { CardLogo } from './Carousel/Carousel'
import * as S from './CarouselLogo.Style'

export function Carousell() {
  return (
    <S.Content>
      <div className="content">
        <Carousel
          className="react-multi-carousel-dot"
          containerClass="container"
          autoPlay
          infinite
          dotListClass=""
          arrows={false}
          itemClass=""
          minimumTouchDrag={80}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 4
            },
            mobile: {
              breakpoint: {
                max: 768,
                min: 0
              },
              items: 2
            },
            tablet: {
              breakpoint: {
                max: 1035,
                min: 464
              },
              items: 3
            }
          }}
        >
          {LOGOS.map((item: ILogo, idx) => (
            <CardLogo key={idx} title={item.title} cover={item.cover} />
          ))}
        </Carousel>
      </div>
    </S.Content>
  )
}
