import React from 'react'
import styled from 'styled-components'
import palette from '../../../themes/palette'

const InputWrapper = styled.span<InpuWrapperProps>`
  display: inline-block;
  position: relative;
  width: 100%;
`
const IconWrapper = styled.span`
  display: flex;
  position: absolute;
  top: 50%;
  left: 7px;
  transform: translateY(-50%);
  color: ${palette.typography.grayscale[2]};
`

const StyledInput = styled.input<InputProps>`
  padding: 4px 11px;
  padding-left: ${({ icon }) => icon && '27px'};
  color: ${palette.typography.default};
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid ${palette.outline};
  border-radius: 2px;
  outline: none;

  transition: 0.3s;

  &:focus {
    border-color: ${palette.primary};
    box-shadow: 0 0 0 2px ${palette.shadow};
  }

  &:hover {
    border-color: ${palette.primary};
  }

  &::placeholder {
    color: ${palette.outline};
  }
`

// Types
type InputProps = {
  placeholder?: string
  size?: 'large' | 'defualt' | 'small'
  icon?: React.ReactNode
}

type InpuWrapperProps = {
  size?: 'large' | 'defualt' | 'small'
}

function Input({ size, ...props }: InputProps) {
  const { icon } = props

  return (
    <InputWrapper size={size}>
      <IconWrapper>{icon}</IconWrapper>
      <StyledInput {...props} />
    </InputWrapper>
  )
}

Input.defaultProps = {
  size: 'default',
}

export default Input
