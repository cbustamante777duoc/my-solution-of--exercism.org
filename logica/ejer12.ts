(() => {



    // const theMostUsedLetter = (phrase) => {

    //     let letters = {};
    //     for (let i = 0; i < phrase.length; i++) {
    //         if (phrase[i] in letters) {
    //             letters[phrase[i]]++;
    //         } else {
    //             letters[phrase[i]] = 1;
    //         }

    //     }
    //     return letters;

    // }

    

    /**
     * Finds the most repeated value in a given string.
     * @param cadena The input string.
     * @returns A string containing the most repeated value and the number of occurrences.
     */
    function findMostRepeatedValue(cadena: string): string {
        let mostRepeatedValue = ''; // Initialize the value with an empty string.
        let maxRepetitions = 0; // Initialize the maximum repetitions with 0.

        for (let i = 0; i < cadena.length; i++) {
            let currentValue = cadena.charAt(i);
            let repetitions = 0;

            for (let j = 0; j < cadena.length; j++) {
                if (currentValue === cadena.charAt(j)) {
                    repetitions++;
                }
            }

            if (repetitions > maxRepetitions) {
                mostRepeatedValue = currentValue;
                maxRepetitions = repetitions;
            }
        }

        return `The most repeated value is: ${mostRepeatedValue} - Number of occurrences: ${maxRepetitions}`;
    }
    var texto = 'aaaaaeeeeeeiouuu'
    console.log(findMostRepeatedValue(texto));


    const masUsado = (cadena: string) => {

        let mapeoDelTexto = {};
        let maximoDeRepeticiones = 0;
        let letraMasUsada = '';


        // se recorre el texto
        for (const item of cadena) {

            // si la letra no existe el el texto se le asigna un 1 
            //sino se incrementa con el ++
            if (!mapeoDelTexto[item]) {
                mapeoDelTexto[item] = 1;
            } else {
                mapeoDelTexto[item]++;
            }

            console.log(mapeoDelTexto);
        }

        //recorre el for y obtiene la letra 
        for (const item in mapeoDelTexto) {
            if (mapeoDelTexto[item].toString().trim().length === 1 && mapeoDelTexto[item] > maximoDeRepeticiones) {
                maximoDeRepeticiones = mapeoDelTexto[item];
                letraMasUsada = item;
            }
        }


        return `la letra mas usada es: ${letraMasUsada} con ${maximoDeRepeticiones} repeticiones`;

    }

    console.log(masUsado('testing desde cero '));//la letra mas usada es: e con 4 repeticiones 
    console.log(masUsado('cristian'));//la letra mas usada es: i con 2 repeticiones  





})()