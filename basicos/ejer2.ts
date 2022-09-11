//contador de vocales
const ContarVocales = (texto:string):number=>{
    
    const vowels = ["a", "e", "i", "o", "u"]
    let contador = 0;

    for (const letras of texto.toLowerCase() ) {
        if (vowels.includes(letras)) {
            contador++;

            console.log(letras);//i,i,a
        }
    }
    return contador;
}

console.log(ContarVocales('cristian'));//3
