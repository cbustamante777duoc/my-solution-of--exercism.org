(() => {

    /**
     * Generates a string representation of the fizzbuzz sequence up to the given number.
     *
     * @param {number} num - The number up to which the fizzbuzz sequence is generated.
     * @return {string} - The string representation of the fizzbuzz sequence.
     */

    const fizzBuzz = (num: number): string => {
        let result = '';
        for (let i = 0; i < num; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                result = 'fizzbuzz';
            } else if (i % 3 === 0) {
                result = 'fizz';
            } else if (i % 5 === 0) {
                result = 'buzz';
            } else {
                result = i.toString();
            }
        }
        return result;
    }

    /**
    * Generates a string of numbers from 1 to num, where each number is replaced
    * by 'Fizz' if it's divisible by 3, 'Buzz' if it's divisible by 5, and 'FizzBuzz'
    * if it's divisible by both 3 and 5.
    *
    * @param {number} num - The upper limit of the range of numbers to generate.
    * @return {string} A string containing the FizzBuzz numbers from 1 to num.
    */

    const printNumbers = (num: number) => {

        let result = '';
        for (let i = 1; i < num; i++) {

            console.log(fizzBuzz(i));
            result += fizzBuzz(i) + '\n';
        }

        return result;


    }


    console.log(printNumbers(20));

    // fizzbuzz
    // 1
    // 2
    // fizz
    // 4
    // buzz
    // fizz
    // 7
    // 8
    // fizz
    // buzz
    // 11
    // fizz
    // 13
    // 14
    // fizzbuzz
    // 16
    // 17
    // fizz
})()