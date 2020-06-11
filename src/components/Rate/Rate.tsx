import React, { useCallback } from 'react'
import { v1 as uuidv1 } from 'uuid'
import styled, { css } from 'styled-components'
import { fillArrayReverse } from '../../helpers/fillArray'
import Icon from '../Icon'
import palette from '../../themes/palette'

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

type StyledLabelProps = {
  disabled: boolean
  defaultValue: any
}
const StyledLabel = styled.label<StyledLabelProps>`
  color: #ddd;
  float: right;
  margin-right: 4px;
  cursor: pointer;
  transition: 0.3s;

/* default value 값을 기준으로 색을 입혀줍니다. */
  ${props =>
    props.defaultValue &&
    css`
      & ~ label {
        color: ${palette.primary};
      }
    `}

  /* disabled 일 경우에는 star에 색을 입히지 않습니다. */
  ${props =>
    !props.disabled &&
    css`
      &:hover ~ label,
      &:hover {
        color: ${palette.primary};
      }
    `}

  &:hover {
    transform: scale(1.1) translateY(1px);
  }
`

type StarProps = {
  /** 별 개수 */
  count?: number

  /** readonly 여부 */
  disabled?: boolean

  /** 최초 마운트 시 보여줄 별의 개수 */
  defaultValue?: number
  onChange?: (value: string) => void
}

function Rate({ count, disabled, onChange, defaultValue }: StarProps) {
  /* Exception */
  if (count < defaultValue) throw Error('별의 숫자보다 높은 기본 값을 입력하셨습니다.')

  /* count 5 -> [5, 4, 3, 2, 1] */
  const reversedStars = fillArrayReverse(count)

  const id = uuidv1()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  const renderStars = useCallback(
    () =>
      reversedStars.map(star => (
        <React.Fragment key={`${id}-star${star}`}>
          <StyledRadio id={`${id}-star${star}`} value={star} disabled={disabled} onChange={handleChange} />
          <StyledLabel htmlFor={`${id}-star${star}`} disabled={disabled} defaultValue={star === defaultValue}>
            <Icon name="star" size={18} />
          </StyledLabel>
        </React.Fragment>
      )),
    [defaultValue, disabled, handleChange, id, reversedStars]
  )
  return <StyledFieldSet>{renderStars()}</StyledFieldSet>
}

Rate.defaultProps = {
  count: 5,
  disabled: false,
  defaultValue: 0,
  onChange: () => {
    console.warn('onChange function is not defined')
  },
}

export default Rate
