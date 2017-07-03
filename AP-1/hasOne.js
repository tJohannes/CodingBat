/* 
*Given a positive int n, return true if it contains a 1 digit. Note: use % to get the 
*rightmost digit, and / to discard the rightmost digit.
*/

console.log(hasOne(10)) // true
console.log(hasOne(22)) // false
console.log(hasOne(220)) // false

function hasOne(n) {
	while (n != 0) {
		if (n % 10 === 1) {
			return true;
		}
		n /= 10;
	}
	return false;
}
