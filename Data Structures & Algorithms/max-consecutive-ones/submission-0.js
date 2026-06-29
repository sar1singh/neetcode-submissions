class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let count = 0;
        let max = 0;
        let n = nums.length
        for(let i = 0; i < n; i++) {
            if(nums[i] == 1) {
                count++
            } else {
                count = 0
            }
            if(count > max) max = count;
           
        }
        return max
    }
}
