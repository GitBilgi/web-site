'use client'

import Hourglass from '@/images/Hourglass.png'
import Quotient from '@/images/Quotient.png'
import Catalog from '@/images/Catalog.png'
import Circooles from '@/images/Circooles.png'
import Sisyphus from '@/images/Sisyphus.png'
import Layers from '@/images/Layers.png'
import { StaticImageData } from 'next/image'

export interface ILogo {
  cover: StaticImageData
  title: string
}

export const LOGOS: ILogo[] = [
  {
    cover: Layers,
    title: 'Logo Layers'
  },
  {
    cover: Sisyphus,
    title: 'Logo Layers'
  },
  {
    cover: Circooles,
    title: 'Logo Layers'
  },
  {
    cover: Catalog,
    title: 'Logo Layers'
  },
  {
    cover: Quotient,
    title: 'Logo Layers'
  },
  {
    cover: Hourglass,
    title: 'Logo Layers'
  }
]
