import Image, { StaticImageData } from 'next/image'
import * as S from './Carousel.Style'

interface Props {
  cover: StaticImageData
  title: string
}

export function ContentLogo({ title, cover }: Props) {
  return (
    <S.ContainerLogo>
      <div className="book-image">
        <Image src={cover} alt={title} />
      </div>
    </S.ContainerLogo>
  )
}
