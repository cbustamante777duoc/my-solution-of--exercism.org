// 1. Get the first letter of a sentence
// To determine the letters for the front door password, you need to respond with the first letter of the line of the poem, that the guard recites to you.
// To end up with a nice password, the members of the poetry club like to use acrostic poems. This means that the first letter of each sentence forms a word. Here is an example by one of their favorite writers Michael Lockwood.
// So when the guard recites Stands so high, you'll respond S, when the guard recites Huge hooves too, you'll respond H.
// Implement the function frontDoorResponse that takes a line of the poem as an argument and returns the first letter of that line.


const frontDoorResponse = (Phrase:string) =>{

    return Phrase.substring(0,1);
};

console.log(frontDoorResponse('Stands so high')); //S
console.log(frontDoorResponse('Huge hooves too')); //H

// 2. Capitalize a word
// Now that you have all the correct letters, all you need to do to get the password for the front door is to correctly capitalize the word.
// Implement the function frontDoorPassword that accepts a string (the combined letters you found in task 1) and returns it correctly capitalized.


// const frontDoorPassword = (word: string) =>{
//     return word.split(' ').map(item => item.charAt(0).toUpperCase()+item.slice(1)).join(' ');
// }

const frontDoorPassword = (word: string) =>{
    return word.substring(0,1).toUpperCase()+word.slice(1).toLocaleLowerCase();
}

console.log(frontDoorPassword('SHIRE'));//shire


// // 3. Get the last letter of a sentence
// When the guard recites Stands so high, you'll respond h, when the guard recites Huge hooves too, you'll respond o.

// Note that sometimes the guard does stylistic pauses (in the form of whitespace) at the beginning or at the end of a line. You will need to ignore those pauses to derive the correct letter.

// Implement the function backDoorResponse that takes a line of the poem as an argument and returns the last letter of that line that is not a whitespace character.

const backDoorResponse = (word: string) =>{

    return word.trim().slice(-1)

};



console.log(backDoorResponse('Stands so high')); //h
console.log(backDoorResponse('Stands so high '));//h

// 4. Be polite
// To enter the poetry club via the back door, you need to be extra polite. So to derive the password, this time you need to correctly capitalize the word and add ', please' at the end.
// Implement the function backDoorPassword that accepts a string (the combined letters you found in task 3) and returns the polite version of the capitalized password.

const backDoorPassword =(word:string) =>{
    return frontDoorPassword(word)+' please'
}

console.log(backDoorPassword('horse'));