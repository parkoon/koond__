export type TabPlacement = 'top' | 'left'

export type TabsType = 'default' | 'card'
export type TabsProps = {
  placement?: TabPlacement
  children?: React.ReactNode
  type?: TabsType
}

export type TabPanelProps = {
  title: string
  children: React.ReactNode
}
