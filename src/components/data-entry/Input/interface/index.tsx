export type InputProps = {
  placeholder?: string
  htmlSize?: 'large' | 'defualt' | 'small'
  prefixIcon?: React.ReactNode
  suffixIcon?: React.ReactNode
  onChange: (value: any) => void
}
