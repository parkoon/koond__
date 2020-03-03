import React from 'react'
import styled, { css } from 'styled-components'
import palette from '../../themes/palette'

// Types
type Props = {
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4
}

// Constants
const FONT_SIZE = {
  h1: '38px',
  h2: '30px',
  h3: '24px',
  h4: '20px',
}

// Functions
const fontSize = ({ level }: Props) => FONT_SIZE[`h${level}`]

const styles = css`
  color: ${palette.typography.default};
  padding: 0;
  margin: 0;
  font-size: ${fontSize};
`

const Title = styled(({ level, children, ...props }: Props) => React.createElement(`h${level}`, props, children))`
  ${styles}
`

Title.defaultProps = {
  level: 1,
}

export default Title
