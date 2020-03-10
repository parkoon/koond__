export function fillArray(count: number, fromZero?: boolean): number[] {
  let array = []
  let i = fromZero ? 0 : 1

  if (fromZero) {
    for (; i < count; i++) {
      array.push(i)
    }
  } else {
    for (; i <= count; i++) {
      array.push(i)
    }
  }
  return array
}

export function fillArrayReverse(count: number): number[] {
  let array = []
  let i = count
  for (; i > 0; i--) {
    array.push(i)
  }
  return array
}
