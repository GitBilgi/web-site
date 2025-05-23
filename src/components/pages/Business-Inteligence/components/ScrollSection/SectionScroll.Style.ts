'use client'

import styled from 'styled-components'

export const ContainerScroll = styled.section`
  max-height: 100vh;
  display: flex;
  overflow: auto;
  position: relative;
  flex-direction: column;
`
export const TextContainer = styled.div`
  display: flex;
  max-width: 50vw;
  flex-direction: column;
  overflow-y: auto;
  flex: 1;

  scrollbar-width: none;
  scroll-behavior: smooth;
`
export const ImageContainer = styled.div`
  top: 0;
  right: 0;
  z-index: -1;
  width: 50%;
  height: 100%;
  position: absolute;
  background-size: cover;
  background-position: bottom;
  /* background-attachment: fixed;
  background-repeat: no-repeat; */
  background-image: url('/img/ImageForm.jpg');
`
