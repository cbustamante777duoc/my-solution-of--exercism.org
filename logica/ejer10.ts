


(() => {

    /**
     * Generate a sub-array of a given array by slicing it into smaller arrays of a specified length.
     *
     * @param {number[]} array - The original array to be sliced.
     * @param {number} slice - The length of the smaller arrays.
     * @return {number[][]} - A new array containing the sliced sub-arrays.
     */

    function subArray(array: number[], slice: number): number[][] {
        if (array.length === 0) {
            return [];
        }

        const newArray: number[][] = [];

        for (const item of array) {
            const lastArray: number[] | undefined = newArray[newArray.length - 1];
            if (!lastArray || lastArray.length === slice) {
                newArray.push([item]);
            } else {
                lastArray.push(item);
            }
        }

        return newArray;
    }
    console.log(subArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));

    /**
     * Generates a new array by slicing the input array into subarrays of a specified size.
     *
     * @param {Array} array - The input array to be sliced.
     * @param {number} slice - The size of each subarray.
     * @return {Array} An array of subarrays, each containing 'slice' number of elements from the input array.
     */
    function sliceArray(array, slice) {


        const subArrays = subArray(array, slice);
        return subArrays
    }

    console.log(sliceArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));


})()


