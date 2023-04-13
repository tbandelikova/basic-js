const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;
    let a = String(str);
    let b = separator ? separator : '+';
    let c = getAdditions(addition, additionRepeatTimes, additionSeparator);
    let result = '';
    if (repeatTimes && repeatTimes > 1) {
        for (let i = 0; i < repeatTimes - 1; i++) {
            result += (a + c + b);
        }
    }
    result += (a + c);
    return result;
}

function getAdditions(add, rep, sep) {
    let a = String(add);
    let b = sep ? sep : '|';
    let result = '';
    if (a == 'undefined') return '';
    if (rep && rep > 1) {
        for (let i = 0; i < rep - 1; i++) {
            result += (a + b);
        }
    }
    result += a;
    return result;
}

module.exports = {
    repeater
};
