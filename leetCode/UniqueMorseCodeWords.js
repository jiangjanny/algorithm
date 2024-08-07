
/*
International Morse Code defines a standard encoding
where each letter is mapped to a series of dots and dashes,
as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter.
For example, "cba" can be written as "-.-..--...", (which is the concatenation "-.-." + "-..." + ".-").
We'll call such a concatenation, the transformation of a word.

Return the number of different transformations among all words we have.

Example:
Input: words = ["gin", "zen", "gig", "msg"]
Output: 2
Explanation:
The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."

There are 2 different transformations, "--...-." and "--...--.".
Note:

The length of words will be at most 100.
Each words[i] will have length in range [1, 12].
words[i] will only consist of lowercase letters.
*/

/**
 * @param {string[]} words
 * @return {number}
 */

// let morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
let words = ["gin", "zen", "gig", "msg"]
// var uniqueMorseRepresentations = function (words) {
//     let representations = new Set()
//     for (let word of words) {
//         representations.add(converToMorse(word))
//     }
//     console.log('representations', representations);
//     return representations.size
// };

// function converToMorse(word) {
//     let res = []
//     for (let char of word) {

//         res.push(convertChar(char))
//     }
//     console.log('res', res.join(''));
//     return res.join('')
// }

// function convertChar(char) {
//     let code = char.charCodeAt() - 'a'.charCodeAt()
//     return morse[code]
// }

// uniqueMorseRepresentations(words)
var uniqueMorseRepresentations = function (words) {
    let morseCodes = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
    let alphabetToMorse = {};

    for (let i = 0; i < 26; i++) {
        alphabetToMorse[String.fromCharCode(97 + i)] = morseCodes[i];
    };

    // console.log('alphabetToMorse', alphabetToMorse);
    let set = new Set();
    for (let i = 0; i < words.length; i++) {
        let currElem = words[i];
        // console.log('i', i, words[i]);
        let s = ''
        for (let j = 0; j < currElem.length; j++) {
            s += alphabetToMorse[currElem[j]];
        }
        set.add(s)
    }
    return set.size;

};

uniqueMorseRepresentations(words)