(()=>{

//crear un funcion que reciba dos parametros un texto y otro una palabra
// ahora se busca censurar un palabra que se pasa por parametro

const frase = "texto, sin censurar, texto, sin censurar, sin censurar"

const censurar = (frase:string, palabra:string) =>{

    let resultado = "";

    if(!frase && !palabra){
        resultado = "No se puede leer la frase";
    }else if(!frase && palabra){
        resultado = "NO EXISTE frase";
    } else if(frase &&!palabra){
        resultado = "NO EXISTE palabra";
    }else{
        resultado = frase.replace(new RegExp(palabra, 'gi'), '****');
    }

    return resultado;

}

console.log(censurar('', 'texto'));//NO EXISTE frase 
console.log(censurar(frase, 'texto')); //****, sin censurar, ****, sin censurar, sin censurar 
console.log(censurar(frase, 'sin')); //texto, **** censurar, texto, **** censurar, **** censurar 
console.log(censurar(frase,'' ));//NO EXISTE palabra 


const censor = (phrase: string, word: string): string => {
    if (!phrase) {
        return "No se puede leer la frase";
    }

    if (!word) {
        return "NO EXISTE palabra";
    }

    return phrase.replace(new RegExp(word, 'gi'), '****');
}


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

})()