(()=>{


    /**
    * Trims and cuts a word to a specified length.
    *
    * @param {string} inputWord - The word to be trimmed and cut.
    * @param {number} length - The desired length of the output word.
    * @return {string} The trimmed and cut word, or an error message if the inputs are invalid.
    */

    const trimAndCutWord = (inputWord: string, length: number) => {
        if (typeof inputWord==='string' && typeof length==='number') {
            return inputWord.trim().substring(0, length);
            
        } else {
            return 'introduce bien los datos'
        }
    }

    const trimAndCutWord2 = (word: string, len: number): string => {
        if (typeof word === 'string' && typeof len === 'number') {
          return word.trim().slice(0, len);
        }
        return 'Invalid input';
      }

    console.log(trimAndCutWord('testing word', 3));



})()