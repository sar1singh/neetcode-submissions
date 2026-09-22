class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        if( 1 > operations.length || operations.length > 1000)
            return 0;
        let sum = 0;
        let records = [];
        for(let op of operations) {
            if(!Number.isNaN(parseInt(op))) {
                records.push(parseInt(op));
            }
            if(op == '+') {
                let sum = records[records.length - 1] + records[records.length - 2]
                records.push(sum)
            }
            if(op == 'D') {
                let doublScore = 2 * records[records.length - 1];
                records.push(doublScore)
            }
            if(op == 'C') {
                records.length--;
            }
        }
        if(records.length > 0) {
            for(let r of records) {
                sum += r;
            }
        }
        return sum;
    }
}
