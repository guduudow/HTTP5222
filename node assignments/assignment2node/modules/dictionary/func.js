const axios = require('axios');

function handleSearch(event) {
  event.preventDefault(); // Prevent form submission
  const searchTerm = document.getElementById('word').value.trim(); // Get the search term from the input field
  console.log(searchTerm);
  // Call getWord function with the search term
  getWord(searchTerm);
}


async function getWord(word) {
  const apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  const response = await axios.get(apiURL);
  let wordData = response.data[0];
  //let name = wordData.word;
  let origin = wordData.origin;
  let meanings = wordData.meanings;
  //let definitions = meanings[0].definitions;
  //console.log(name);
  console.log(origin);
  console.log(meanings);
  //console.log(definitions);
}

module.exports = {
  handleSearch,
  getWord
};