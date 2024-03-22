(() => {



    function lonelyinteger(a: number[]) {
        // Write your code here

        const array = new Set(a)



        return array
    }

    console.log(lonelyinteger([0, 0, 1, 2, 1]))


    function findDuplicate(arr: number[]): number {
        const uniqueSet = new Set(arr);
        for (const num of uniqueSet) {
            return num; // Return the first unique number found
        }
        // Return a default value (shouldn't happen if input is valid)
        return -1;
    }

    console.log(findDuplicate([1,1, 3, 3, 4, 2, 2]))



})()