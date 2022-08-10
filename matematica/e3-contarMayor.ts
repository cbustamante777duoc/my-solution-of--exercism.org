(() => {

    let array = [1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]


    /**
     * funccion que retorna cauntas veces se ha repido el numero mayor
     * @param candles array
     * @returns returns the value of how many times the largest number has been repeated
     */
    function birthdayCakeCandles(candles: number[]): number {
        let max = Math.max(...candles);
        let contMax = 0;
        //  for (let i = 0; i < candles.length; i++){
        //      if(candles[i]== max){
        //          contMax++
        //      }
        //  }


        candles.forEach(element => {
            if (element == max) {
                contMax++;
            }
        });

        return contMax;

    }


    console.log(birthdayCakeCandles(array));

})()