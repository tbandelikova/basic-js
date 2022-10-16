const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if(arr instanceof Array) {
    let transformedArr = arr.slice();
    let control = transformedArr.filter(i => typeof i == 'string');
    let controlIdx = [];
    control.forEach(item => controlIdx.push(transformedArr.indexOf(item)));
    if(controlIdx[1] - controlIdx[0] == 2 && control[0].includes('--discard-next')&&control[1].includes('prev')) {
      controlArr(transformedArr, control[0], controlIdx[0]);
      transformedArr.splice(controlIdx[0], 1);
    } else {
        for(let i = 0; i < control.length; i++) {
            controlArr(transformedArr, control[i], controlIdx[i]);
        }
    }

    function controlArr(a, b, c) {
        switch(b) {
            case '--discard-next':
                a[c+ 1] ? a.splice(c, 2) : a.splice(c, 1);
                break;
            case '--discard-prev':
                a[c - 1] ? a.splice(c - 1, 2) : a.splice(c, 1);
                break;
            case '--double-next':
                a[c + 1] ? a.splice(c, 1 , a[c + 1]) : a.splice(c, 1);
                break;
            case '--double-prev':
                a[c - 1] ? a.splice(c, 1 , a[c - 1]) : a.splice(c, 1);
                break;
        }
        return a;
    }
    return transformedArr;
  } else {
      throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
}

module.exports = {
  transform
};
