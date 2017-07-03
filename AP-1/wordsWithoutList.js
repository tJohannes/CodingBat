/* Given an array of strings, return a new List (e.g. an ArrayList) where all 
 * the strings of the given length are omitted. See wordsWithout() below 
 * which is more difficult because it uses arrays.
 */
 
console.log(wordsWithoutList(["a", "bb", "b", "ccc"], 1)) // ["bb", "ccc"]
console.log(wordsWithoutList(["a", "bb", "b", "ccc"], 3)) // ["a", "bb", "b"]
console.log(wordsWithoutList(["a", "bb", "b", "ccc"], 4)) // ["a", "bb", "b", "ccc"]

function wordsWithoutList(str, len) {
	var result = [];
	
	for (var i = 0; i < str.length; i++) {
		if (str[i].length !== len) {
			result.push(str[i]);
		}
	}
	return result;
}