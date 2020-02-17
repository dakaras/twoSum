let twoSum = (nums, target) => {
    const map = new Map() //look speed in Map object is O(1) or constant time
    for (let i = 0; i < nums.length; i++) {
        let currVal = nums[i]
        if (map.has(currVal)){ //finds the difference that adds up to target
            return [map.get(currVal), i]
        }
        let diff = target - currVal
        map.set(diff, i)
    }
}
//returns fast speed but sacrifices memory space in order to process

//Alternative Solution using 2 for loops

// our two sum function which will return
// all pairs in the array that sum up to S
function twoSum(arr, S) {

    var sums = [];

    // check each element in array
    for (var i = 0; i < arr.length; i++) {

        // check each other element in the array
        for (var j = i + 1; j < arr.length; j++) {

            // determine if these two elements sum to S
            if (arr[i] + arr[j] === S) {
                sums.push([arr[i], arr[j]]);
            }
        }
    }
    // return all pairs of integers that sum to S
    return sums;
}

twoSum([3, 5, 2, -4, 8, 11], 7); // [ [ 5, 2 ], [ -4, 11 ] ]    