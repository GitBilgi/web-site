'use client'
import Avatar from '@/images/Avatar.png'
import { StaticImageData } from 'next/image'

export interface Avaliations {
  cover: StaticImageData
  title: string
  resume: string
}

export const Support: Avaliations[] = [
  {
    cover: Avatar,
    title: 'Foto do funcionário',
    resume: 'Nome Sobrenome'
  },
  {
    cover: Avatar,
    title: 'Foto do funcionário',
    resume: 'Nome Sobrenome'
  },
  {
    cover: Avatar,
    title: 'Foto do funcionário',
    resume: 'Nome Sobrenome'
  }
]
