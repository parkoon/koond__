import React, { useState } from 'react'
import { StyledTextarea } from './styled/style'

type TextareaProps = {
  rows?: number
  defaultValue?: string
  onChange: (value: string) => void
}

function Textarea({ rows, defaultValue, onChange, ...props }: TextareaProps) {
  const [value, setValue] = useState(defaultValue)
  const row = Math.max(2, Math.min(rows, 6))

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
    onChange(e.target.value)
  }

  return <StyledTextarea value={value} onChange={handleChange} rows={row} {...props} />
}

Textarea.defaultProps = {
  rows: 4,
}

export default Textarea
