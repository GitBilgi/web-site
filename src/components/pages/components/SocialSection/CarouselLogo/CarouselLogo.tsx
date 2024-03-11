import Carousel from 'react-multi-carousel'
import { ContentLogo } from './Carousel/Carousel'
import { LOGOS, Logos } from './Carousel/Carousel.Interface'

export function CarouselLogo() {
  return (
    <Carousel
      containerClass="container-with-dots"
      className="react-multi-carousel-dot"
      autoPlay
      infinite
      autoPlaySpeed={1000}
      arrows={false}
      responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 2,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 2,
          partialVisibilityGutter: 30
        }
      }}
    >
      {LOGOS.map((item: Logos, idx) => (
        <ContentLogo key={idx} title={item.title} cover={item.cover} />
      ))}
    </Carousel>
  )
}
