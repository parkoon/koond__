import styled from 'styled-components'

import * as I from '../interface'

export const Dim = styled.div<I.DimProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  background-color: rgba(0, 0, 0, 0.45);
  transition: 0.3s;
  z-index: -1;
`
