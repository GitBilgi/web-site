'use client'

import Image from 'next/image'
import * as S from './Footer.style'

import { Paragraph } from '@/components/core/Typography/Paragraph'
import { Heading } from '@/components/core/Typography/Heading'
import { ButtonLink } from '@/components/core/Buttons/ButtonLink'

import Union from '@/images/Union.png'
import Logo from '@/images/Logo.png'
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
              <Image src={Logo} alt="Logo Bilgi Inteligence"></Image>
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
            <div className="produtos">
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
          </div>
          <div className="Container-infos">
            <div className="heading">
              <Heading size="xxs" mode="light">
                Empresa
              </Heading>
            </div>
            <div className="produtos">
              <ButtonLink link="/form" mode="gray" size="md">
                Contato
              </ButtonLink>
              <ButtonLink link="/" mode="gray" size="md">
                Sobre Nós
              </ButtonLink>
            </div>
          </div>
          <div className="Container-infos">
            <div className="heading">
              <Heading size="xxs" mode="light">
                Legal
              </Heading>
            </div>
            <div className="produtos">
              <ButtonLink link="/" mode="gray" size="md">
                Política de Privacidade
              </ButtonLink>
              <ButtonLink link="/" mode="gray" size="md">
                Termos de Uso
              </ButtonLink>
            </div>
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
            <a
              href="https://www.instagram.com/bilgibpo/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={Instagram} alt="Icon Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/bilgi-servi%C3%A7os-empresariais/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={Linkedin} alt="Icon Linkedin" />
            </a>
            <a
              href="https://m.facebook.com/BilgiBpo/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={Facebook} alt="Icon Facebook" />
            </a>
          </div>
        </div>
      </div>
    </S.Container>
  )
}
