(()=>{

     //find the most values of array
    function maxValue(arr: number[]) {
    
        return Math.max.apply(null, arr)
    }
    
    let numers = [1, 2, 3, 4, 5, 6, 7, 8];
    
    let n = [4, -3, 5, -2, 6, -1, 4, 5,5]
    
    console.log(n.sort());
    
    console.log(maxValue(numers));
    
    
    // find the most frequency  values of array
    function mostFrequent(arr, n)
    {
           
        // Sort the array
        arr.sort();
           
        // find the max frequency using linear
        // traversal
        let max_count = 1, res = arr[0];
        let curr_count = 1;
           
        for (let i = 1; i < n; i++)
        {
            if (arr[i] == arr[i - 1])
                curr_count++;
            else
                curr_count = 1;
            
            if (curr_count > max_count)
            {
                max_count = curr_count;
                res = arr[i - 1];
            }
    
        }
         
        return 'the most frequency '+ res;
    }
    
    mostFrequent(n,n.length)
    console.log(mostFrequent(n,n.length));
})()




// freq = arr.inject(Hash.new(0)) { |h,v| h[v] += 1; h }
