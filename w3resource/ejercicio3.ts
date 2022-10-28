(()=>{

    //Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

    //escribir una function que de el primer elemento de un array
    
    const fruits = ["Banana", "Orange", "Apple", "Mango"];


    const getFirstElement = (array:any[],firstElment) =>{

        return array.slice(0,1);
    }

    
console.log(getFirstElement([],3));
console.log(getFirstElement([7, 9, 0, -2],3));
console.log(getFirstElement([7, 9, 0, -2],6));
console.log(getFirstElement([7, 9, 0, -2],-3));

//https://www.cloudhadoop.com/javascript-array-get-first/
    

})()