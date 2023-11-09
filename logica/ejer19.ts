(() => {

    const anagrama1 = 'Romina'
    const anagrama2 = 'Maino'

    /**
    * Cleans the input text by removing non-alphanumeric characters, 
    * converting to lowercase, sorting the characters, and joining them.
    *
    * @param {string} inputText - The text to be cleaned.
    * @return {string} The cleaned text.
    */
    const cleanText = (inputText: string): string => {
        return inputText
            .replace(/\W/g, '')
            .toLowerCase()
            .split('')
            .sort()
            .join('');
    }

    /**
    * Checks if two words are anagrams of each other.
    *
    * @param {string} word - The first word to be checked.
    * @param {string} word2 - The second word to be checked.
    * @return {string} Returns 'Anagram' if the words are anagrams, 'Not an anagram'    otherwise.
    */
    const checkAnagram = (word: string, word2: string) => {
        const cleanWord = cleanText(word);
        const cleanWord2 = cleanText(word2);
        
        return cleanWord === cleanWord2 ? 'Anagram' : 'Not an anagram';
    }


    console.log(checkAnagram(anagrama1, anagrama2));


})()