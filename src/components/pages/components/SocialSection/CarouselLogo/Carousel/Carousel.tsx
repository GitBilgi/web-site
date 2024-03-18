import Image, { StaticImageData } from 'next/image'
import * as S from './Carousel.Style'

interface Props {
  cover: StaticImageData
  title: string
}

export function CardLogo({ title, cover }: Props) {
  return (
    <S.LogosContent>
      <div className="logo-image">
        <Image src={cover} alt={title} className="img" />
      </div>
    </S.LogosContent>
  )
}
