/* We have an array of heights, representing the altitude along a walking 
 * trail. Given start/end indexes into the array, return the number of "big" 
 * steps for a walk starting at the start index and ending at the end index. 
 * We'll say that step is big if it is 5 or more up or down. The start end end 
 * index will both be valid indexes into the array with start <= end.
 */

console.log(bigHeights([5, 3, 6, 7, 2], 2, 4)) // 1
console.log(bigHeights([5, 3, 6, 7, 2], 0, 1)) // 0
console.log(bigHeights([5, 3, 6, 7, 2], 0, 4)) // 1

function bigHeights(heights, start, end) {
	  var count = 0;
    
    for(var i = start; i < end; i++) {
    	if(Math.abs(heights[i] - heights[i+1]) >= 5) {
    		count++;
    	}
    }    	 
    return count;
}