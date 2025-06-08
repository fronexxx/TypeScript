// Task-11
let sumArrNumber = (arr: number[]): number => {
    let basket = 0;
    for (let item of arr) {
        basket += item;
    }
    return basket;
}
console.log(sumArrNumber([1, 2, 10]));

// Task-12
let swapArrNumber = (arr: number[], i1: number, i2: number): number[] => {
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
    return arr;
}
console.log(swapArrNumber([11, 22, 33, 44], 0, 2));
