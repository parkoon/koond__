import React from 'react'
import styled from 'styled-components'
import palette from '../../../themes/palette'

const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`
const StyledInput = styled.input`
  width: 0;
  height: 0;
  opacity: 0;

  &:checked + span::after {
    transform: translateX(26px);
  }

  &:checked + span {
    background: ${palette.primary};
  }
`
const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${palette.switch.off};
  border-radius: 34px;
  transition: 0.2s;

  &::after {
    content: '';
    position: absolute;
    width: 26px;
    height: 26px;
    left: 4px;
    top: 4px;
    background-color: ${palette.white};
    transition: 0.4s;
    border-radius: 50%;
  }
`

type SwitchProps = {
  defaultChecked?: boolean
  onChange: (checked: boolean) => void
}

function Switch({}: SwitchProps) {
  return (
    <StyledLabel>
      <StyledInput type="checkbox" />
      <Slider></Slider>
    </StyledLabel>
  )
}

Switch.defaultProps = {
  defaultChecked: false,
}

export default Switch
