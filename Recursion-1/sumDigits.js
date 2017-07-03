/* Given a non-negative int n, return the sum of its digits recursively 
 * (no loops).Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6),
 * while divide (/) by 10 removes the rightmost digit (126 / 10 is 12)
 */
 
 
console.log(sumDigits(126)) //  9
console.log(sumDigits(49)) // 13
console.log(sumDigits(12)) // 3


function sumDigits(n) {
	if (n === 0) {
		return 0;
	}
	return Math.floor(n % 10) + sumDigits(n / 10)
}