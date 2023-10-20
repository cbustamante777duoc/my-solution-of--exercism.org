
(() => {

    /**
 * Generate a string with numbers from 'numero' down to 0, in descending order by 2.
 *
 * @param {number} numero - The starting number.
 * @return {string} - The generated string.
 */

    function hastaCero(numero: number) {

        let resultado: string = "*****" + "\n"

        for (let i = numero; i >= 0; i -= 2) {
            resultado += " " + i + "\n"
        }

        return resultado


    }



    // ***** 
    //  20 
    //  18 
    //  16 
    //  14 
    //  12 
    //  10 
    //  8 
    //  6 
    //  4 
    //  2 
    //  0 


    /**
     * Generates a string with numbers from `numero` down to 0, decrementing by `desde` each time.
     *
     * @param {number} numero - The starting number.
     * @param {number} desde - The decrement amount.
     * @return {string} The generated string with the numbers.
     */
    function hastaCero2(numero: number, desde: number): string {

        let resultado: string = "*****" + "\n"

        for (let i = numero; i >= 0; i -= desde) {
            resultado += " " + i + "\n"
        }

        return resultado


    }


    console.log(hastaCero2(20, 4));

//***** 
// 20 
// 16 
// 12 
// 8 
// 4 
// 0 

/**
 * Generates a string with numbers from `start` down to 0, decrementing by `step` each time.
 *
 * @param {number} start - The starting number.
 * @param {number} step - The decrement amount.
 * @return {string} The generated string with the numbers.
 */
function generateString(start: number, step: number): string {
    let result: string = "*****" + "\n";

    for (let i = start; i >= 0; i -= step) {
        result += " " + i + "\n";
    }

    return result;
}

})()