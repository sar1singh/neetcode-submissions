class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let max = -1;
        let n = arr.length;
        let current = 0;

        for(let i = n-1; i >=0; i--) {
            current = arr[i];
            arr[i] = max
            if(current > max) {
                max = current
            }
        }
        return arr;
    }
}
