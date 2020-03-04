import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import palette from '../../../../themes/palette'
import { InputProps } from '../Input'

// Constants
const INPUT_SIZE = {
  default: '4px',
  large: '7px',
  small: '2px',
}

// Functions
const inputSize = ({ htmlSize }: InputProps) => `${INPUT_SIZE[htmlSize]} 11px`
const inputPaddingLeft = ({ suffixIcon, prefixIcon }: InputProps) => {
  if (suffixIcon) {
    console.log('suffix')
    return 'padding-right: 27px'
  } else if (prefixIcon) {
    console.log('prefix')

    return 'padding-left: 27px'
  } else {
    console.log('null')

    return null
  }
}

export const InputWrapper = styled.span`
  display: inline-block;
  position: relative;
  width: 100%;
`
export const PrefixIconWrapper = styled.span`
  display: flex;
  position: absolute;
  top: 50%;
  left: 7px;
  transform: translateY(-50%);
  color: ${palette.typography.grayscale[2]};
`

export const SuffixIconWrapper = styled.span`
  display: flex;
  position: absolute;
  top: 50%;
  right: 7px;
  transform: translateY(-50%);
  color: ${palette.typography.grayscale[2]};
`

export const StyledInput = styled.input<InputProps>`
  padding: ${inputSize};

  ${inputPaddingLeft};
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
