'use client'

import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 580px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .subtitle {
    width: 320px;
    padding: 4px 12px;
    border-radius: 16px;
    color: #80162a;
    background-color: #fff3f0;
  }

  .content {
    gap: 24px;
    width: 592px;
    height: 244px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .buttons {
    gap: 12px;
    display: flex;
  }
`
