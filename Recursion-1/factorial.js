/* Given n of 1 or more, return the factorial of n, which is 
 * n * (n-1) * (n-2) ... 1. Compute the result recursively (without loops).
 */

console.log(factorial(1)) // 1
console.log(factorial(2)) // 2
console.log(factorial(3)) // 6

 function factorial(n) {
	if (n === 0) {
		return 1;
	}
	return n * factorial(n - 1);
}