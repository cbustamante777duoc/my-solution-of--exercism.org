(() => {


    let texto: string = "hola";

    /**
     * This function counts the number of vowels in a given text.
     *
     * @param {string} text - The text to count the vowels in.
     * @return {number} The number of vowels in the text.
     */
    const contarCuantasVocales = (text: string) => {

        let contador = 0;
        let minusculas = text.toLowerCase().trim();

        for (let i = 0; i < minusculas.length; i++) {

            if (minusculas[i] == 'a' || minusculas[i] == 'e' || minusculas[i] == 'i' ||
                minusculas[i] == 'o' || minusculas[i] == 'u') {
                contador++;

            }
        }
        return contador;

    }

    console.log(contarCuantasVocales('TESTING')); //2
    console.log(contarCuantasVocales('CRISTIAN')); //3

    /**
     * This function counts the number of vowels in a given string.
     * Using a regular expression
     * @param {string} text - The input string to be analyzed.
     * @return {number} The number of vowels found in the input string.
     */
    const contarCuantasVocales2 = (text: string) => {
        let concidencia = text.match(/[aeiou]/gi);

        return concidencia ? concidencia.length : 0;
    }

    console.log(contarCuantasVocales2('mi nombre esta escrito arriba')); //11
    console.log(contarCuantasVocales2('hola'));//2
    console.log(contarCuantasVocales2(''));//0
})()