
// Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

const makesTen = (numero1: number, numero2: number) => {
 

    let suma = numero1 + numero2;

    if (numero1 == 10 || suma == 10 || numero2 == 10) {
        return true;
    }

 

}


console.log(makesTen(9, 10))//true
console.log(makesTen(9, 9))//false
console.log(makesTen(1, 9))//true
