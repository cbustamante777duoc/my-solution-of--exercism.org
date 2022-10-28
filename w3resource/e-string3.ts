(() => {

    //Write a JavaScript function to split a string and convert it into an array of words.
    //escribir una funcion que convierte un string en palabras (array)
    
    const converStringArray = (word: string) => {
        
        return word.trim().split(' ')
    }
    
    let palabra: string = 'hola mundo desde aca'
    console.log(converStringArray(palabra)); //[ 'hola', 'mundo', 'desde', 'aca' ]

})();