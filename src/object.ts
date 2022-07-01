export function deepClone<T>(val: T): T {
  return JSON.parse(JSON.stringify(val))
}
