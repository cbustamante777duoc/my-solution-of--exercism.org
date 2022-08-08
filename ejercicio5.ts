// 1. Retrieve a card from a stack
// To pick a card, return the card at index position from the given stack.

// const position = 2;
// getItem([1, 2, 4, 1], position);
// // => 4

const getItem = (cards:number[], position:number) => {
    return cards[position];
}

console.log(getItem([1, 2, 4, 1],1));//2

// 2. Exchange a card in the stack
// Perform some sleight of hand and exchange the card at index position with the replacement card provided. Return the adjusted stack.


const position = 2;
const replacementCard = 6;
const setItem = (arr:number[], position:number,remplace:number) => {
    const result = arr[position] = remplace;
    return [arr , result];

}

console.log(setItem([1, 2, 4, 1],position,replacementCard)); //[ [ 1, 2, 6, 1 ], 6 ]

const insertItemAtTop = (arr:number[], newItem:number) =>{

    newItem = arr.unshift(newItem);

    return arr;
}

console.log(insertItemAtTop([5, 9, 7, 1],3));//[ 3, 5, 9, 7, 1 ]

// 4. Remove a card from the stack
// Make a card disappear by removing the card at the given position from the stack. Return the adjusted stack.

const removeItem = (arr:number[], pos:number) =>{
    arr.splice(pos,1);
    return arr
}

console.log(removeItem([3, 2, 6, 4, 8],2)); //[ 3, 2, 4, 8 ] 

// 5. Remove the top card from the stack
// Make a card disappear by removing the card at the top of the stack. Return the adjusted stack.

const removeItemFromTop = (arr:number[]) =>{
    arr.pop();

    return arr;
}

console.log(removeItemFromTop([3, 2, 6, 4, 8])) //[ 3, 2, 6, 4 ] 

const insertItemAtBottom = (arr:number[], newItem:number) =>{
  arr.unshift(newItem);

  return arr;
}

console.log(insertItemAtBottom([5, 9, 7, 1], 8));//[ 8, 5, 9, 7, 1 ]

const removeItemAtBottom =(arr:number[])=>{

    arr.shift();

    return arr;
}

console.log(removeItemAtBottom([8, 5, 9, 7, 1])); //[ 5, 9, 7, 1 ]

// 8. Check the size of the stack
// Check whether the size of the stack is equal to stackSize or not.

const checkSizeOfStack = (arr:number[], stack:number) =>{

    if (arr.length === stack) {
        return true;
    }else{
        return false;
    }
}

console.log(checkSizeOfStack([3, 2, 6, 4, 8],4)); //false