/**
 * Full API: https://facebook.github.io/jest/docs/en/expect.html
 */

test('falsy', () => {
  const falsies = [false, null, undefined, 0, '']
  falsies.forEach(falsy => {
    expect(falsy).toBeFalsy()
  })
})

test('truthy', () => {
  const truthies = [true, 'hello', {}, [], 1]
  truthies.forEach(truthy => {
    expect(truthy).toBeTruthy()
  })
})

test('equality', () => {
  expect(1).toBe(1)
  expect({ hello: true }).toEqual({ hello: true })
  expect(null).toBeNull()
  expect(undefined).toBeUndefined()
})

test('arrays', () => {
  expect([1, 2, 3]).toContain(2)

  const array = [{ hello: true }, { whoa: 'dude' }]
  expect(array).toContainEqual({ whoa: 'dude' })
  expect(array).toHaveLength(2)
})

// compare with sinon
test('jest.fn', () => {
  const func = jest.fn()
  func()
  expect(func).toHaveBeenCalled()

  const anotherFunc = jest.fn()
  anotherFunc()
  anotherFunc()
  anotherFunc()
  expect(anotherFunc).toHaveBeenCalledTimes(3)

  const paramsFunc = jest.fn()
  paramsFunc('hello')
  expect(paramsFunc).toHaveBeenCalledWith('hello')

  const paramsFunc2 = jest.fn()
  paramsFunc2('hello')
  paramsFunc2('goodbye')
  expect(paramsFunc2).toHaveBeenLastCalledWith('goodbye')
})

test('class', () => {
  class Hello {}
  const hello = new Hello()
  expect(hello).toBeInstanceOf(Hello)
})

test('regex', () => {
  const str = '___foobar___'
  expect(str).toMatch(/fo+bar!?/)
})

test('errors', () => {
  const error = () => {
    throw new Error('oh noes')
  }

  // notice that you do not invoke this explicitly
  // otherwise, error will be thrown in current scope, outside of the jest matcher
  expect(error).toThrow(new Error('oh noes'))
})

test('fuzzy', () => {
  expect(0.2 + 0.1).toBeCloseTo(0.3)

  const rand = Math.random()
  expect(rand).toBeGreaterThan(0)
  expect(rand).toBeGreaterThanOrEqual(0)
  expect(rand).toBeLessThan(1)
  expect(rand).toBeLessThanOrEqual(0.999999999999999)
})

test('object', () => {
  const actual = {
    a: 1000,
    b: {
      c: 'Hello, world!',
    },
    d: [1, 2, 3],
    e: 'exact match',
  }

  const expected = {
    a: expect.any(Number),
    b: {
      c: expect.stringContaining('Hello'),
    },
    d: expect.arrayContaining([2, 3]),
    e: 'exact match',
  }
  expect(actual).toMatchObject(expected)
})

test('async', async () => {
  const result = await Promise.resolve('resolved')
  expect(result).toEqual('resolved')
})
