import styled from 'styled-components'

export const ContainerRecursos = styled.div`
  .container {
    display: flex;
    padding-top: 96px;
    max-width: 1216px;
    align-items: center;
    padding-bottom: 64px;
    flex-direction: column;
    justify-content: center;
  }

  .recursos {
    gap: 20px;
    display: flex;
    max-width: 800px;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .paragraph {
      max-width: 592px;
    }
  }

  .heading {
    color: #80162a;
  }

  .container-cards {
    gap: 32px;
    display: flex;
    max-width: 1280px;
    padding-top: 64px;
    padding-bottom: 96px;

    .text {
      gap: 8px;
      display: flex;
      flex-direction: column;
    }

    .cards {
      gap: 20px;
      display: flex;
      max-width: 280px;
      flex-direction: column;
    }
  }

  @media (max-width: 768px) {
    .container {
      width: 100%;
      align-items: flex-start;
    }
    .recursos {
      padding: 0;
      text-align: start;
      padding-left: 16px;
      padding-right: 16px;
      align-items: flex-start;
    }
    .heading {
      text-align: start;
    }
    .size {
      font-size: 30px;
    }

    .container-cards {
      padding: 0;
      padding-top: 48px;
      padding-left: 16px;
      padding-right: 16px;
      flex-direction: column;
      align-items: flex-start;
    }

    .cards {
      height: 100%;
    }
  }
`
