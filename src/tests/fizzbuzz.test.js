/**
 * FizzBuzz Tests
 */

const {
  FIZZ,
  BUZZ,
  FIZZBUZZ,
  isFizzy,
  isBuzzy,
  fizzyBuzzy,
  fizzBuzz,
} = require('../fizzbuzz.js');

const FIZZ_ON = 3;
const BUZZ_ON = 5;

describe('sanity Check', () => {
  it('tests are running', () => {
    expect(666).toBe(666);
  });
});

describe('constants', () => {
  it('fIZZ constant is "fizz"', () => {
    expect(FIZZ).toBe(FIZZ);
  });

  it('bUZZ constant is "buzz"', () => {
    expect(BUZZ).toBe(BUZZ);
  });

  it('fIZZBUZZ constant is "fizzbuzz"', () => {
    expect(FIZZBUZZ).toBe(FIZZBUZZ);
  });
});

describe('isFizzy(n)', () => {
  it('returns true if n is divisible by 3', () => {
    for (let i = 0; i <= FIZZ_ON * 100; i += FIZZ_ON) {
      expect(isFizzy(i)).toBe(true);
      expect(isFizzy(-i)).toBe(true);
    }
  });

  it('returns false if n is not divisible by 3', () => {
    for (let i = 0; i <= FIZZ_ON * 100; i += FIZZ_ON) {
      expect(isFizzy(i + 1)).toBe(false);
      expect(isFizzy(-i + 1)).toBe(false);
    }
    expect(isFizzy(BUZZ_ON)).toBe(false);
    expect(isFizzy(-BUZZ_ON)).toBe(false);
  });

  it('returns false if n is not an integer', () => {
    expect(isFizzy(`${FIZZ_ON * BUZZ_ON}`)).toBe(false);
    expect(isFizzy([FIZZ_ON, BUZZ_ON])).toBe(false);
    expect(isFizzy({ FIZZ_ON: BUZZ_ON })).toBe(false);
    expect(isFizzy('')).toBe(false);
    expect(isFizzy([])).toBe(false);
    expect(isFizzy({})).toBe(false);
  });
});

describe('isBuzzy(n)', () => {
  it('returns true if n is divisible by 3', () => {
    for (let i = 0; i <= BUZZ_ON * 100; i += BUZZ_ON) {
      expect(isBuzzy(i)).toBe(true);
      expect(isBuzzy(-i)).toBe(true);
    }
  });

  it('returns false if n is not divisible by 3', () => {
    for (let i = 0; i <= BUZZ_ON * 100; i += BUZZ_ON) {
      expect(isBuzzy(i + 1)).toBe(false);
      expect(isBuzzy(-i + 1)).toBe(false);
    }
    expect(isBuzzy(FIZZ_ON)).toBe(false);
    expect(isBuzzy(-FIZZ_ON)).toBe(false);
  });

  it('returns false if n is not an integer', () => {
    expect(isBuzzy(`${BUZZ_ON}`)).toBe(false);
    expect(isBuzzy([BUZZ_ON])).toBe(false);
    expect(isBuzzy({ BUZZ_ON })).toBe(false);
    expect(isBuzzy('')).toBe(false);
    expect(isBuzzy([])).toBe(false);
    expect(isBuzzy({})).toBe(false);
  });
});

describe('fizzyBuzzy(n)', () => {
  it('returns "fizz" if n is divisible by 3', () => {
    for (let i = 0; i <= FIZZ_ON * 100; i += FIZZ_ON) {
      if (i % BUZZ_ON !== 0) {
        expect(fizzyBuzzy(i)).toBe(FIZZ);
        expect(fizzyBuzzy(-i)).toBe(FIZZ);
      }
    }
  });

  it('returns "buzz" if n is divisible by 5', () => {
    for (let i = 0; i <= BUZZ_ON * 100; i += BUZZ_ON) {
      if (i % FIZZ_ON !== 0) {
        expect(fizzyBuzzy(i)).toBe(BUZZ);
        expect(fizzyBuzzy(-i)).toBe(BUZZ);
      }
    }
  });

  it('returns "fizzbuzz" if n is divisible by 3 and 5', () => {
    for (let i = 0; i <= BUZZ_ON * FIZZ_ON * 100; i += BUZZ_ON * FIZZ_ON) {
      expect(fizzyBuzzy(i)).toBe(FIZZBUZZ);
      expect(fizzyBuzzy(-i)).toBe(FIZZBUZZ);
    }
  });

  it('returns empty string if n not an integer', () => {
    expect(fizzyBuzzy(`${FIZZ_ON * BUZZ_ON}`)).toBe('');
    expect(fizzyBuzzy([FIZZ_ON, BUZZ_ON])).toBe('');
    expect(fizzyBuzzy({ FIZZ_ON: BUZZ_ON })).toBe('');
    expect(fizzyBuzzy('')).toBe('');
    expect(fizzyBuzzy([])).toBe('');
    expect(fizzyBuzzy({})).toBe('');
  });
});

describe('fizzBuzz(count)', () => {
  it('returns the correct data for `count` of 100', () => {
    const fizzBuzzResult = fizzBuzz(100);
    expect(fizzBuzzResult.count).toBe(100);
    expect(fizzBuzzResult.fizz).toBe(27);
    expect(fizzBuzzResult.buzz).toBe(14);
    expect(fizzBuzzResult.fizzBuzz).toBe(6);
  });

  it('returns the correct data for `count` of -100', () => {
    const fizzBuzzResult = fizzBuzz(-100);
    expect(fizzBuzzResult.count).toBe(-100);
    expect(fizzBuzzResult.fizz).toBe(0);
    expect(fizzBuzzResult.buzz).toBe(0);
    expect(fizzBuzzResult.fizzBuzz).toBe(0);
  });

  it('returns the correct data for non number `count`', () => {
    const fizzBuzzResult = fizzBuzz([]);
    expect(fizzBuzzResult.count).toBe([]);
    expect(fizzBuzzResult.fizz).toBe(0);
    expect(fizzBuzzResult.buzz).toBe(0);
    expect(fizzBuzzResult.fizzBuzz).toBe(0);
  });
});
