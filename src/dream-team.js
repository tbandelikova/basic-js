const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let team = [];
  if(members instanceof Array) {
    for (let i = 0; i < members.length; i++) {
      if(typeof members[i] == 'string') {
        team.push(members[i].split('').find(letter => letter != ' ').toUpperCase());
      };
    };
  }
  if(team.length > 1) {
    team.sort();
  };
  return team.length == 0 ? false : team.join('');
}

module.exports = {
  createDreamTeam
};
