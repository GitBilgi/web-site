import styled from 'styled-components'

export const ContainerService = styled.div`
  .container {
    display: flex;
    max-width: 1216px;
    padding-top: 80px;
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
      padding-top: 20px;
    }
    .size {
      line-height: 5.6rem;
    }
  }
  .heading {
    color: #80162a;
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
  }
`
