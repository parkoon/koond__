import React from 'react'
import styled from 'styled-components'
import palette from '../../../themes/palette'

// Constants
const INPUT_SIZE = {
  default: '4px',
  large: '7px',
  small: '2px',
}

// Functions
const inputSize = ({ htmlSize }: InputProps) => `${INPUT_SIZE[htmlSize]} 11px`

const InputWrapper = styled.span`
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
  padding: ${inputSize};
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
  htmlSize?: 'large' | 'defualt' | 'small'
  icon?: React.ReactNode
}

function Input({ ...props }: InputProps) {
  const { icon } = props

  return (
    <InputWrapper>
      <IconWrapper>{icon}</IconWrapper>
      <StyledInput {...props} />
    </InputWrapper>
  )
}

Input.defaultProps = {
  htmlSize: 'default',
}

export default Input
