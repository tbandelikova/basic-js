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
  let result = '';
  let step = '';
  let {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = options;
  if(repeatTimes&&repeatTimes > 1) {
      for(let i = 0; i < repeatTimes - 1; i++) {
          step = String(str);
          if(addition || String(addition) == 'underfined') {
              if(additionRepeatTimes&&additionRepeatTimes > 1) {
                  for(let j = 0; j < additionRepeatTimes - 1; j++) {
                      step += (String(addition) + (additionSeparator ? additionSeparator : '|'));
                  }
              }
              step += String(addition);
          }
          result += (step + (separator ? separator : '+'));
      }
      result += step
  } else {
      step = String(str);
      if(addition || String(addition) == 'underfined') {
          if(additionRepeatTimes&&additionRepeatTimes > 1) {
              for(let j = 0; j < additionRepeatTimes - 1; j++) {
                  step += (String(addition) + (additionSeparator ? additionSeparator : '|'));
              }
          }
          step += String(addition);
      }
      result += step;
  }

  return result;
}

module.exports = {
  repeater
};
