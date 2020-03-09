export function fillArray(count: number): number[] {
  let array = []
  let i = 1
  for (; i <= count; i++) {
    array.push(i)
  }
  return array
}

export function fillArrayReverse(count: number): number[] {
  let array = []
  let i = count
  for (; i > 0; i--) {
    console.log(i)
    array.push(i)
  }
  return array
}
