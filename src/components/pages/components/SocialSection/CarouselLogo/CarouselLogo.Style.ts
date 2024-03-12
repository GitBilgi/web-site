import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  .content {
    max-width: 1280px;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      height: 100%;
      width: 100%;

      img {
        height: 50px;
      }
    }

    @media (max-width: 1035px) {
      height: 100%;
      width: 100%;

      img {
        width: 150px;
        height: 70px;
      }
    }
  }
`
