import React, { useState } from 'react'
import styled from 'styled-components'
import palette from '../../../themes/palette'

const SWITCH_SIZE = {
  default: {
    width: '44px',
    height: '22px',
    slider: '18px',
  },
  small: {
    width: '30px',
    height: '15px',
    slider: '11px',
  },
}

const StyledLabel = styled.label<StyleProps>`
  position: relative;
  display: inline-block;
  width: ${props => SWITCH_SIZE[props.htmlSize].width};
  height: ${props => SWITCH_SIZE[props.htmlSize].height};
`
const StyledInput = styled.input<StyleProps>`
  width: 0;
  height: 0;
  opacity: 0;

  &:checked + span::after {
    transform: ${props => `translateX(${SWITCH_SIZE[props.htmlSize].height})`};
  }

  &:checked + span {
    background: ${palette.primary};
  }
`
const Slider = styled.span<StyleProps>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${palette.switch.off};
  border-radius: 15px;
  transition: 0.2s;

  &::after {
    content: '';
    position: absolute;
    width: ${props => SWITCH_SIZE[props.htmlSize].slider};
    height: ${props => SWITCH_SIZE[props.htmlSize].slider};
    left: 2px;
    top: 2px;
    background-color: ${palette.white};
    transition: 0.4s;
    border-radius: 50%;
  }
`

type SwitchProps = {
  defaultChecked?: boolean
  size?: 'default' | 'small'
  onChange: (checked: boolean) => void
}

type StyleProps = {
  htmlSize: 'default' | 'small'
}

function Switch({ defaultChecked, onChange, size }: SwitchProps) {
  const [checked, setChecked] = useState(defaultChecked)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
    onChange(e.target.checked)
  }

  return (
    <StyledLabel htmlSize={size}>
      <StyledInput type="checkbox" checked={checked} onChange={handleChange} htmlSize={size} />
      <Slider htmlSize={size} />
    </StyledLabel>
  )
}

Switch.defaultProps = {
  defaultChecked: false,
  size: 'default',
}

export default Switch
