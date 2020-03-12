export type Option = {
  label: string
  value: string
}

export type CheckBoxProps = {
  children?: React.ReactNode
  checked?: boolean
  name: string
  title?: React.ReactNode
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type CheckBoxGroupProps = {
  options: Option[]
  defaultValue: string[]
  title?: React.ReactNode
  onChange: (values: string[]) => void
}
