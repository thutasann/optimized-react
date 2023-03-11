/**
 * Fib Function
 * @param n {number}
 * @returns n {number}
 */
export function Fib(n: any): any {
  return n <= 1 ? n : Fib(n - 1) + Fib(n - 2)
}
