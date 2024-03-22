(() => {

    /**
    * Reverses the digits of a given integer.
    *
    * @param {number} number - The integer to be reversed.
    * @return {number} - The reversed integer.
    */

    const reversalInteger = (number: number): number => {
        return Number(number.toString().split('').reverse().join(''))
    }

    console.log(reversalInteger(123))

})()