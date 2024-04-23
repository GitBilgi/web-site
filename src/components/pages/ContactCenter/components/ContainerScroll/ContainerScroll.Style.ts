import styled from 'styled-components'

export const ContainerScroll = styled.section`
  display: flex;
  overflow: auto;
  max-height: 100vh;
  position: relative;
  flex-direction: column;
`
export const TextContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  max-width: 50vw;
  overflow-y: auto;
  flex-direction: column;

  scrollbar-width: none;
  scroll-behavior: smooth;
`
export const ImageContainer = styled.div`
  top: 0;
  right: 0;
  width: 50%;
  z-index: -1;
  height: 100%;
  position: absolute;
  background-size: cover;
  background-position: top;
  /* background-attachment: fixed;
  background-repeat: no-repeat; */
  background-image: url('/img/Imagesup.jpg');
`
