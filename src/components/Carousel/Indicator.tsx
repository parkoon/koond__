import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { v1 as uuidv1 } from 'uuid'
import palette from '../../themes/palette'
import { fillArray } from '../../helpers/fillArray'

const StyledIndicatorWrapper = styled.div`
  position: absolute;
  bottom: 12px;
  left: 50%;

  transform: translateX(-50%);
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`
const StyledIndicator = styled.input.attrs({ type: 'radio', name: 'carousel' })`
  display: none;
  &:checked + label {
    width: 32px;
    background: ${palette.primary};
  }
`

const StyledIndicatorLabel = styled.label`
  display: inline-block;
  width: 24px;
  height: 6px;
  padding: 3px;
  border-radius: 2px;
  background: rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  box-sizing: border-box;
  cursor: pointer;
  margin-right: 7px;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`

type IndicatorProps = {
  onChange: (value: number) => void
  active: number
  count: number
}

function Indicator({ onChange, count }: IndicatorProps) {
  const [active, setActive] = useState(0)

  /**
   * create array from 0(zero)
   * [0, 1, 2, 3, 4, 5]
   */
  const items = fillArray(count, true)

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      const valueToNumber = parseInt(value, 10)
      setActive(valueToNumber)
      onChange(valueToNumber)
    },
    [onChange]
  )

  return (
    <StyledIndicatorWrapper>
      {items.map(item => {
        const key = uuidv1() + '-' + item
        return (
          <li key={key}>
            <StyledIndicator id={key} value={item} onChange={handleChange} checked={active === item} />
            <StyledIndicatorLabel htmlFor={key} />
          </li>
        )
      })}
    </StyledIndicatorWrapper>
  )
}

export default Indicator
