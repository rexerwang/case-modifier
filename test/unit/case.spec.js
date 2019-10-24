import * as CaseModifiers from '../../src/index'

describe('case-modifiers', () => {
  it(CaseModifiers.CASE_CAMEL, () => {
    expect(CaseModifiers.convert('WeWillRockWorld')).toBe('weWillRockWorld')

    expect(CaseModifiers.convert('We-Will-Rock-World')).toBe('weWillRockWorld')

    expect(CaseModifiers.convert('we_will_rock_world')).toBe('weWillRockWorld')
  })

  it(CaseModifiers.CASE_SNAKE, () => {
    expect(
      CaseModifiers.convert('WeWillRockWorld', CaseModifiers.CASE_SNAKE)
    ).toBe('we_will_rock_world')

    expect(
      CaseModifiers.convert('We-Will-Rock-World', CaseModifiers.CASE_SNAKE)
    ).toBe('we_will_rock_world')

    expect(
      CaseModifiers.convert('WE_WILL_ROCK_WORLD', CaseModifiers.CASE_SNAKE)
    ).toBe('we_will_rock_world')
  })

  it('kebabCase', () => {
    expect(CaseModifiers.kebabCase('WeWillRockWorld')).toBe(
      'we-will-rock-world'
    )

    expect(CaseModifiers.kebabCase('We-Will-Rock-World')).toBe(
      'we-will-rock-world'
    )

    expect(CaseModifiers.kebabCase('we_will_rock_world')).toBe(
      'we-will-rock-world'
    )
  })

  it('properCase', () => {
    expect(CaseModifiers.properCase('weWillRockWorld')).toBe('WeWillRockWorld')

    expect(CaseModifiers.properCase('We-will-Rock-world')).toBe(
      'WeWillRockWorld'
    )

    expect(CaseModifiers.properCase('we_will_rock_world')).toBe(
      'WeWillRockWorld'
    )
  })
})
