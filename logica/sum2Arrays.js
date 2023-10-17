(() => {

    // Exercise 1:

    // Write a JavaScript function that takes an array of numbers and returns the sum of all the numbers in the array. The function should use a nested for loop to iterate over the array.

    /**
  * Calculates the sum of all numbers in a 2D array.
  * 
  * @param {number[][]} array - The 2D array of numbers.
  * @returns {number} - The sum of all numbers in the array.
  */
    function sumArray(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                sum += array[i][j];
            }
        }
        return sum;
    }

    const myArray = [[1, 2, 3], [4, 5, 6]];
    const myArray2 = [[1, 1, 1], [2, 2, 2]];
    const sum = sumArray(myArray);

    console.log(sum);




})