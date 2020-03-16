import { v1 as uuidv1 } from 'uuid'

export default function idGenerator(prefix: string = '') {
  return prefix + '-' + uuidv1()
}
