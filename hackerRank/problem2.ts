(()=>{


    /*
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i = inicial day
 *  2. INTEGER j = final day
 *  3. INTEGER k = divisor
 */

    /**
 * Calculate the number of beautiful days within a range.
 *
 * @param {number} i - starting day of the range
 * @param {number} j - ending day of the range
 * @param {number} k - divisor for the difference between the day and its reverse
 * @return {number} the count of beautiful days within the range
 */
function beautifulDays(i: number, j: number, k: number): number {

    let beautifulDays = 0;

    for (let s = i; s <= j; s++) {

        //convert day to string and reverse
        let reverseDays = s.toString().split('').reverse().join('');
        
        //convert reverseDays to number
        let reverseDaysNumber = parseInt(reverseDays);

        if ((s - reverseDaysNumber) % k === 0) {
            beautifulDays++;
        }


    }

    return beautifulDays

}




})()