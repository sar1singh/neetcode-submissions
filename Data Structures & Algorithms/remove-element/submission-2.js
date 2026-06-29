class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = 0;
        let n = nums.length
        for(let i=0; i < n; i++) {
            if(nums[i] != val) {
                nums[k] = nums[i]
                k++
            }
        }
        console.log(nums)
        return k

    }
}
