export default function getScroll(target: HTMLInputElement | Window | null, top: boolean = true): number {
  const prop = top ? 'pageYOffset' : 'pageXOffset'
  const method = top ? 'scrollTop' : 'scrollLeft'

  const isWindow = target === window
  let scroll = isWindow ? (target as Window)[prop] : (target as HTMLInputElement)[method]

  if (isWindow && typeof scroll !== 'number') {
    scroll = (document.documentElement as HTMLInputElement)[method]
  }

  return scroll
}
