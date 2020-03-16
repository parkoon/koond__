import React from 'react'
import styled from 'styled-components'
import palette from '../../../themes/palette'

const StyledRadio = styled.input`
  display: none;

  &:checked + span {
    border-color: ${palette.primary};
  }
  &:checked + span::after {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`

const StyledRadioIcon = styled.span`
  display: inline-block;
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  vertical-align: middle;
  border-radius: 50%;
  border: 1px solid ${palette.outline};
  position: relative;
  transition: 0.2s ease;

  &:hover {
    border-color: ${palette.primary};
  }
  &::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    box-sizing: border-box;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    background: ${palette.primary};
    opacity: 0;
    transition: 0.2s ease;
  }
`

const StyledRadioText = styled.span`
  margin-left: 5px;
`

const StyledLabel = styled.label`
  cursor: pointer;
`

type RadioProps = {
  /** Radio 텍스트 */
  children?: string

  /** Radio 이름 */
  name?: string

  /** Radio 값 */
  value: any

  /** Checked 여부 */
  checked?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Radio({ children, ...props }: RadioProps) {
  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {}
  return (
    <StyledLabel>
      <StyledRadio type="radio" {...props}></StyledRadio>
      <StyledRadioIcon />
      <StyledRadioText>{children}</StyledRadioText>
    </StyledLabel>
  )
}

export default Radio
