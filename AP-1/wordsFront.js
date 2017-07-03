/* Given an array of strings, return a new array containing the first N 
 * strings. N will be in the range 1..length.
 */
 
console.log(wordsFront(["a", "b", "c", "d"], 1)) // ["a"]
console.log(wordsFront(["a", "b", "c", "d"], 2)) // ["a", "b"]
console.log(wordsFront(["a", "b", "c", "d"], 3)) // ["a", "b", "c"]

function wordsFront(str, N) {
	var arr = str.slice(0, N);
	
	return arr;
}