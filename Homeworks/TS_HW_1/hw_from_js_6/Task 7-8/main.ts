// Task-7
function sortNums(nums: number[], direction: string): number[] {
    if (direction === 'ascending') return nums.sort((a: number, b: number): number => a - b);
    if (direction === 'descending') return nums.sort((a: number, b: number): number => b - a);
    return nums;
}

let numsDes = sortNums([11, 22, 3], 'descending');
console.log(numsDes);
let numsAsc = sortNums([11, 22, 3], 'ascending');
console.log(numsAsc);

// Task-8
type coursesAndDurationArray2Type = {
    title: string,
    monthDuration: number
};
const coursesAndDurationArray2: coursesAndDurationArray2Type[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let map= coursesAndDurationArray2
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(course => course.monthDuration > 5)
    .map((value, index) => {
        return {
            id: index + 1,
            title: value.title,
            monthDuration: value.monthDuration
        }
    });
console.log(map);
