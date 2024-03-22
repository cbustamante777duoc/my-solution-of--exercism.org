const matrixA = [
    [1, 2],
    [3, 4]
];
const matrixB = [
    [5, 6],
    [7, 8]
];

/**
 * Calculates the sum of two matrices and returns the result.
 *
 * @param {number[][]} matrixA - the first matrix
 * @param {number[][]} matrixB - the second matrix
 * @return {number[][]} the sum of the two matrices
 */
const MatrixSum= (matrixA: number[][], matrixB: number[][]): number[][] =>{

    let sum = 0;
    const numRows = matrixA.length;
    const numCols = matrixA[0].length;
    const resultMatrix: number[][] = [];

    for(let i = 0; i < numRows;i++){
        const row: number[] = [];

        for(let j = 0; j < numCols; j++){
            row.push(matrixA[i][j]+ matrixB[i][j]);
        }
        resultMatrix.push(row);
    }


    return resultMatrix;
}

const test = MatrixSum(matrixA, matrixB);
console.log(test) // [ [ 6, 8 ], [ 10, 12 ] ]


/**
 * Transposes the given matrix.
 *
 * @param {any} matrix - the matrix to be transposed
 * @return {number[][]} the transposed matrix
 */
const transposeMatrix = (matrix) => {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const resultMatrix: number[][] = [];

    // Initialize the result matrix with empty arrays
    for (let j = 0; j < numCols; j++) {
        resultMatrix[j] = Array(numRows);
    }

    // Fill in the transposed values
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            resultMatrix[j][i] = matrix[i][j];
        }
    }

    return resultMatrix;
};

const originalMatrix = [
    [1, 2, 3],
    [4, 5, 6]
];

const test2 = transposeMatrix(originalMatrix);
console.log(test2);


// const transposeMatrix = (matrix) => {
//     // Validate input: Ensure matrix is an array of arrays
//     if (!Array.isArray(matrix) || matrix.length === 0 || !matrix.every(Array.isArray)) {
//         throw new Error('Input must be a non-empty array of arrays.');
//     }

//     const numRows = matrix.length;
//     const numCols = matrix[0].length;
//     const resultMatrix: number[][] = [];

//     // Initialize the result matrix with empty arrays
//     for (let j = 0; j < numCols; j++) {
//         resultMatrix[j] = Array(numRows).fill(null); // Initialize each row with nulls
//     }

//     // Fill in the transposed values
//     for (let i = 0; i < numRows; i++) {
//         for (let j = 0; j < numCols; j++) {
//             resultMatrix[j][i] = matrix[i][j];
//         }
//     }

//     return resultMatrix;
// };

// // Example usage:
// const originalMatrix = [
//     [1, 2, 3],
//     [4, 5, 6]
// ];

// try {
//     const test2 = transposeMatrix(originalMatrix);
//     console.log(test2);
// } catch (error) {
//     console.error('Error:', error.message);
// }
