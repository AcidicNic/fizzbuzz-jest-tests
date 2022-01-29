const FIZZ = 'fizz';
const BUZZ = 'buzz';
const FIZZBUZZ = 'fizzbuzz';
const DEFAULT_FIZZ_ON = 3;
const DEFAULT_BUZZ_ON = 5;

/**
 * Returns true when `n` is a number that is divisible by `divisor`
 * @param {Number} n
 * @param {Number} divisor
 * @returns {Boolean} n is divisible by divisor
 * */
function isFizzyBuzzy(n, divisor) {
  if (!Number.isFinite(n) || !Number.isFinite(divisor)) return false;
  return n % divisor === 0;
}

/**
 * Returns FIZZ, BUZZ, or FIZZBUZZ when a number is divisible by 3, 5, or both
 * @param {Number} n
 * @param {Number} fizzOn
 * @param {Number} buzzOn
 * @returns {String} '', 'fizz', 'buzz', or 'fizzbuzz'
 */
function fizzyBuzzy(n, fizzOn = DEFAULT_FIZZ_ON, buzzOn = DEFAULT_BUZZ_ON) {
  let result = '';
  if (isFizzyBuzzy(n, fizzOn)) result += FIZZ;
  if (isFizzyBuzzy(n, buzzOn)) result += BUZZ;
  return result;
}

/**
 * Generates a results object describing a sequence of fizz buzz for count.
 * @param {Number} count
 * @returns {Object} with properties count, fizz, buzz, and fizzbuzz
 */
function fizzBuzz(count, fizzOn = DEFAULT_FIZZ_ON, buzzOn = DEFAULT_BUZZ_ON) {
  const result = {
    count: count, fizz: 0, buzz: 0, fizzBuzz: 0,
  };
  if (!Number.isFinite(count) || !Number.isFinite(fizzOn) || !Number.isFinite(buzzOn)) {
    return result;
  }
  for (let i = 1; i <= count; i += 1) {
    const fizzBuzzStr = fizzyBuzzy(i, fizzOn, buzzOn);
    switch (fizzBuzzStr) {
      case FIZZ:
        result.fizz += 1;
        break;
      case BUZZ:
        result.buzz += 1;
        break;
      case FIZZBUZZ:
        result.fizzBuzz += 1;
        break;
      default:
    }
  }
  return result;
}

module.exports.isFizzyBuzzy = isFizzyBuzzy
module.exports.fizzyBuzzy = fizzyBuzzy
module.exports.fizzBuzz = fizzBuzz
module.exports.FIZZ = FIZZ
module.exports.BUZZ = BUZZ
module.exports.FIZZBUZZ = FIZZBUZZ
module.exports.DEFAULT_FIZZ_ON = DEFAULT_FIZZ_ON
module.exports.DEFAULT_BUZZ_ON = DEFAULT_BUZZ_ON
