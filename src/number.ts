export function isPrime(num: number): boolean {
  const floor = Math.floor(Math.sqrt(num))
  for (let i = 2; i <= floor; i++) {
    if (num % i === 0)
      return false
  }
  return num >= 2
}
