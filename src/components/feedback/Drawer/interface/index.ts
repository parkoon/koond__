export type DrawerPlacement = 'left' | 'right'

export type DrawerProps = {
  children: React.ReactNode
  size: number
  visible?: boolean
  placement: DrawerPlacement
  onClose?: () => void
}
