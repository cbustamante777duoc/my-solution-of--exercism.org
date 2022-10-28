// Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
// Test Data 

// escribir una funcion que verifica si es un arreglo

const fruits = ["Banana", "Orange", "Apple", "Mango"];

const checkArray = (array:any[]) =>{

    if(Array.isArray(array)){
        console.log('es array');
    }else{
        console.log('NO es un array');
    }
}

console.log(checkArray(fruits)); //es array
