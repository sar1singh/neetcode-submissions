class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    private dynamicArray:any = [];
    private n:Number;
    constructor(capacity: number) {
        this.dynamicArray.capacity = capacity
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.dynamicArray[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.dynamicArray[i] = n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if(this.getSize() == this.getCapacity()) {
            this.resize();
        }
        this.dynamicArray.push(n);
    }

    /**
     * @returns {number}
     */
    popback(): number {
        return this.dynamicArray.pop()
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this.dynamicArray.capacity = this.dynamicArray.capacity * 2; 
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.dynamicArray.length;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.dynamicArray.capacity;
    }
}
