const axios = require('axios');


async function getWord(word) {
  const apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  const response = await axios.get(apiURL);
  let wordData = response.data[0];
  //let name = wordData.word;
  let origin = wordData.origin;
  let meanings = wordData.meanings;
  //let definitions = meanings[0].definitions;
  //console.log(name);
  console.log(wordData);
  //console.log(meanings);
  //console.log(definitions);
}

module.exports = {
  getWord
};