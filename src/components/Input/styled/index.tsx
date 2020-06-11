import styled, { css } from 'styled-components'

import palette from '../../../themes/palette'
import { InputProps, TextareaProps } from '../Input'

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
    return 'padding-right: 27px'
  } else if (prefixIcon) {
    return 'padding-left: 27px'
  } else {
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

export const Input = styled.input<InputProps>`
  padding: ${inputSize};

  ${inputPaddingLeft};
  color: ${palette.typography.default};
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid red;
  border-radius: 2px;
  outline: none;

  transition: 0.3s;

  /**
    error인 경우 hover focus 효과 x
   */
  ${props =>
    props.error
      ? css`
          border: 1px solid ${palette.danger};
          &:focus {
            box-shadow: 0 0 0 2px rgba(182, 5, 12, 0.2);
          }
        `
      : css`
          border: 1px solid ${palette.outline};

          &:focus {
            border-color: ${palette.primary};
            box-shadow: 0 0 0 2px ${palette.shadow};
          }

          &:hover {
            border-color: ${palette.primary};
          }
        `}

  &::placeholder {
    color: ${palette.outline};
  }
`
export const Textarea = styled.textarea<TextareaProps>`
  color: ${palette.typography.default};
  padding: 4px 11px;
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid ${palette.outline};
  border-radius: 2px;
  outline: none;

  resize: vertical;
  overflow: auto;

  transition: 0.3s;

  /**
    error인 경우 hover focus 효과 x
   */
  ${props =>
    props.error
      ? css`
          border: 1px solid ${palette.danger};
          &:focus {
            box-shadow: 0 0 0 2px rgba(182, 5, 12, 0.2);
          }
        `
      : css`
          border: 1px solid ${palette.outline};

          &:focus {
            border-color: ${palette.primary};
            box-shadow: 0 0 0 2px ${palette.shadow};
          }

          &:hover {
            border-color: ${palette.primary};
          }
        `}

  &::placeholder {
    color: ${palette.outline};
  }
`

export const HelperText = styled.span`
  display: inline-block;
  margin-top: 5px;
  text-align: left;
  font-weight: 400;
  font-size: 13px;
  color: ${palette.danger};
`
