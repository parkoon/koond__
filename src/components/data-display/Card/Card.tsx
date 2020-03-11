import React from 'react'
import styled from 'styled-components'
import palette from '../../../themes/palette'
import Typography from '../../general/Typography'

const StyledCardWrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: ${palette.grayscale[0]};
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  position: relative;
  background: #fff;
  border-radius: 2px;
  transition: all 0.3s;
  border: 1px solid ${palette.outline};
  width: 300px;
`

const StyledImageCover = styled.div`
  & > * {
    display: block;
    width: 100%;
  }
`

const StyledCardBody = styled.div`
  padding: 24px;
`

const StyledCardTitle = styled.h3`
  overflow: hidden;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 0;
  margin-bottom: 7px;
`

const StyledCardDescription = styled.p`
  margin: 0;
  color: ${palette.grayscale[2]};
`

function Card() {
  return (
    <StyledCardWrapper>
      <StyledImageCover>
        <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
      </StyledImageCover>

      <StyledCardBody>
        <StyledCardTitle>Card title</StyledCardTitle>
        <StyledCardDescription>This is the description</StyledCardDescription>
      </StyledCardBody>
    </StyledCardWrapper>
  )
}

export default Card
