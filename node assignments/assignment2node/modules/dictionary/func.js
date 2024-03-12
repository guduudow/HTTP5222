async function getWord() {
  const apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  const response = await axios.get(apiURL);
  //extracting the need info to display from the api
}

module.exports = {
  getWord
};