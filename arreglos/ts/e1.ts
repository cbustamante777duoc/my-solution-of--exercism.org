(() => {

    /**
     * Check if the given number is present in the array.
     *
     * @param {number[]} array - the array to search
     * @param {number} num - the number to look for
     * @return {boolean} true if the number is present, false otherwise
     */


    const countArray = (array: number[], num: number) => {
        if (array.includes(num)) {
            return true;
        } else {
            return false;
        }
    }

    console.log(countArray([1, 2, 3, 3, 3, 4, 4, 5], 2)) //true
    console.log(countArray([1, 2, 3, 3, 3, 4, 4, 5], 6)) //false
})()