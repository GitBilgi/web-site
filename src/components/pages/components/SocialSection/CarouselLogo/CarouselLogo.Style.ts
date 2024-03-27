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
      width: 100%;
      height: 100%;
    }

    @media (max-width: 1035px) {
      width: 100%;
      height: 100%;
    }
  }
`
