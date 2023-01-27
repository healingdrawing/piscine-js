// regex hardcoded because flag g forcing to remember the last index of the match, before the next match

const filterShortStateName = (arr) => arr.filter((elem) => elem.length < 7);

const filterStartVowel = (arr) => {
  arr = arr.filter((elem) => /[a|e|i|o|u]/i.test(elem[0]));
  return arr
}

const filter5Vowels = (arr) =>
  arr.filter((elem) => elem.match(/[a|e|i|o|u]/gi).length > 4);

const chs = (str) => str.match(new RegExp(str[0], "gi")).length == str.length;
const filter1DistinctVowel = (arr) => arr.filter((elem) => chs(elem.match(/[a|e|i|o|u]/gi).join("")));

const multiFilter = (arrObj) => arrObj.filter((elem) =>
  elem["region"] !== "South" && elem["capital"].length > 7 &&
  /[a|e|i|o|u]/i.test(elem["tag"]) && !/[a|e|i|o|u]/i.test(elem["name"][0])
);

// ar = [
//   'Alabama',
//   'Alaska',
//   'Arizona',
//   'Arkansas',
//   'California',
//   'Colorado',
//   'Connecticut',
//   'Delaware',
//   'Florida',
//   'Georgia',
//   'Hawaii',
//   'Idaho',
//   'Illinois',
//   'Indiana',
//   'Iowa',
//   'Kansas',
//   'Kentucky',
//   'Louisiana',
//   'Maine',
//   'Maryland',
//   'Massachusetts',
//   'Michigan',
//   'Minnesota',
//   'Mississippi',
//   'Missouri',
//   'Montana',
//   'Nebraska',
//   'Nevada',
//   'New Hampshire',
//   'New Jersey',
//   'New Mexico',
//   'New York',
//   'North Carolina',
//   'North Dakota',
//   'Ohio',
//   'Oklahoma',
//   'Oregon',
//   'Pennsylvania',
//   'Rhode Island',
//   'South Carolina',
//   'South Dakota',
//   'Tennessee',
//   'Texas',
//   'Utah',
//   'Vermont',
//   'Virginia',
//   'Washington',
//   'West Virginia',
//   'Wisconsin',
//   'Wyoming',
// ]

// console.log("firstVowel", filterStartVowel(ar));
// console.log("distinctVowel", filter1DistinctVowel(ar));