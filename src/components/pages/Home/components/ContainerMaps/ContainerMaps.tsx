'use client'

import { Heading } from '@/components/core/Typography/Heading'
import { GoogleMaps } from '../GoogleMaps'

import * as S from './ContainerMaps.Style'

export function ContainerMaps() {
  return (
    <S.SectionMap>
      <div className="header">
        <div>
          <Heading size="xxs" className="heading-xxs">
            Onde estamos
          </Heading>
        </div>
        <div>
          <Heading size="md" className="heading">
            Feito com excelência, em todos os lugares
          </Heading>
        </div>
      </div>
      <div className="maps">
        <GoogleMaps />
      </div>
    </S.SectionMap>
  )
}
