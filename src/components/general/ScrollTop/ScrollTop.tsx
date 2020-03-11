import React, { useEffect, useState, useCallback } from 'react'
import Button from '../Button'
import Icon from '../Icon'
import styled from 'styled-components'
import getScroll from '../../../helpers/getScroll'

type StyledScrollTopProps = {
  visible: boolean
}
const StyledScrollTop = styled.div<StyledScrollTopProps>`
  position: fixed;
  right: 30px;
  bottom: 30px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  opacity: ${props => (props.visible ? 1 : 0)};
  cursor: pointer;
`

type ScrollTopType = {
  visibilityHeight?: number
  children?: React.ReactNode
}

function ScrollTop({ visibilityHeight, children }: ScrollTopType) {
  const [visible, setVisible] = useState(false)

  const handleClick = useCallback(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [])
  const handleScroll = useCallback(() => {
    const scrollTop = getScroll(window)

    if (scrollTop > visibilityHeight) {
      !visible && setVisible(true)
    } else {
      visible && setVisible(false)
    }
  }, [visibilityHeight, visible])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    // return document.body.removeEventListener('scroll', handleScroll)
  }, [handleScroll])
  return (
    <StyledScrollTop visible={visible} onClick={handleClick}>
      {children || <Button onlyIcon icon={<Icon name="scroll-top" />} shape="round" variant="primary" />}
    </StyledScrollTop>
  )
}

ScrollTop.defaultProps = {
  visibilityHeight: 400,
}

export default ScrollTop
