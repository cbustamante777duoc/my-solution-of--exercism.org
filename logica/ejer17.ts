(() => {

    /**
    * Determines if a given number is divisible by a possible divisor.
    *
    * @param {number} num - The number to check for divisibility.
    * @param {number} possibleDivisor - The possible divisor.
    * @return {number | undefined} - The possible divisor if the number is divisible, otherwise undefined.
    */
    const divisorNumber = (num: number, possibleDivisor: number) => {

        if (num % possibleDivisor === 0) {
            return possibleDivisor;
        }
    
        return undefined;
    
    };
    
    /**
    * Returns a string containing all possible divisors of the given number.
    *
    * @param {number} num - The number to find divisors for.
    * @return {string} A string containing all possible divisors of the given number.
    */
    const printPossibleDivisors = (num: number): string => {
        let result = "";
        for (let i = 1; i < num; i++) {
          let divisor = divisorNumber(num, i);
          if (divisor) { 
            result += divisor + " ";
          }
        }
        return result.trim();
      }
    console.log(printPossibleDivisors(28)); //1 2 4 7 14
    console.log(printPossibleDivisors(12)); //1 2 3 4 6 12
})()