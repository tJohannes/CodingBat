/* Given an array of scores sorted in increasing order, return true if the 
 * array contains 3 adjacent scores that differ from each other by at most 2, 
 * such as with {3, 4, 5} or {3, 5, 5}.
 */

console.log(scoresClump([3, 4, 5])) // true
console.log(scoresClump([3, 4, 6])) // false
console.log(scoresClump([1, 3, 5, 5])) // true

function scoresClump(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i + 2] - arr[i] <= 2) {
			return true;
		}
	}
	return false;
}