// import Image from 'next/image'
import { Carousell } from './CarouselLogo'
import * as S from './SocialSection.Style'
import { Paragraph } from '@/components/core/Typography/Paragraph'

export function SocialSection() {
  return (
    <S.SectionSocial>
      {/* <div className="logos">
        <div className="col1">
          <Image src={Layers} alt="Logo Layers" className="size" />
          <Image src={Sisyphus} alt="Logo Sisyphus" className="size" />
          <Image src={Circooles} alt="Logo Circooles" className="size" />
        </div>
        <div className="col2">
          <Image src={Catalog} alt="Logo Catalog" className="size" />
          <Image src={Quotient} alt="Logo Quotient" className="size" />
          <Image src={Hourglass} alt="Loogo Hourglass" className="size" />
        </div>
      </div> */}
      <div className="carousel">
        <div>
          <Paragraph size="sm" className="paragraph">
            Junte-se a empresas que já estão crescendo
          </Paragraph>
        </div>
        <Carousell />
      </div>
    </S.SectionSocial>
  )
}
