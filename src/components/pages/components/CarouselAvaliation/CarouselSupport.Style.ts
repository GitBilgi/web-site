import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  height: 534px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  .content {
    height: 342px;
    max-width: 1280px;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      height: 100%;
    }
  }

  .text {
    width: 100%;
    display: flex;
    text-align: center;
    padding-left: 28px;
    padding-right: 28px;
    align-items: center;
    justify-content: center;

    @media (max-width: 1035px) {
      max-width: 100%;
    }
  }
  @media (max-width: 1035px) {
    .content {
      height: 100%;
      display: flex;
      max-width: 100%;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }
    .text {
      width: 850px;
      font-size: 30px;
      line-height: 38px;
    }
  }

  @media (max-width: 768px) {
    height: auto;

    .heading {
      width: 100%;
      height: auto;
      line-height: 3.8rem;
    }

    .text {
      padding-top: 64px;
    }
  }
`
