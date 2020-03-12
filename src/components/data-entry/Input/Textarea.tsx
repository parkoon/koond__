import React, { useState } from 'react'

import * as Styled from './styled'
import * as I from './interface'

function Textarea({ rows, defaultValue, onChange, helperText, ...props }: I.TextareaProps) {
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
