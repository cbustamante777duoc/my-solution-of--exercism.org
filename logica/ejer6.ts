(()=>{

    //cre una function que retroceda en un for osea que vaya del 10 al 0 (10,9,8,7,...)

    let arrN20:number [] = [];

    for (let index = 0; index < 10; index++) {
        arrN20.push(index)
    }

    for (let index = arrN20.length; index > 0; index--) {
        console.log(index); //10,9,8,7,6,5,4,3,2,1,0
    }



})()