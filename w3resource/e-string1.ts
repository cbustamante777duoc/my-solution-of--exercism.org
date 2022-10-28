(()=>{

    // Write a JavaScript function to check whether an `input` is a string or not
    // crear una funcion para saber si es un String o no
    
    const checkString = (word:string) =>{
        
        if (typeof(word) == 'string'){
            return 'es un string';
        }else{
            return 'no es un string';
        }
    }
    
    
    let palabra:string = 'hola'

    console.log(checkString(palabra)); // es un string


})();