import Image from 'next/image'
import * as S from './SocialSection.Style'
import { Paragraph } from '@/components/core/Typography/Paragraph'

import Layers from '@/images/Layers.png'
import Sisyphus from '@/images/Sisyphus.png'
import Circooles from '@/images/Circooles.png'
import Catalog from '@/images/Catalog.png'
import Quotient from '@/images/Quotient.png'
import Hourglass from '@/images/Hourglass.png'

export function SocialSection() {
  return (
    <S.SectionSocial>
      <div className="paragraph">
        <Paragraph size="sm">
          Junte-se a mais de X.000 empresas que já estão crescendo
        </Paragraph>
      </div>
      <div className="logos">
        <Image src={Layers} alt="Logo Layers" />
        <Image src={Sisyphus} alt="Logo Sisyphus" />
        <Image src={Circooles} alt="Logo Circooles" />
        <Image src={Catalog} alt="Logo Catalog" />
        <Image src={Quotient} alt="Logo Quotient" />
        <Image src={Hourglass} alt="Loogo Hourglass" />
      </div>
    </S.SectionSocial>
  )
}
