(()=>{

    //revertir un string (reversed string)
    let palabra:string = "cristian"
    let newWorld:string = "";

    for (let index = palabra.length -1 ; index >=0; index--) {
        newWorld = newWorld + palabra[index]
        console.log(newWorld);
    }

    console.log(newWorld);

    


})()