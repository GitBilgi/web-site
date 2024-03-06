'use client'
import { StarIcon } from '@heroicons/react/24/solid'
import { Icon } from '@/components/core/Icon'
import { Subtitle } from '@/components/core/Typography/Subtitle'
import { Paragraph } from '@/components/core/Typography/Paragraph'

import Image, { StaticImageData } from 'next/image'

import * as S from './Avaliation.Style'

interface Props {
  cover: StaticImageData
  title: string
  resume: string
}

export function Avaliation({ title, cover, resume }: Props) {
  return (
    <S.SectionAvaliation>
      <div className="avaliations">
        <div className="icon-photo">
          <Image src={cover} alt={title} />
        </div>
        <div className="information">
          <div className="name">
            <Subtitle size="sm">{resume}</Subtitle>
          </div>
          <div className="cargo">
            <Paragraph size="sm">Gerente de Contratação, Empresa</Paragraph>
          </div>
        </div>
        <div className="stars">
          <Icon IconRender={StarIcon} size="xs" />
          <Icon IconRender={StarIcon} size="xs" />
          <Icon IconRender={StarIcon} size="xs" />
          <Icon IconRender={StarIcon} size="xs" />
          <Icon IconRender={StarIcon} size="xs" />
        </div>
      </div>
    </S.SectionAvaliation>
  )
}
