// Task-4
let str: string = '   dirty string   ';
let withoutGap = str.trim();
console.log(withoutGap);

// Task-5
function stringToArray(str: string): string[] {
    if (str) {
        let split = str.split(' ');
        return split;
    }
    return ['']
}
console.log(stringToArray('Ревуть воли як ясла повні'));

// Task-6
let numbers: number[] = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let stringsArr: string[] = numbers.map(number => number + '');
console.log(stringsArr);
