
(() => {
    //Declara 2 variables numéricas (con el valor que desees), he indica cual es mayor de los dos. Si son iguales indicarlo también. Ves cambiando los valores para comprobar que funciona.

    let numero1T: number = 2;
    let numero2T: number = 4;

    const compararNumeros = (numero1: number, numero2: number) => {

        if (numero1 > numero2) {
            return `${numero1} es mayor a ${numero2}`;
        } else if (numero1 < numero2) {
            return `${numero2} es mayor a ${numero1}`
        } else {
            return `${numero1} son iguales ${numero2}`;
        }
    }

    console.log(compararNumeros(numero1T, numero2T));

    //Lee un número por teclado que pida el precio de un producto (puede tener decimales) y calcule el precio final con IVA. El IVA sera una constante que sera del 21%.

    const calcularIva = (producto: number) => {

        let resultado = producto + (producto * 0.19);

        return resultado;

    }

    console.log(calcularIva(100));//119

    //Muestra los números del 1 al 100 (ambos incluidos). Usa un bucle while. 

    const to100 = (numero: number=0, hasta:number) => {

        while (numero < hasta) {
    
            console.log(numero);
             numero++;
    
        }
    
        return numero
    }
    
    console.log(to100(1,20));



})()