/* Given an array of strings, return the count of the number of strings with 
 * the given length.
 */

console.log(wordsCount(["a", "bb", "b", "ccc"], 1)) // 2
console.log(wordsCount(["a", "bb", "b", "ccc"], 3)) // 1
console.log(wordsCount(["a", "bb", "b", "ccc"], 4)) // 0

function wordsCount(str, len) {
	var count = 0;
	
	for (var i = 0; i < str.length; i++) {
		if (str[i].length === len) {
			 count++;
		} 
	}
	return count;
}