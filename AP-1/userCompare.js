/* We have data for two users, A and B, each with a String name and an int id. 
 * The goal is to order the users such as for sorting. Return -1 if A comes 
 * before B, 1 if A comes after B, and 0 if they are the same. Order first by 
 * the string names, and then by the id numbers if the names are the same.
 */
 
console.log(userCompare("bb", 1, "zz", 2)) // -1
console.log(userCompare("bb", 1, "aa", 2)) // 1
console.log(userCompare("bb", 1, "bb", 1)) // 0

function userCompare(aName, aId, bName, bId) {
	if (aName.localeCompare(bName) < 0) {
		return -1;
	} else if (aName.localeCompare(bName) > 0) {
		return 1;
	} else if (aId < bId) {
    return -1;
  } else if(aId > bId) {
    return 1;
  }
    return 0;	
}
