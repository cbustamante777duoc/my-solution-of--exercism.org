(() => {


    //guardar en una lista todos los numeros pares y otra lista los numeros impares

    const guardarParesImpares = (numeroCiclo: number):string => {

        let listaPares: number[] = [];
        let listaImpares: number[] = [];

        for (let i = 0; i <= numeroCiclo; i++) {
            if (i > 1 && i % 2 == 0) {
                listaPares.push(i);
            }

            if (i % 2 == 1) {
                listaImpares.push(i);
            }
        }

        let mensaje = `
        la lista los pares son:${listaPares}
        la lista los Inpares son:${listaImpares}
        `
        return mensaje
    }
    console.log(guardarParesImpares(10));
    // la lista los pares son:2,4,6,8,10 
    // la lista los Inpares son:1,3,5,7,9 

})();