'use client'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;

  .container-text {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
  }
  .heading {
    padding-top: 100px;
    padding-bottom: 20px;
  }
  .subtitle {
    display: flex;
    width: 100;
    text-align: center;
    padding: 12px 0px 0px;
  }
  .paragraph {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .content-compromisso {
    display: flex;
    flex-direction: column;
  }
  .medidas {
    gap: 15px;
    display: flex;
    flex-direction: column;
    padding-bottom: 100px;
  }
  .content-compromisso {
    gap: 15px;
    display: flex;
    flex-direction: column;
  }

  .content-tratamento {
    gap: 15px;
    display: flex;
    flex-direction: column;
  }
  .content-dados {
    gap: 15px;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`
