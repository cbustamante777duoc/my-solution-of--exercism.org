(() => {


/**
 * Repeats a given phrase a certain number of times.
 *
 * @param {string} frase - the phrase to be repeated
 * @param {number} ciclos - the number of times the phrase should be repeated
 * @return {string} the repeated phrase
 */
    const repitirFrase = (frase, ciclos) => {

        let repetir = "";

        for (let i = 0; i < ciclos; i++) {
            repetir += frase + " ";
        }
        return repetir;

    }


    console.log(repitirFrase("hola", 5)); //hola hola hola hola hola  

    /**
     * Repeats a given phrase a certain number of times.
     *
     * @param {string} phrase - the phrase to be repeated
     * @param {number} cycles - the number of times the phrase should be repeated
     * @return {string} the repeated phrase
     */
    const repeatPhrase = (phrase, cycles) => {
        let repeated = "";
        for (let i = 0; i < cycles; i++) {
            repeated += phrase + " ";
        }
        return repeated;
    }

    console.log(repeatPhrase("hola", 5));  //hola hola hola hola hola


})()