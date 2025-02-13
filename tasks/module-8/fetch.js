/**
 * 1. You need to make a GET request (via async/await) to the resource: https://jsonplaceholder.typicode.com/posts
 * using fetch method inside the sendRequest function
 * DOCS:
 * 		node-fetch (JSON example): https://github.com/node-fetch/node-fetch#json
 * 		async/await: https://javascript.info/async-await
 * 		async/await: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * 2. Save the payload of the response to "./response.json" (to the current directory!) file with only items which id less than 20.
 * Use the promisified version of FS module.
 * DOCS:
 * 		fs.writeFile: https://nodejs.org/docs/latest-v16.x/api/fs.html#fspromiseswritefilefile-data-options
 *
 * 3. Check yourself by running "npm run test:nodejs"
 */
const fetch = require('node-fetch');
const fs = require('fs/promises');

/**
 * Run fetch method inside the function
 * Use the fs.writeFile method inside the function
 */
const sendRequest = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    const idLessThan20 = data.filter(item => item.id < 20);
    //console.log(idLessThan20)
    const jsonData = JSON.stringify(idLessThan20, null, 2);
    //console.log(jsonData)
    await fs.writeFile('C:/JSMentoring/js-mentoring-program/tasks/module-8/response.json', jsonData);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  sendRequest,
};
