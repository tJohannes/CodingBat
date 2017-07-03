/* Given an array of scores, return true if there are scores of 100 next to 
 * each other in the array. The array length will be at least 2.
 */
 
console.log(scores100([1, 100, 100])) // true
console.log(scores100([1, 100, 99, 100])) // false
console.log(scores100([100, 1, 100, 100])) // true

function scores100(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === 100 && arr[i + 1] === 100) {
			return true;
		}
	}
	return false;
}     