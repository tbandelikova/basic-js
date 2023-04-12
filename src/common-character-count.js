const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if(!s1 || !s2) return 0;
  let str = s2;
  s1.split('').map(el => {
    str = str.replace(el, '|');
  });
  return str.split('').filter(el => el == '|').length;
  }

module.exports = {
  getCommonCharacterCount
};
