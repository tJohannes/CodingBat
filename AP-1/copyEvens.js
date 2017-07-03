/* Given an array of positive ints, return a new array of length "count" 
 * containing the first even numbers from the original array. The original 
 * array will contain at least "count" even numbers.
 */
 
console.log(copyEvens([3, 2, 4, 5, 8], 2)) // [2, 4]
console.log(copyEvens([3, 2, 4, 5, 8], 3)) // [2, 4, 8]
console.log(copyEvens([6, 1, 2, 4, 5, 8], 3)) // [6, 2, 4]

function copyEvens(arr, count) {
	var even = 	arr.filter(function(num) {
		return (num % 2 === 0)
	})
	
	return even.slice(0 , count);
}

// another approach

function copyEvens(nums, count) {
	var arr = []
	var index = 0
	
	for (var i = 0; index < count; i++) {
        if (nums[i] % 2 === 0) {
            arr[index] = nums[i];
            index++;
        }
    }
    return arr;
}