import React from 'react'
import Tooltip from '.'
import Button from '../../general/Button'
import styled from 'styled-components'

export default {
  title: 'Data Display',
}

const Container = styled.div`
  width: 720px;
  height: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const tooltip = () => {
  return (
    <Container>
      <Tooltip title="Wait" placement="top">
        <Button>TOP</Button>
      </Tooltip>
      <Tooltip title="A" placement="right">
        <Button>RIGHT</Button>
      </Tooltip>
      <Tooltip title="Moment" placement="bottom">
        <Button>BOTTOM</Button>
      </Tooltip>
      <Tooltip title="More" placement="left">
        <Button>LEFT</Button>
      </Tooltip>
    </Container>
  )
}
