const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = [];
  let integer = n.toString().split('');
  for(let i = 0; i < integer.length; i++) {
      integer.splice(i, 1);
      arr.push(integer.join(''));
      integer = n.toString().split('');
  }
  arr.sort();
  return +arr[arr.length -1];
}

module.exports = {
  deleteDigit
};
