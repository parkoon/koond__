type commonProps = {
  placeholder?: string
  defaultValue?: string
  error?: boolean
  helperText?: string

  onChange: (value: string) => void
}
export type InputProps = commonProps & {
  htmlSize?: 'large' | 'defualt' | 'small'
  prefixIcon?: React.ReactNode
  suffixIcon?: React.ReactNode
}

export type TextareaProps = commonProps & {
  rows?: number
}
