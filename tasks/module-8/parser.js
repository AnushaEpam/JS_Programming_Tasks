/**
 * 1. You need to write a parser, which takes the "./utils/test.json" file
 * and will create a new JSON file with the name "./parsed.json" (in current directory!) with the structure:
 * [
 *  {
 *    "docId": "http://doc.epam.com/077b1523-56f0-492a-b954-1269e3acc191"
 *  },
 *  {
 *    "docId": "http://doc.epam.com/077d3a4c-a2fe-4ab9-9046-89c0ce5c5b38"
 *  }
 *  .....
 * ]
 * where 077b1523-56f0-492a-b954-1269e3acc191 - is the value of the name attribute from the "./test.json" file
 * Please NOTE, that you should omit the ".html" extension
 *
 * Use the promise version of FS module.
 * DOCS:
 * 		fs.readFile: https://nodejs.org/docs/latest-v16.x/api/fs.html#fspromisesreadfilepath-options
 * 		fs.writeFile: https://nodejs.org/docs/latest-v16.x/api/fs.html#fspromiseswritefilefile-data-options
 *
 * 2. Check yourself by running "npm run test:nodejs"
 *
 */
const fs = require('fs/promises');
const path = require('path');

const jsonParser = async () => {
  try {
    const inputFilePath = path.join(__dirname, 'utils', 'test.json');
    const outputFilePath = path.join(__dirname, 'parsed.json');
    const data = await fs.readFile(inputFilePath, 'utf8');
    const jsonData = JSON.parse(data);
    let parsedData = [];
    jsonData.list.entries.map(item => {
      const newDocId = item.entry.name.replaceAll('.html', '');
      parsedData.push({
        docId: `http://doc.epam.com/${newDocId}`,
      });
    });

    await fs.writeFile(outputFilePath, JSON.stringify(parsedData, null, 2));
  } catch (error) {
    console.error('Error parsing JSON', error);
  }
};

module.exports = {
  jsonParser,
};
