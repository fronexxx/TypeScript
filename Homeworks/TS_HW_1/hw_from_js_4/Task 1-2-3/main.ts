// Task-1
function square(aNum: number, bNum: number): number {
    return aNum * bNum;
}

let S = square(10, 5);
console.log(S);

// Task-2
function roundSquare(radius1: number): number {
    let result = Math.PI * radius1 * radius1;
    return result;
}

console.log(roundSquare(5));

// Task-3
function squareCilindre(radius: number, height: number): number {
    return 2 * Math.PI * radius * height;
}

console.log(squareCilindre(4, 10));
