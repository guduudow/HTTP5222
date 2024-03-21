const { Translate } = require('@google-cloud/translate').v2;

const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

const translate = new Translate({
  credentials: CREDENTIALS,
  projectId: CREDENTIALS.project_id
});


const detectLanguage = async (text) => {
  let response = await translate.detect(text);
  return response[0].language;
};

// detectLanguage('mise à jour')
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   })

const translateWord = async (text, targetLanguage) => {
  let [response] = await translate.translate(text, targetLanguage);
  console.log(response);
  return response;
};

// translateWord("mise à jour", 'en')
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   })


module.exports = {
  detectLanguage,
  translateWord
}