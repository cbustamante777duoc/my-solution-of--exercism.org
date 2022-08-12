(() => {



    /**
     * Calcular radio numeros positivos, negativos y neutros
     * Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with places after the decimal.
     * @param arr data array
     * @returns positive number, negative and zeronums number con 6 decimals
     */
    function plusMinus(arr: number[]): void {

        let positive = arr.filter(number => number > 0).length / arr.length;
        let negative = arr.filter(number => number < 0).length / arr.length;;
        let zeronums = arr.filter(number => number == 0).length / arr.length;;
        return console.log(positive.toFixed(6) + '\n' + negative.toFixed(6) + '\n' + zeronums.toFixed(6))

    }

})();