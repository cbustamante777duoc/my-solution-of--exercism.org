(() => {
    // sum of all numbers from 1 to a given number

    const sum = (numero: number): number => {

        let suma = 0;
        for (let i = 0; i <= numero; i++) {

            suma = suma + i;
        }

        return suma;

    }

    console.log(sum(10)); //55

})();