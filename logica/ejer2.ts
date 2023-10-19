
/**
 * Calculates the total number of cups based on the given quantity.
 *
 * @param {number} n - The quantity of cups.
 * @return {number} The total number of cups including bonus cups.
 */
function totalCups(n) {
	return  n + Math.floor(n / 6)
}
console.log(totalCups(7));
console.log(totalCups(14));