(() => {

    
    // Write a JavaScript function to check whether a string is blank or not.
    // escribir una funcion para saber si un string esta vacio o no

    const isEmptyString = (word: string) => {
        
        if (word.length === 0) {
            return 'esta vacio';
        }
        
        if (word.length > 0) {
            return 'el string no esta vacio';
        }
        
    }
    
    let palabra: string = 'hola'
    let palabra2: string = '';

    console.log(isEmptyString(palabra2));//esta vacio
    console.log(isEmptyString(palabra));//el string no esta vacio



})();