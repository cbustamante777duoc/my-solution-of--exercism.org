(() => {


        /**
        * Get the larger number between two given numbers.
        *
        * @param {number} num1 - The first number.
        * @param {number} num2 - The second number.
        * @throws {Error} If either of the parameters is not a number.
        * @return {number} The larger number between `num1` and `num2`.
        */
    const getLargerNumber = (num1: number, num2: number) => {
        if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
            throw new Error('they are not numbers')
        }
        
        return num1 > num2 ? num1 : num2
    }
    
    console.log(getLargerNumber(3, 2)) //3
    // console.log(getLargerNumber(1, 'hola')) // they are not numbers


    })()