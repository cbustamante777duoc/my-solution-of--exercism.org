(()=>{

    // Write a JavaScript function to clone an array
    //escribe una function que clone un array

    // forma 1

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const arrayClone: string[] = [];

    fruits.map((item) => arrayClone.push(item)  )
    console.log(arrayClone); //[ 'Banana', 'Orange', 'Apple', 'Mango' ]

    //OTHER WAY
    const copyArray = fruits.slice();
    console.log(copyArray); //[ 'Banana', 'Orange', 'Apple', 'Mango' ]

    //OTHER WAY 2

    const copieArrayFruits = [...fruits]
    console.log(copieArrayFruits); //[ 'Banana', 'Orange', 'Apple', 'Mango' ]

//https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/

})();