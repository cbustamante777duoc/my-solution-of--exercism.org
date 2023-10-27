(() => {

    /**
    * Removes a specific word from an array of strings.
    * @param {Array<string>} array - The array to remove the word from.
    * @param {string} word - The word to be removed.
    * @return {Array<string>} - The new array with the word removed.
    */

    function removeWord(array: string[], word: string): string[] {
        // Crea una expresión regular para la palabra
        const regex = new RegExp(`^${word}$`, "i");
      
        // Elimina los elementos que coinciden con la expresión regular
        const filteredArray = array.filter((element) => !regex.test(element));
      
        // Devuelve el nuevo array
        return filteredArray;
      }

    console.log(removeWord(["hola", "adios", "hola", "adios"], "hola"));// [ 'adios', 'adios' ] 
    console.log(removeWord(["cristian", "winter", "karina"], "karina" ));//[ 'cristian', 'winter' ]
    
})()