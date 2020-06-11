import React from 'react'
import ScrollTop from '.'
import styled from 'styled-components'

export default {
  title: 'ScrollTop',
  component: ScrollTop,
  parameters: {
    componentSubtitle: '페이지를 맨 위로 올리는 버튼이 필요할 때 사용하는 컴포넌트',
  },
}

const Container = styled.div`
  position: relative;
  overflow: auto;
  border: 1px solid #ebebeb;
  padding: 24px;
`
const RedBox = styled.div`
  width: 100%;
  height: 200px;
  background: #e74c3c;
`
const BlueBox = styled.div`
  width: 100%;
  height: 200px;
  background: #3498db;
`
const PurpleBox = styled.div`
  width: 100%;
  height: 200px;
  background: #8e44ad;
`
const OrangeBox = styled.div`
  width: 100%;
  height: 200px;
  background: #f39c12;
`

export const Default = () => {
  return (
    <Container>
      <ScrollTop />
      <OrangeBox />
      <RedBox />
      <BlueBox />
      <PurpleBox />
      <OrangeBox />
      <RedBox />
      <BlueBox />
      <PurpleBox />
    </Container>
  )
}
