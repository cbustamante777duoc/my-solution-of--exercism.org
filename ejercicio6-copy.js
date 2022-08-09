// 1. Determine the total number of birds that you counted so far
// Let us start analyzing the data by getting a high-level view. Find out how many birds you counted in total since you started your logs.

// Implement a function totalBirdCount that accepts an array that contains the bird count per day. It should return the total number of birds that you counted.

/**
 * function sum all elements from the array
 * @param arry data array
 * @returns total value of the sum
 */
const birdsPerDay = (arry) => {

    return arry.reduce((total, item) => item + total, 0);
}

console.log(birdsPerDay([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]));//34

// 2. Calculate the number of visiting birds in a specific week
// Now that you got a general feel for your bird count numbers, you want to make a more fine-grained analysis.

// Implement a function birdsInWeek that accepts an array of bird counts per day and a week number. It returns the total number of birds that you counted in that specific week. You can assume weeks are always tracked completely.

const birdsInWeek = (arry, week ) => {

    let i = (week - 1) *7
    // let total = arry.slice((week - 1) * 7, 7)

    return birdsPerDay(arry.slice(i, i + 7));
}


// let oneWeek = birdsPerDay.splice((week - 1) * 7, 7);

console.log(birdsInWeek([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1], 2));//12

// You realized that all the time you were trying to keep track of the birds, there was one hiding in a far corner of the garden. You figured out that this bird always spent every second day in your garden. You do not know exactly where it was in between those days but definitely not in your garden. Your bird watcher intuition also tells you that the bird was in your garden on the first day that you tracked in your list.

// Given this new information, write a function fixBirdCountLog that takes an array of birds counted per day as an argument. It should correct the counting mistake and return the modified array.

const fixBirdCountLog = (array) =>{

    for (let i = 0; i < array.length; i+=2) {
        array[i]++;
    }

    return array;

}

console.log(fixBirdCountLog([2, 5, 0, 7, 4, 1]));//[ 3, 5, 1, 7, 5, 1 ] 