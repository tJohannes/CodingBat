/* Start with two arrays of strings, A and B, each with its elements in 
 * alphabetical order and without duplicates. Return a new array containing 
 * the first N elements from the two arrays. The result array should be in 
 * alphabetical order and without duplicates. A and B will both have a length 
 * which is N or more. The best "linear" solution makes a single pass over A 
 * and B, taking advantage of the fact that they are in alphabetical order, 
 * copying elements directly to the new array.
 */
 
console.log(mergeTwo(["a", "c", "z"], ["b", "f", "z"], 3)) // ["a", "b", "c"]
console.log(mergeTwo(["a", "c", "z"], ["c", "f", "z"], 3)) // ["a", "c", "f"]
console.log(mergeTwo(["f", "g", "z"], ["c", "f", "g"], 3)) // ["c", "f", "g"]

function mergeTwo(a, b, n) {
	var arr = [];
  var aIndex = 0;
  var bIndex = 0;
  
  for (var i = 0; i < n; i++) {
  	if(a[aIndex].localeCompare(b[bIndex]) < 0) {
  		arr[i] = a[aIndex];
  		aIndex++;
  	} else if (a[aIndex].localeCompare(b[bIndex]) > 0) {
  		arr[i] = b[bIndex];
      bIndex++;
    } else {
    	arr[i] = a[aIndex];
      aIndex++;
      bIndex++;
    }
  }
  return arr;
}