import styled from 'styled-components'
import palette from '../../../../themes/palette'

export const AccordionWrapper = styled.div``
export const KeyboardWrapper = styled.div`
  /* border-bottom: 1px solid ${palette.outline}; */
`

export const KeyboardLabel = styled.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 12px 8px;
  font-size: 16px;
  cursor: pointer;

  /* Border trick */
  box-shadow: ${`0 1px 0 0 ${palette.outline}, 0 1px 0 0 ${palette.outline} inset`};

  /* Icon */
  & > span {
    transition: 0.35s;
    /* transform: rotate(45deg); */
  }
`
export const InvisibleInput = styled.input.attrs(props => ({
  type: props.multiple ? 'checkbox' : 'radio',
  name: props.name,
}))`
  display: none;

  &:checked + label + div {
    max-height: 100vh;
  }

  /* Icon */
  &:checked + label > span {
    transform: rotate(90deg);
  }
`
export const KeyboardDescription = styled.div`
  padding: 0px 16px;
  font-size: 14px;
  max-height: 0;
  overflow: hidden;
  transition: 0.35s;
  box-sizing: border-box;
  /* border: none; */
`
