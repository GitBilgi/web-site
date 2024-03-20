'use client'

import PolyCanal from '@/images/LogoPolycanal.png'
import Centec from '@/images/LogoCentecNet.png'
import Objetivo from '@/images/LogoObjetivo.png'
import LogoHayan from '@/images/LogoHayan.png'
import InfoPoint from '@/images/LogoInfoPoint.png'
import Caruaru from '@/images/LogoCaruaruOnline.png'
import Sage from '@/images/Sagelogo.png'
import Telecom from '@/images/telecomlogo.png'
import TINet from '@/images/Tinetlogo.png'
import Pixel from '@/images/Pixellogo.png'
import Sermed from '@/images/sermedlogo.png'

import { StaticImageData } from 'next/image'

export interface ILogo {
  cover: StaticImageData
  title: string
}

export const LOGOS: ILogo[] = [
  {
    cover: Sermed,
    title: 'Logo Sermed'
  },
  {
    cover: Pixel,
    title: 'Logo Pixel'
  },
  {
    cover: TINet,
    title: 'Logo TiNet'
  },
  {
    cover: Telecom,
    title: 'Logo Telecom'
  },
  {
    cover: Sage,
    title: 'Logo Sage'
  },
  {
    cover: Caruaru,
    title: 'Logo Caruaru Online'
  },
  {
    cover: InfoPoint,
    title: 'Logo Info Point'
  },
  {
    cover: LogoHayan,
    title: 'Logo Hayan Telecon'
  },
  {
    cover: Objetivo,
    title: 'Logo Objetivo Informática'
  },
  {
    cover: Centec,
    title: 'Logo CentecNet'
  },
  {
    cover: PolyCanal,
    title: 'Logo PolyCanal'
  }
]
