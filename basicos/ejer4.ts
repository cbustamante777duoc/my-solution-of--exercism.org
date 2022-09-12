(()=>{
    //crear un funcion que recorra un ciclo for y le vaya agregando el mensaje que se envia por parametro
    /**
     * 
     * @param mensaje parametro que se agregan a  la lista
     * @returns 
     */
    const recorrreListaAsignaturas = (mensaje:string) =>{
                
        const asignaturas = ['artes','lenguajes','matematicas','historias'];
    
        let mensajeFinal = "";
    
        for (const item of asignaturas) {
            mensajeFinal += `${mensaje} ${item} `
        }

        return mensajeFinal;
    }


console.log(recorrreListaAsignaturas("yo estudio"));

//yo estudio artes yo estudio lenguajes yo estudio matematicas yo estudio historias 

})();