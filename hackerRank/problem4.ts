(() => {


    //reference
    //https://www.hackerrank.com/challenges/strange-advertising/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign


    /**
 * Calculate the cumulative number of people who liked the advertisement over a period of 'n' days.
 *
 * @param {number} n - the number of days
 * @return {number} the total number of people who liked the advertisement
 */
    function viralAdvertising(n: number): number {
        let shared: number = 5;
        let liked: number = 0;
        let cumulative: number = 0;

        for (let i = 0; i < n; i++) {
            liked = Math.floor(shared / 2)
            //3 for each shared friend (read problem)
            shared = liked * 3
            cumulative += liked;
        }

        return cumulative

    }


    viralAdvertising(3)

    console.log(viralAdvertising(3))
    console.log(viralAdvertising(5))




})()