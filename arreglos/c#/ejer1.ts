(()=>{


// 1) crea un arr con 10 valores 
// 2) suma todos los valores
// 3) multiplicacion todos los valores
// 4) obtenen un promedio de todos los valores de la suma (arr.length)

let arr:number[] = [1, 3, 5, 7, 8, 9, 13, 22, 44, 58,33]

let suma:number = 0;
let promedio:number = 0;
let multiplicacion:number = 1;

for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
    multiplicacion *=  arr[i]
    promedio = Math.round( suma / arr.length); 
}



console.log(suma);//170
console.log(promedio); //18
console.log(multiplicacion); //182088466560 





})()