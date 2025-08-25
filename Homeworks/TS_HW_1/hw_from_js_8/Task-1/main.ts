// Task-1

// type TitleMonthType = {
//     title: string;
//     monthDuration: number;
// }
//
// type TitleMonthIdType = TitleMonthType & { id: number; }


// interface TitleMonthType {
//     title: string;
//     monthDuration: number;
// }
//
// interface TitleMonthIdType extends TitleMonthType {
//     id: number;
// }

// class TitleMonthType {
//     title: string;
//     monthDuration: number;
//
//     constructor(title: string, monthDuration: number) {
//         this.title = title;
//         this.monthDuration = monthDuration;
//     }
// }
//
// class TitleMonthIdType extends TitleMonthType {
//     id: number;
//
//     constructor(title: string, monthDuration: number, id: number) {
//         super(title, monthDuration);
//         this.id = id;
//     }
// }

interface TitleMonthType {
    id?: number;
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
// console.log(coursesAndDurationArray3.map<TitleMonthIdType>((course: TitleMonthType, index: number): TitleMonthIdType => ({id: index + 1, ...course})));
console.log(coursesAndDurationArray3.map<TitleMonthType>((course: TitleMonthType, index: number): TitleMonthType => ({id: index + 1, ...course})));
