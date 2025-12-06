import type { Equal, Expect } from '@type-challenges/utils'

type First<T extends readonly any[]> = T extends [infer F, ...infer _] ? F : never

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]

const buttons = ['start', 'stop', 'reset'] as const

type Button = typeof buttons[number]

const Mode = {
  Dark: 'dark',
  Light: 'light',
} as const

type t = typeof Mode[keyof typeof Mode]
