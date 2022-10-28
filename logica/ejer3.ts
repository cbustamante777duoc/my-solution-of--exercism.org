(()=>{


    //supoga que un individuo desea invertir su capital, el banco le da un 2% mensual sobre la ganacia 

    const ganaciaMensual = (sueldo:number) =>{

        let total = (sueldo +(sueldo * 0.02))

        return total

    }


    
    console.log(ganaciaMensual(100)); //102


})();