(() => {

    /**
    * Converts a string to uppercase.
    *
    * @param {string} text - The string to convert.
    * @return {string} The converted string.
    */
    function toUpperCase(text: string): string {
        let result = "";

        for (let i = 0; i < text.length; i++) {
            if (i === 0 || text[i - 1] === " ") {
                result += text[i].toUpperCase();
            } else {
                result += text[i];
            }
        }

        return result;
    }

    /**
    * Capitalizes the first letter of each word in a given text.
    *
    * @param {string} text - The text to capitalize.
    * @return {string} The capitalized text.
    */
    function capitalizeWords(text: string): string {
        const words = text.split(" ");

        const capitalizedWords = words.map(word => {
            if (word === "") {
                return "";
            }

            const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            return capitalizedWord;
        });

        return capitalizedWords.join(" ");
    }

    console.log(toUpperCase('hello world')); // "Hello World"
    console.log(capitalizeWords("winter aespa")); // Winter Aespa



})()