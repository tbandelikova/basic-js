const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  link: [],
  getLength() {
    return this.link.length;
  },
  addLink(value) {
    let a = String(value) == 'undefined' ? '' : String(value);
    this.link.push(`( ${a} )`);
    return this;
  },
  removeLink(position) {
    let max = this.link.length;
    if(!position || (typeof position !== 'number') || position > max || position == 0) throw Error("You can't remove incorrect link!");
    this.link.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.link.reverse();
    return this;
  },
  finishChain() {
    return this.link.join('~~');
  }
};

module.exports = {
  chainMaker
};
