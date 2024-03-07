import styled from 'styled-components'

export const ProcessosHome = styled.div`
  width: 100%;
  max-height: 720px;
  display: flex;
  justify-content: center;
  flex-direction: row;

  .container1 {
    width: 100%;
    display: flex;
    padding-left: 112px;
    padding-top: 128px;
    padding-bottom: 128px;
    flex-direction: column;
  }

  .container2 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .content {
    gap: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .paragraph {
      padding-top: 24px;
    }
    .title {
      height: 100%;
      font-size: 60px;
      line-height: 7rem;
      max-width: 544px;
    }
  }
  .subtitle {
    display: flex;
    color: #80162a;
    max-width: 250px;
    padding: 4px 12px;
    border-radius: 16px;
    background-color: #fff3f0;
    align-items: center;
    justify-content: center;
  }
  .buttons {
    gap: 12px;
    display: flex;
    padding-top: 48px;

    @media (max-width: 768px) {
      width: 100%;
      flex-direction: column;
      align-items: center;
    }
  }

  .extra {
    display: flex;
    padding-top: 48px;
    flex-direction: column;
    gap: 4px;
  }
  .extra-infos {
    gap: 4px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .container2 {
    display: flex;
    width: 100%;
    background-color: #f2f4f7;
  }
`
