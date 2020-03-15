export type ModalProps = {
  onClose?: () => void
  actions?: React.ReactNode[]
  children: React.ReactNode
  visible?: boolean
}
