/* Start with two arrays of strings, a and b, each in alphabetical order, 
 * possibly with duplicates. Return the count of the number of strings which 
 * appear in both arrays. The best "linear" solution makes a single pass over 
 * both arrays, taking advantage of the fact that they are in alphabetical 
 * order.
 */

console.log(commonTwo(["a", "c", "x"], ["b", "c", "d", "x"])) // 2
console.log(commonTwo(["a", "c", "x"], ["a", "b", "c", "x", "z"])) // 3
console.log(commonTwo(["a", "b", "c"], ["a", "b", "c"])) // 3

function commonTwo(a, b) {
	var count = 0;
  var aIndex = 0;
  var bIndex = 0;
        
  if (a[0] === (b[0])) {
  	count++;
    aIndex++;
    bIndex++;
  } else if (a[0].localeCompare(b[0]) < 0) {
  	aIndex++;
  } else {
  	bIndex++;
  }
                                      
  while (aIndex < a.length && bIndex < b.length) {
  	if (aIndex > 0 && a[aIndex-1] === (a[aIndex])) {
  		aIndex++;
  	} else if (a[aIndex] === (b[bIndex])) {
  		count++;
  		aIndex++;
  		bIndex++;
  	} else if (a[aIndex].localeCompare(b[bIndex]) < 0) {
  		aIndex++;
  	} else {
  		bIndex++;
  	}
  }
  return count;
}