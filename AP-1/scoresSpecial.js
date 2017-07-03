/* Given two arrays, A and B, of non-negative int scores. A "special" score 
 * is one which is a multiple of 10, such as 40 or 90. Return the sum of 
 * largest special score in A and the largest special score in B. To practice 
 * decomposition, write a separate helper method which finds the largest 
 * special score in an array.
 */
 
console.log(scoresSpecial([12, 10, 4], [2, 20, 30])) // 40
console.log(scoresSpecial([20, 10, 4], [2, 20, 10])) // 40
console.log(scoresSpecial([12, 11, 4], [2, 20, 31])) // 20

function scoresSpecial(a, b) {
	  return largestSpecial(a) + largestSpecial(b);
}

function largestSpecial(a) {
	var largest = 0;
	
	for (var i = 0; i < a.length; i++) {
		if (a[i] % 10 == 0 && a[i] > largest) {
			largest = a[i];
		}
	}
	return largest;
}