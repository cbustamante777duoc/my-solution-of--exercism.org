// 1. Check if the 'Fast Attack' action is possible

// Implement a function named canExecuteFastAttack that takes a boolean value which indicates if the knight is awake. This function returns true if the 'Fast Attack' action is available based on the state of the character. Otherwise, returns false:


let knightIsAwake = true;

/**
 * funccion que si el rey esta dormido puede atacar rapido
 * @param knightIsAwake condition
 * @returns boolean
 */

const canExecuteFastAttack = (knightIsAwake: boolean) => {

    return (!knightIsAwake) ? true : false;

}

console.log(canExecuteFastAttack(knightIsAwake));//false

// Implement a function named canSpy that takes three boolean values, indicating if the knight, archer and the prisoner, respectively, are awake. The function returns true if the 'Spy' action is available based on the state of the characters. Otherwise, returns false:

let knightIsAwake2 = true;
let archerIsAwake = false;
let prisonerIsAwake = false;
/**
 * function que retorna true si cualquiera de los tres personajes esta dispierto
 * @param knightIsAwake2 boolean
 * @param archerIsAwake boolean
 * @param prisonerIsAwake boolean
 * @returns boolean
 */
const canSpy = (knightIsAwake2: boolean, archerIsAwake: boolean, prisonerIsAwake: boolean) => {

    return (knightIsAwake2 || archerIsAwake || prisonerIsAwake) ? true : false;
}

console.log(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake));//true



// Implement a function named canSignalPrisoner that takes two boolean values, indicating if the archer and the prisoner, respectively, are awake. The function returns true if the 'Signal Prisoner' action is available based on the state of the characters. Otherwise, returns false:

let archerIsAwake2 = false;
let prisonerIsAwake2 = true;

/**
 * function que retorna true si el archer esta durmiendo
 * @param archerIsAwake2 boolean
 * @param prisonerIsAwake2 boolean
 * @returns boolean
 */
const canSignalPrisoner = (archerIsAwake2: boolean, prisonerIsAwake2: boolean) => {

    return (!archerIsAwake2 && prisonerIsAwake2) ? true : false;
}

console.log(canSignalPrisoner(archerIsAwake2, prisonerIsAwake2));//true

knightIsAwake = false;
archerIsAwake = false;
prisonerIsAwake = true;
let petDogIsPresent = true;

/**
 * function si el perro esta presente pero el rey y arquero esta durmiendo y el prisoner esta dispierto entonce el prisoner puede estar libre
 * @param knightIsAwake boolean
 * @param archerIsAwake boolean
 * @param prisonerIsAwake boolean
 * @param petDogIsPresent  boolean
 * @returns boolean
 */
const canFreePrisoner = (knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) => {

    if (!knightIsAwake && !archerIsAwake && petDogIsPresent && prisonerIsAwake) {
        return true;
    } else {
        return false;
    }
};

console.log(canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake,
    petDogIsPresent));//true