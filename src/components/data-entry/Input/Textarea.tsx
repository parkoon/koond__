import React, { useState } from 'react'

import * as Styled from './styled'
import { TextareaProps } from './Input'

function Textarea({ rows, defaultValue, onChange, helperText, ...props }: TextareaProps) {
  const [value, setValue] = useState(defaultValue)
  const row = Math.max(2, Math.min(rows, 6))

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
    onChange(e.target.value)
  }

  return (
    <>
      <Styled.Textarea value={value} onChange={handleChange} rows={row} {...props} />
      <Styled.HelperText>{helperText}</Styled.HelperText>
    </>
  )
}

Textarea.defaultProps = {
  rows: 4,
}

export default Textarea
