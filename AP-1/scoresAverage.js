/* Given an array of scores, compute the int average of the first half and the 
 * second half, and return whichever is larger. We'll say that the second half 
 * begins at index length/2. The array length will be at least 2. To practice 
 * decomposition, write a separate helper method <br>int average(int[] scores, 
 * int start, int end) { which computes the average of the elements between 
 * indexes start..end. Call your helper method twice to implement 
 * scoresAverage().
 */

console.log(scoresAverage([2, 2, 4, 4])) // 4
console.log(scoresAverage([4, 4, 4, 2, 2, 2])) // 4
console.log(scoresAverage([3, 4, 5, 1, 2, 3])) // 4

function scoresAverage(arr) {
	var first = average(arr, 0, arr.length / 2);
	var second = average(arr, arr.length / 2, arr.length);
  return Math.max(first, second);
}

function average(num, start, end) {
	var sum = 0;

  for (var  i = start; i < end; i++) {
  	sum += num[i];
  }
  return sum / (end - start);
}