/*
Given an array of strings, return a new array without the strings that are equal to the target string. One approach is to count the occurrences of the target string, make a new array of the correct length, and then copy over the correct strings.
*/

console.log(wordsWithout(["a", "b", "c", "a"], "a")) // ["b", "c"]
console.log(wordsWithout(["a", "b", "c", "a"], "b")) // ["a", "c", "a"]
console.log(wordsWithout(["a", "b", "c", "a"], "c")) // ["a", "b", "a"]

function wordsWithout(words, len) {
	var result = [];
	
	for (var i = 0; i < words.length; i++) {
		if (words[i] !== len) {
			result.push(words[i]);
		}
	}
	return result;
}