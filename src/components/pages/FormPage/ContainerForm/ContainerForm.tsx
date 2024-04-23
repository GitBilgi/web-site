'use client'

import { Heading } from '@/components/core/Typography/Heading'
import * as S from './ContainerForm.Style'
import { Paragraph } from '@/components/core/Typography/Paragraph'

import Image from 'next/image'

import ImageForm from '@/images/ImageFormulario.png'
import { ContactRegisterForm } from './components/ContactRegisterForm'

export function ContainerForm() {
  return (
    <S.ContentForm>
      <div className="container1">
        <Image src={ImageForm} alt="Imagem-formulário" />
      </div>
      <div className="container2">
        <div className="content-text">
          <div className="heading">
            <Heading size="xs" className="contact">
              Contato
            </Heading>
          </div>
          <div className="consult-text">
            <Heading size="lg">
              A única consultoria de que você precisa. Simples.
            </Heading>
          </div>
          <div className="paragraph">
            <Paragraph size="md">
              Você pode entrar em contato conosco a qualquer momento pelo e-mail{' '}
              <a href="/">contato@bilgi.com.br</a>
            </Paragraph>
          </div>
        </div>
        {/* <div className="content-form">
          <div className="nome-sobrenome">
            <InputField
              name="primeiroNome"
              label="Primeiro Nome"
              placeholder="Digite seu primeiro nome"
              inputMode="text"
              type="text"
            />
            <InputField
              name="ultimoNome"
              label="Último Nome"
              placeholder="Digite seu último nome"
              inputMode="text"
              type="text"
            />
          </div>
          <div className="email">
            <InputField
              label="E-mail"
              placeholder="Digite seu e-mail"
              name="email"
              inputMode="email"
              type="email"
            />
          </div>
          <div className="celular">
            <InputField
              label="Celular"
              placeholder="(00) 00000-0000"
              name="celular"
              inputMode="tel"
              type="tel"
            />
          </div>
          <div className="quantidade-sistema">
            <InputField
              label="Quantidade de Clientes"
              placeholder="Insira clientes na base"
              name="txt"
              inputMode="text"
              type="text"
            />
            <InputField
              label="Sistema Atual"
              placeholder="Digite seu último nome"
              name="txt"
              inputMode="text"
              type="text"
            />
          </div>
          <div className="textarea">
            <TextArea
              name="areaDeMensagem"
              placeholder="Deixe nos uma mensagem..."
              label="Mensagem"
            />
          </div>

          <div className="content-checkbox">
            <div className="checkbox">
              <CheckBox
                checked={servicosChecked}
                label="Serviços"
                name="servicos"
                description="Gestão de Processos"
                onChange={() => {
                  setServicosChecked(!servicosChecked)
                }}
              />

              <CheckBox
                checked={businessChecked}
                name="business"
                description="Business Inteligence"
                onChange={() => {
                  setBusinessChecked(!businessChecked)
                }}
              />
              <CheckBox
                checked={contactChecked}
                name="contactCenter"
                description="Contact Center"
                onChange={() => {
                  setContactChecked(!contactChecked)
                }}
              />
            </div>
          </div>

          <div className="button">
            <Button button_size="xxl" styles="primary" className="button-form">
              Enviar Mensagem
            </Button>
          </div>
        </div> */}
        <div className="register">
          <ContactRegisterForm />
        </div>

        <div className="politic-private">
          <Paragraph size="sm" className="politic">
            Ao enviar, você concorda com nossa{' '}
            <a href="/">Política de Privacidade</a>
          </Paragraph>
        </div>
      </div>
    </S.ContentForm>
  )
}
