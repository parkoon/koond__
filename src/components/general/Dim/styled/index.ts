import styled from 'styled-components'

import * as I from '../interface'

export const Dim = styled.div<I.DimProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: ${({ visible }) => (visible ? 0.6 : 0)};
  transition: 0.3s;
  z-index: -1;
`
