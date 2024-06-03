/**
 * 1. Write a method to reverse a string;
 * 2. The method should throw an error 'This is not a string!' if trying to pass a number
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 * @param {string} str
 * @return {string} reversed string
 * @example
 * console.log(reverseString('hello')) // 'olleh'
 * console.log(reverseString(123)) // 'This is not a string!'
 */
function reverseString(str) {
  if (typeof str !== 'string') {
    throw new Error('This is not a string!');
  }
  let reverseString = str.split('').reverse().join('');
  return reverseString;
}

/**
 * Calculate a century by given year if a number is passed (should return 0 if not a number is passed)
 * @param {number} year
 * @return {num} century
 * @example
 * console.log(centuryFromYear(1705)) // 18
 * console.log(centuryFromYear(1900)) // 19
 * console.log(centuryFromYear(1601)) // 17
 * hint: please choose and appropriate method from the Math object
 */
function centuryFromYear(year) {
  if (typeof year !== 'number') {
    return 0;
  }
  const century = Math.ceil(year / 100);
  return century;
}

/**
 * Calculate how many times the 'char' appears in the provided 'string'
 * @param {string} str
 * @param {string} char
 * @return {num} number of occurences
 * @example
 * console.log(strCount('Hello', 'o')) // 1
 * console.log(strCount('Hello', 'l')) // 2
 * console.log(strCount('', 'z')) // 0
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
 */
function strCount(str, char) {
  const regExp = new RegExp(char, 'g');
  const count = str.match(regExp);
  return count ? count.length : 0;
}

/**
 * Write a method to reduce the length of the string or truncate if it is longer
 * than the given maximum length and add "..." to the end.
 * Keep it as is if it is not that long.
 * @param {string} str - the initial string
 * @param {num} num - by what amount of chars it should be truncated
 * @return {string} truncated or the initial string
 * @example
 * console.log(truncateString('This is a long string', 6)) // 'This i...'
 * console.log(truncateString('This', 6)) // 'This'
 */
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + '...';
  }
  return str;
}

/**
 * replace 10 with 'ten' word
 * @param {string} text - input text
 * @return {string} - updated text
 * @example
 * console.log(replace10("231054")) // 23ten54
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 */
function replace10(text) {
  return text.replaceAll('10', 'ten');
}

/**
 * replace value in the square brackets with CONFIDENTIAL
 * @param text - input text
 * @return {string} - updated string
 * @example
 * console.log(replaceConfidential("lorem [ipsum] si dolor")) // lorem [CONFIDENTIAL] si dolor
 */
function replaceConfidential(text) {
  return text.replace(/\[.*?\]/g, '[CONFIDENTIAL]');
}

/**
 * 1. Create a function loginUser(username, password) which takes two parameters: username and password.
 * 2. Inside the function, check the following:
 * 3. If the username is empty, throw an Error with the message "Username cannot be empty".
 * 4. If the password is empty, throw an Error with the message "Password cannot be empty".
 * 5. If the password is less than 6 characters long, throw an Error with the message "Password must be at least 6 characters".
 * 6. If all checks pass, return "Login successful!".
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
 * @param {string} username
 * @param {string} password
 * @return {string} "Login successful!"
 */

function loginUser(username, password) {
  try {
    if (!username) {
      throw new Error('Username cannot be empty');
    }
    if (!password) {
      throw new Error('Password cannot be empty');
    }
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }
    return 'Login successful!';
  } catch (error) {
    throw error;
  }
}
module.exports = {
  reverseString,
  centuryFromYear,
  strCount,
  truncateString,
  replace10,
  replaceConfidential,
  loginUser,
};
