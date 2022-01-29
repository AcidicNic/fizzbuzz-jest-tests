/**
 * FizzBuzz-Refactored Tests
 */

const {
  FIZZ,
  BUZZ,
  FIZZBUZZ,
  DEFAULT_FIZZ_ON,
  DEFAULT_BUZZ_ON,
  isFizzyBuzzy,
  fizzyBuzzy,
  fizzBuzz,
} = require('../fizzbuzz-refactored.js');

const FIZZ_ON = 3;
const BUZZ_ON = 5;

describe('sanity Check', () => {
  it('tests are running', () => {
    expect(666).toBe(666);
  });
});

describe('constants', () => {
  it('FIZZ constant is "fizz"', () => {
    expect(FIZZ).toBe('fizz');
  });

  it('BUZZ constant is "buzz"', () => {
    expect(BUZZ).toBe('buzz');
  });

  it('FIZZBUZZ constant is "fizzbuzz"', () => {
    expect(FIZZBUZZ).toBe('fizzbuzz');
  });

  it('DEFAULT_FIZZ_ON constant is a finite number', () => {
    expect(Number.isFinite(DEFAULT_FIZZ_ON)).toBe(true);
  });

  it('DEFAULT_BUZZ_ON constant is a finite number', () => {
    expect(Number.isFinite(DEFAULT_BUZZ_ON)).toBe(true);
  });
});

describe('isFizzyBuzzy(n, divisor)', () => {
  it('returns true if `n` is divisible by `divisor`', () => {
    for (let i = 0; i <= FIZZ_ON * 100; i += FIZZ_ON) {
      expect(isFizzyBuzzy(i, FIZZ_ON)).toBe(true);
      expect(isFizzyBuzzy(-i, FIZZ_ON)).toBe(true);
    }
  });

  it('returns false if `n` is not divisible by `divisor`', () => {
    for (let i = 0; i <= BUZZ_ON * 100; i += BUZZ_ON) {
      expect(isFizzyBuzzy(i + 1, BUZZ_ON)).toBe(false);
      expect(isFizzyBuzzy(-i + 1, BUZZ_ON)).toBe(false);
    }
    expect(isFizzyBuzzy(BUZZ_ON, FIZZ_ON)).toBe(false);
    expect(isFizzyBuzzy(-BUZZ_ON, FIZZ_ON)).toBe(false);
  });

  it('returns false if `n` is not an finite number', () => {
    expect(isFizzyBuzzy(`${BUZZ_ON}`, BUZZ_ON)).toBe(false);
    expect(isFizzyBuzzy([BUZZ_ON], BUZZ_ON)).toBe(false);
    expect(isFizzyBuzzy({ BUZZ_ON }, BUZZ_ON)).toBe(false);
    expect(isFizzyBuzzy('', BUZZ_ON)).toBe(false);
    expect(isFizzyBuzzy([], BUZZ_ON)).toBe(false);
    expect(isFizzyBuzzy({}, BUZZ_ON)).toBe(false);
  });

  it('returns false if `divisor` is not an finite number', () => {
    expect(isFizzyBuzzy(FIZZ_ON, `${FIZZ_ON}`)).toBe(false);
    expect(isFizzyBuzzy(FIZZ_ON, [FIZZ_ON])).toBe(false);
    expect(isFizzyBuzzy(FIZZ_ON, { FIZZ_ON })).toBe(false);
    expect(isFizzyBuzzy(FIZZ_ON, '', FIZZ_ON)).toBe(false);
    expect(isFizzyBuzzy(FIZZ_ON, [], FIZZ_ON)).toBe(false);
    expect(isFizzyBuzzy(FIZZ_ON, {}, FIZZ_ON)).toBe(false);
  });
});

describe('fizzyBuzzy(n)', () => {
  it('returns "fizz" if `n` is divisible by `fizzOn`', () => {
    for (let i = 0; i <= FIZZ_ON * 100; i += FIZZ_ON) {
      if (i % BUZZ_ON !== 0) {
        expect(fizzyBuzzy(i, FIZZ_ON, BUZZ_ON)).toBe(FIZZ);
        expect(fizzyBuzzy(-i, FIZZ_ON, BUZZ_ON)).toBe(FIZZ);
      }
    }
  });

  it('returns "buzz" if `n` is divisible by `buzzOn`', () => {
    for (let i = 0; i <= BUZZ_ON * 100; i += BUZZ_ON) {
      if (i % FIZZ_ON !== 0) {
        expect(fizzyBuzzy(i, FIZZ_ON, BUZZ_ON)).toBe(BUZZ);
        expect(fizzyBuzzy(-i, FIZZ_ON, BUZZ_ON)).toBe(BUZZ);
      }
    }
  });

  it('returns "fizzbuzz" if `n` is divisible by `fizzOn` and `buzzOn`', () => {
    for (let i = 0; i <= BUZZ_ON * FIZZ_ON * 100; i += BUZZ_ON * FIZZ_ON) {
      expect(fizzyBuzzy(i)).toBe(FIZZBUZZ, FIZZ_ON, BUZZ_ON);
      expect(fizzyBuzzy(-i)).toBe(FIZZBUZZ, FIZZ_ON, BUZZ_ON);
    }
  });

  it('returns empty string if `n` not an finite number', () => {
    expect(fizzyBuzzy(`${FIZZ_ON * BUZZ_ON}`, FIZZ_ON, BUZZ_ON)).toBe('');
    expect(fizzyBuzzy([FIZZ_ON, BUZZ_ON], FIZZ_ON, BUZZ_ON)).toBe('');
    expect(fizzyBuzzy({ FIZZ_ON: BUZZ_ON }, FIZZ_ON, BUZZ_ON)).toBe('');
    expect(fizzyBuzzy('', FIZZ_ON, BUZZ_ON)).toBe('');
    expect(fizzyBuzzy([], FIZZ_ON, BUZZ_ON)).toBe('');
    expect(fizzyBuzzy({}, FIZZ_ON, BUZZ_ON)).toBe('');
  });
});

describe('fizzBuzz(count, fizzOn, buzzOn)', () => {
  it('returns the correct data for `count` of 100', () => {
    const fizzBuzzResult = fizzBuzz(100, 3, 5);
    expect(fizzBuzzResult.count).toBe(100);
    expect(fizzBuzzResult.fizz).toBe(27);
    expect(fizzBuzzResult.buzz).toBe(14);
    expect(fizzBuzzResult.fizzBuzz).toBe(6);
  });

  it('returns the correct data for `count` of -100', () => {
    const fizzBuzzResult = fizzBuzz(-100, 3, 5);
    expect(fizzBuzzResult.count).toBe(-100);
    expect(fizzBuzzResult.fizz).toBe(0);
    expect(fizzBuzzResult.buzz).toBe(0);
    expect(fizzBuzzResult.fizzBuzz).toBe(0);
  });

  it('returns the correct data for non number `count`', () => {
    const fizzBuzzResult = fizzBuzz('100', 3, 5);
    expect(fizzBuzzResult.count).toBe('100');
    expect(fizzBuzzResult.fizz).toBe(0);
    expect(fizzBuzzResult.buzz).toBe(0);
    expect(fizzBuzzResult.fizzBuzz).toBe(0);
  });
});
