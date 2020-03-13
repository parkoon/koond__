export type TooltipPlacement = 'top' | 'left' | 'bottom' | 'right'

export type TooltipProps = {
  children: React.ReactNode
  title: string
  placement: TooltipPlacement
}
