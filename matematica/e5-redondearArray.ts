(()=>{

    let number:number[] = [29,68,33,44,58,74,88,94];

    /**
     * 
     * @param grades array of grades
     * @returns grades more rounded
     */
    const RoundGrade = (grades:number[])=>{

        for (let i = 0; i < grades.length; i++) {        
            if (((grades[i] + 2) % 5 == 0) && (grades[i] + 2 > 39)) {
                grades[i] = grades[i] + 2;
            } else if (((grades[i] + 1) % 5 == 0) && (grades[i] + 2 > 39)) {
                grades[i] = grades[i] + 1;
            }
        }
        return grades;

    }


    console.log(RoundGrade(number)); //[ 70, 33, 45, 60, 75, 90, 95 ]


    /**
     * funcion que recorre un arreglo y redondea las notas de los alumnos
     * redondea la nota hacia arriba todas las que sean mayor a 30 y si la nota + 2 es multiple de 5 o redondea hacia arriba todas las notas que sean a mayor  30 y que la nota +1 se multiple de 5
     * @param array notas alumnos
     * @returns return notas redoncias hacia arriba desde el 30
     */
    const myRoundGrade = (array:number[]) =>{
        let grades = array.map((item) =>{
            if(((item +2) % 5 == 0) && (item + 2 >30) ){
                item = item + 2;
            }
            else if(((item + 1)% 5 == 0)  && (item + 2 >30) ){
                item++;
            }

            return item;
        })

        return grades;
    }

      
    console.log(myRoundGrade(number)); //[ 30,70, 33, 45, 60, 75, 90, 95 ]
})();