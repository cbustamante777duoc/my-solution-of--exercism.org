
(()=>{

    //crear un funcion que de numeros random entre 6 y 1 
    //pedir en la función cuantas veces quiere lanzar los dados
    //guardar los numeros  en dos listas
    //mostrar cuantas veces los dados fueron los mismo numero
    //mostrar ambas listas


    let listaRandom:number[] = [];
    let listaRandom2:number[] = [];

    const funDados = (numero:number) =>{
        let mensaje:string = '';
        let contador = 0;
        for (let i = 0; i <numero ; i++) {
            let dado1 =Math.round( Math.random()* (6-1)*1)
            let dado2 =Math.round( Math.random()* (6-1)*1)
    
            if(dado1==dado2) {
                contador++;
            }
        }

        mensaje = `
        la cantidad de veces que los dados fueron los mismo numeros son ${contador}
        los numeros de la lista 1 es ${listaRandom}
        los numeros de la lista 2 es ${listaRandom2}
        `

        return mensaje;
    }
    

    console.log(funDados(10));
        // la cantidad de veces que los dados fueron los mismo numeros son 2 
        // los numeros de la lista 1 es 2,0,1,2,1,5,4,5,4,4 
        // los numeros de la lista 2 es 1,3,4,1,1,3,4,0,5,3 


    

})();