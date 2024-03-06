import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  height: 534px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .content {
    max-width: 1280px;
    height: 342px;
    align-items: center;
    justify-content: center;
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
      max-width: 100%;
      height: 610px;
    }
    .text {
      font-size: 30px;
      line-height: 38px;
    }
  }
`
