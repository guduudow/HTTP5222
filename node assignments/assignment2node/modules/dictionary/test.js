const { getWord } = require('./dictionary');

async function testGetWord() {
  await getWord('hello');
}

testGetWord();
