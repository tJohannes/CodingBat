/* Given an array of scores, return true if each score is equal or greater 
 * than the one before. The array will be length 2 or more.
 */

console.log(scoresIncreasing([1, 3, 4])) // true
console.log(scoresIncreasing([1, 3, 2])) // false
console.log(scoresIncreasing([1, 1, 4])) // true

function scoresIncreasing(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < arr[i - 1]) {
			return false;
		}
	}
	return true;
}