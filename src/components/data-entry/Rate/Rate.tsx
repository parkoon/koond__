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
  margin-right: 4px;
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

const renderStars = (count: number) =>
  Array.from(new Array(count)).map((_, idx) => (
    <>
      <StyledRadio id={`star${idx}`} value={idx} />
      <StyledLabel htmlFor={`star${idx}`}>
        <Icon name="star" size={18} />
      </StyledLabel>
    </>
  ))

type StarProps = {
  count?: number
}

function Rate({ count }: StarProps) {
  return <StyledFieldSet>{renderStars(count)}</StyledFieldSet>
}

Rate.defaultProps = {
  count: 5,
}

export default Rate
