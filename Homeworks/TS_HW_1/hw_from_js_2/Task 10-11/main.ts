// Task-10

let number_1: number = 1;
let number_2: number = 0;

if (number_1 > number_2) {
    console.log(number_1);
}else if (number_2 > number_1) {
    console.log(number_2);
}else if (number_1 === number_2) {
    console.log('====');
}

// Task-11

let x: string | number | undefined | null = 0;

if (!x) {
    x = 'default';
    console.log(x);
}
