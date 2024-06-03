/**
 * As a representation of Chars array please use our sample: ./data/characters.json
 * return an array of characters names
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {Array} - char names
 */

function getCharactersNames(chars) {
  const names = chars.map(element => element.name);
  return names;
}

/**
 * print (console.log) names of all characters
 * @param {Array} chars
 */
function printCharacterNames(chars) {
  const names = getCharactersNames(chars);
  names.forEach(charName => {
    console.log(charName);
  });
}

/**
 * return an array of non-human (species !== 'Human') characters
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {Array} - non human characters
 */
function getNonHumanCharacters(chars) {
  const nonHumanSpecies = chars.filter(char => char.species !== 'Human');
  return nonHumanSpecies;
}

/**
 * return info about character named 'Jerry Smith'
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {Object} - Jerry object
 */
function getJerryInfo(chars) {
  const nameJerry = chars.find(char => char.name === 'Jerry Smith');
  return nameJerry;
}

/**
 * check if all characters are human (species attribute). return true if all, false if not
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {boolean}
 */
function isAllHuman(chars) {
  const result = chars.every(char => char.species === 'Human');
  return result;
}

/**
 * check if there are any 'type == Fish-Person' characters. return true if any, false if not
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {boolean}
 */
function isAnyFishPerson(chars) {
  const result = chars.some(char => char.type == 'Fish-Person');
  return result;
}

/**
 * write a method to find an index of minimal item from an array;
 * @param {Array} arr
 * @return {number} - minimum element index
 * @example
 * console.log(minItem([2,5,6,3,1,8])) // 4
 */
function minItem(arr) {
  return arr.reduce((minimumIndex, currentValue, currentIndex) => {
    if (currentValue < arr[minimumIndex]) return currentIndex;
    else {
      return minimumIndex;
    }
  }, 0);
}

module.exports = {
  getCharactersNames,
  printCharacterNames,
  getNonHumanCharacters,
  getJerryInfo,
  isAllHuman,
  isAnyFishPerson,
  minItem,
};
