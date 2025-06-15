// Task-1
type TitleMonthType = {
    title: string;
    monthDuration: number;
}

let coursesAndDurationArray3: TitleMonthType[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

type TitleMonthIdType = {
    title: string;
    monthDuration: number;
    id: number;
}
console.log(coursesAndDurationArray3.map((course: TitleMonthType, index: number): TitleMonthIdType => ({id: index + 1, ...course})));
