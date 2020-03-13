export type ChipVariant = 'outlined' | 'fill'

export type ChipProps = {
  title: string
  disabled?: boolean
  onClick?: () => void
  onDelete?: () => void
  style?: React.CSSProperties
  variant?: ChipVariant
  deleteIcon?: React.ReactNode
  color?: string
}
