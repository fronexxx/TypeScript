// Task-11
function sum(arr: number[]): number {
    let basket = 0;
    for (const item of arr) {
        basket += item;
    }
    return basket;
}

console.log(sum([1, 2, 10]));

// Task-12
function swap(arr: number[], i1: number, i2: number): number[] | number {
    if (i1 < arr.length && i2 < arr.length) {
        let temp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;
        return arr;
    }
    return -Infinity;
}
console.log(swap([11, 22, 33, 44], 0, 1));
