'use client'

import Image from 'next/image'
import * as S from './Footer.style'

import { Paragraph } from '@/components/core/Typography/Paragraph'
import { Heading } from '@/components/core/Typography/Heading'
import { ButtonLink } from '@/components/core/Buttons/ButtonLink'

import Union from '@/images/Union.png'
import Inteligence from '@/images/BilgiInteligence.png'
import Instagram from '@/images/instagram.png'
import Linkedin from '@/images/linkedin.png'
import Facebook from '@/images/facebook.png'

export function Footer() {
  return (
    <S.Container>
      <div className="ContainerFooter">
        <div className="container-info-footer">
          <div className="Container-Logo">
            <div>
              <Image src={Inteligence} alt="Logo Bilgi Inteligence"></Image>
            </div>
            <div>
              <Paragraph size="sm">Conectando você ao que importa.</Paragraph>
            </div>
          </div>
          <div className="Container-infos">
            <div className="heading">
              <Heading size="xxs" mode="light">
                Produtos
              </Heading>
            </div>
            <ButtonLink link="/" mode="gray" size="md">
              Gestão de Processos
            </ButtonLink>
            <ButtonLink link="/" mode="gray" size="md">
              Business Inteligente
            </ButtonLink>
            <ButtonLink link="/" mode="gray" size="md">
              Atendimento
            </ButtonLink>
          </div>
          <div className="Container-infos">
            <div className="heading">
              <Heading size="xxs" mode="light">
                Empresa
              </Heading>
            </div>
            <ButtonLink link="/" mode="gray" size="md">
              Contato
            </ButtonLink>
            <ButtonLink link="/" mode="gray" size="md">
              Sobre Nós
            </ButtonLink>
          </div>
          <div className="Container-infos">
            <div className="heading">
              <Heading size="xxs" mode="light">
                Legal
              </Heading>
            </div>
            <ButtonLink link="/" mode="gray" size="md">
              Política de Privacidade
            </ButtonLink>
            <ButtonLink link="/" mode="gray" size="md">
              Termos de Uso
            </ButtonLink>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="component-copy">
          <div className="direitos">
            <Image src={Union} alt="Icon Union" className="icon-union" />
            <Paragraph size="sm">
              © 2024 Bilgi. Todos os direitos reservados.
            </Paragraph>
          </div>
          <div className="media-icons">
            <Image src={Instagram} alt="Icon Instagram" />
            <Image src={Linkedin} alt="Icon Instagram" />
            <Image src={Facebook} alt="Icon Instagram" />
          </div>
        </div>
      </div>
    </S.Container>
  )
}
