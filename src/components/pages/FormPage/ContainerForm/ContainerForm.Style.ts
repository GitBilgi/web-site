import styled from 'styled-components'

export const ContentForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  .container1 {
    width: 100%;
    display: flex;

    img {
      width: 100%;
    }
  }
  .container2 {
    gap: 24px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .content-text {
    max-width: 512px;

    .consult-text {
      padding-top: 12px;
      padding-bottom: 24px;
    }
    .contact {
      color: #80162a;
    }
    .paragraph a {
      color: #80162a;
    }
  }
  /* .nome-sobrenome {
    display: flex;
    gap: 32px;
  } */

  /* .content-form {
    gap: 24px;
    display: flex;
    max-width: 512px;
    flex-direction: column;
  }
  .quantidade-sistema {
    display: flex;
    gap: 32px;
  } */
  /* .checkbox {
    gap: 16px;
    display: flex;
    flex-direction: column;
  } */
  .politic a {
    color: #80162a;
  }
  .button-form {
    width: 512px;
    height: 48px;
  }

  @media (max-width: 768px) {
    /* .container1 {
      display: none;
    } */
    /* .nome-sobrenome {
      gap: 32px;
      width: 100%;
      display: flex;
      flex-direction: column;
    } */

    .register {
      display: flex;
      width: 100%;
      justify-content: center;
      padding: 48px 16px;
    }
    /* .content-form {
      display: flex;
      width: 100%;
      justify-content: center;
      padding: 48px 16px;
    } */
    .button-form {
      width: 343px;
    }
    /* .quantidade-sistema {
      display: flex;
      flex-direction: column;
    } */
    .politic {
      display: flex;
      text-align: center;
      flex-direction: column;
    }

    .content-text {
      width: 100%;
      padding-top: 64px;
      padding-left: 16px;
      padding-right: 16px;
    }
  }

  @media (max-width: 1035px) {
    .container1 {
      display: none;
    }
    .container2 {
      padding-top: 64px;
      padding-bottom: 100px;
    }
  }
`
