const pronouns = ["i", "you", "he", "she", "it", "we", "they"];

const pronoun = (str) => {
  const o = {};
  str.toLowerCase().split(/[\s.,]+/).forEach((word, index, array) => {
    if (!pronouns.includes(word)) return;
    if (!o[word]) {
      o[word] = {
        word: [],
        count: 0,
      };
    }
    o[word].count++;
    const nextWord = array[index + 1] && array[index + 1].toLowerCase();
    if (nextWord && !pronouns.includes(nextWord)) {
      o[word].word.push(nextWord);
    }
  });
  return o;
};