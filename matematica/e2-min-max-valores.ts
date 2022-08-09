/**
 * funcion que retorna el minimo valor de un arra
 * funcion que retorna el max valor de un array
 * @param arr data array
 */

function miniMaxSum(arr: number[]): void {

    let sum = arr.reduce((total, item) => item + total, 0);
    let max = Math.max(...arr);
    let min = Math.min(...arr);

    console.log(`${sum - max} ${sum - min}`);


}