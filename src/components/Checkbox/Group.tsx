import React, { useState, useCallback, useEffect } from 'react'

import * as Styled from './styled'

import Checkbox, { CheckBoxGroupProps } from './Checkbox'

function Group({ options, defaultValue, title, onChange }: CheckBoxGroupProps) {
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
      {title && <Styled.CheckBoxTitle>{title}</Styled.CheckBoxTitle>}
      {options.map(option => (
        <Styled.CheckBoxGroupWrapper>
          <Checkbox
            key={option.label}
            name={option.value}
            onChange={handleChange}
            checked={!values.indexOf(option.value)}
          >
            {option.label}
          </Checkbox>
        </Styled.CheckBoxGroupWrapper>
      ))}
    </>
  )
}

export default Group
