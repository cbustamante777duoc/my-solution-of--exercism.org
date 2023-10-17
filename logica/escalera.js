(()=>{


    /**
     * crear una escalera [] por cada numero ejemplo
     * funcion(4) []
     *            [][]
     *            [][][]
     *            [][][][]      
     * 
     */

    /**
     * Generates a staircase made of brackets of increasing length.
     *
     * @param {number} numero - The number of steps in the staircase.
     * @return {undefined} - Does not return a value.
     */
    const escalera = (numero) => {
        // Initialize an empty string to store the complete staircase
        let escaleraCompleta = "";
        
        // Iterate through each step in the staircase
        for (let i = 1; i <= numero; i++) {
            
            // Initialize an empty string to store the current step
            let escalon= "";
            
            // Iterate through each bracket in the current step
            for (let j = 1; j <= i; j++) {
                // Add a bracket to the current step
                escalon += "[-]";
            }
            escaleraCompleta += escalon + "\n";
    
            // Print the current step
            return escaleraCompleta;
        }
    }
    console.log(escalera(4));

//  escalera(4)
//  [-]
//  [-][-]
//  [-][-][-]
//  [-][-][-][-]

//escalera(7)
// [-]
// [-][-]
// [-][-][-]
// [-][-][-][-]
// [-][-][-][-][-]
// [-][-][-][-][-][-]
// [-][-][-][-][-][-][-]

/**
 * Generates a staircase made of brackets of increasing length.
 *
 * @param {number} numero - The number of steps in the staircase.
 * @return {string} - The complete staircase as a string.
 */
const generateStaircase = (numero) => {
    // Initialize an empty string to store the complete staircase
    let staircase = "";
    
    // Iterate through each step in the staircase
    for (let i = 1; i <= numero; i++) {
        
        // Initialize an empty string to store the current step
        let step = "";
        
        // Iterate through each bracket in the current step
        for (let j = 1; j <= i; j++) {
            // Add a bracket to the current step
            step += "[-]";
        }
        
        // Add the current step to the complete staircase
        staircase += step + "\n";
    }
    
    // Return the complete staircase
    return staircase;
}

})