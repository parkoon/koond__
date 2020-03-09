import React from 'react'
import styled from 'styled-components'
import Icon from '../../general/Icon'
import palette from '../../../themes/palette'

const StyledFieldSet = styled.fieldset`
  margin: 0;
  padding: 0;
  border: none;
  float: left;
`

const StyledRadio = styled.input.attrs({ type: 'radio', name: 'rating' })`
  display: none;

  &:checked ~ label {
    color: ${palette.primary};
  }
`
const StyledLabel = styled.label`
  color: #ddd;
  float: right;

  cursor: pointer;

  transition: 0.3s;

  &:hover ~ label,
  &:hover {
    color: ${palette.primary};
  }

  &:hover {
    transform: scale(1.1) translateY(1px);
  }
`

const renderStars = () =>
  Array.from(new Array(5)).map((_, idx) => (
    <>
      <StyledRadio id={`star${idx}`} value={idx} />
      <StyledLabel htmlFor={`star${idx}`}>
        <Icon name="star" />
      </StyledLabel>
    </>
  ))

function Rate() {
  return <StyledFieldSet>{renderStars()}</StyledFieldSet>
}

export default Rate
