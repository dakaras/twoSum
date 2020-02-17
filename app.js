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