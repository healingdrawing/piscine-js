const DNAtoRNA = { "G": "C", "C": "G", "T": "A", "A": "U", }
const RNAtoDNA = { "C": "G", "G": "C", "A": "T", "U": "A", }
function DNA(RNA) {
  return !RNA ? "" : [...RNA].map(x => RNAtoDNA[x]).join("")
}
function RNA(DNA) {
  return !DNA ? "" : [...DNA].map(x => DNAtoRNA[x]).join("")
}

console.log(RNA(''))
console.log(RNA('TAGC'))
// Create two functions which accept a string, and return a string:

// RNA: that converts a DNA strand into its compliment RNA strand.
// DNA: that converts an RNA strand into its compliment DNA strand.
// Compliments:

// DNA | RNA
//  G  -  C
//  C  -  G
//  T  -  A
//  A  -  U
// Each strand must be represented as upper case string, without spaces, eg: "ATCG" is a valid DNA strand.

