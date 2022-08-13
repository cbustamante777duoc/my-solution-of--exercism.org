(()=>{

    /**
     * funcion que cuenta cuantas veces hay palabras 
     * @param s string or phrase
     * @returns count number of words starting with Uppercase
     */

    function camelcase(s: string): number {
    
        let cuenta = 1;
        
        for(let i =0; i< s.length; i++){
            if(s[i]== s[i].toLocaleUpperCase()){
                cuenta++
            }
        }
        
        return cuenta;
    
    }

    console.log(camelcase("saveChangesInTheEditor"));

})();