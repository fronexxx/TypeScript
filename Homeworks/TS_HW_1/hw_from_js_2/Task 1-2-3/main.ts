// Task-1
let arr: any[] = [23, 'hello', true, null, NaN, undefined, {value: 1}, []]
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);

// Task-2
type Book = {
    title: string;
    pageCount: number;
    genre: string;
};
let book1: Book = {title: 'A', pageCount: 100, genre: 'AA'};
let book2: Book = {title: 'B', pageCount: 200, genre: 'BB'};
let book3: Book = {title: 'C', pageCount: 300, genre: 'CC'};

// Task-3
type Author = {name: string, age: number};
type Book_4 = {
    title: string;
    pageCount: number;
    genre: string;
    authors: Author[];
}

let book4 = {
    title: 'asd',
    pageCount: 100,
    genre: 'action',
    authors: [
        {name: 'vasya', age: 23},
        {name: 'petya', age: 25}
    ]
};
