(() => {

    //crear una funcion que cuenta los impares y los numeros pares segun cuando ciclo se ingresan en la funcion y que sume la cantidad de impares final y de impares final

    const contadorParesImpares = (numeroCiclo: number) => {

        let contadorPares = 0;
        let contadorInpares = 0;
        let sumaPares = 0;
        let sumaInpares = 0;


        for (let i = 0; i <= numeroCiclo; i++) {
            if (i > 1 && i % 2 == 0) {
                contadorPares++;
                sumaPares = sumaPares + i;
            }

            if (i % 2 == 1) {
                contadorInpares++;
                sumaInpares = sumaInpares + i;
            }
        }

        let mensaje = `
        La cantidad de impares es: ${contadorPares} 
        La cantidad de pares es: ${contadorInpares} 
        La suma de los pares es: ${sumaPares}
        La suma de los inpares es: ${sumaInpares}
        `
        return mensaje;
    }


    console.log(contadorParesImpares(10));
    // La cantidad de impares es: 5  
    // La cantidad de pares es: 5  
    // La suma de los pares es: 30 
    // La suma de los inpares es; 25

})()