/* Given 2 arrays that are the same length containing strings, compare the 
 * 1st string in one array to the 1st string in the other array, the 2nd to 
 * the 2nd and so on. Count the number of times that the 2 strings are 
 * non-empty and start with the same char. The strings may be any length, 
 * including 0.
 */
 
console.log(matchUp(["aa", "bb", "cc"], ["aaa", "xx", "bb"])) // 1
console.log(matchUp(["aa", "bb", "cc"], ["aaa", "b", "bb"])) // 2
console.log(matchUp(["aa", "bb", "cc"], ["", "", "ccc"])) // 1

function matchUp(a, b) {
	var count = 0;
	
	for (var i = 0; i < a.length; i++) {
			if (a[i].length > 0 && b[i].length > 0 && a[i].charAt(0) == b[i].charAt(0)) {
				count++;
			}
		}
	return count;
}