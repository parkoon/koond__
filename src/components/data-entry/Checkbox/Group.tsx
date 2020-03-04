import React, { useState, useCallback, useEffect } from 'react'
import Checkbox from './Checkbox'
import styled from 'styled-components'

const CheckBoxWrapper = styled.span`
  margin: 0 8px;
`

// Types
type Option = {
  label: string
  value: string
}

type CheckBoxGroupProps = {
  options: Option[]
  defaultValue: string[]
  onChange: (values: string[]) => void
}
function Group({ options, defaultValue, onChange }: CheckBoxGroupProps) {
  const [values, setValues] = useState([...defaultValue])

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // values에 있다면 지우고 없다면 push
      const { name } = e.target
      const idx = values.indexOf(name)
      if (idx === -1) {
        setValues([...values, name])
      } else {
        setValues(values.filter(v => v !== name))
      }
    },
    [values]
  )

  useEffect(() => {
    onChange(values)
  }, [onChange, values])

  return (
    <>
      {options.map(option => (
        <CheckBoxWrapper>
          <Checkbox
            key={option.label}
            name={option.value}
            onChange={handleChange}
            checked={!values.indexOf(option.value)}
          >
            {option.label}
          </Checkbox>
        </CheckBoxWrapper>
      ))}
    </>
  )
}

export default Group
