import styled from 'styled-components'
import palette from '../../../themes/palette'

export const CheckBoxGroupWrapper = styled.span`
  margin-right: 8px;
  &:last-child {
    margin: 0;
  }
`

export const CheckBoxText = styled.span`
  display: inline-block;
  cursor: pointer;
  margin-left: 7px;
  font-size: 13px;
  vertical-align: middle;
  user-select: none;
`
export const CheckBoxIcon = styled.span`
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  position: relative;
  width: 15px;
  height: 15px;
  border: 1px solid ${palette.outline};
  border-radius: 3px;
  transition: 0.1s ease;

  &::after {
    content: '';
    position: absolute;
    top: 1px;
    left: 5px;
    width: 4px;
    height: 8px;
    border-right: 2px solid ${palette.white};
    border-bottom: 2px solid ${palette.white};
    transform: rotate(45deg) scale(0);
    transition: 0.2s ease;
    transition-delay: 0.15;
    opacity: 0;
  }
`

export const Checkbox = styled.input`
  display: none;

  &:checked + span {
    border-color: transparent;
    background: ${palette.primary};
  }

  &:checked + span::after {
    opacity: 1;
    transform: rotate(45deg) scale(1);
  }
`

export const CheckBoxTitle = styled.h4`
  margin: 0;
  margin-bottom: 5px;
  font-size: 15px;

  & > * {
    margin: 0;
  }
`
