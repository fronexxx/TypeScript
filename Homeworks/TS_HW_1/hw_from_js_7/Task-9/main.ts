// Task-9


// Array.prototype.myForEach = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i]);
//     }
// }
// users.myForEach(user => console.log(user));

interface Array<T> {
    myFilter(callback: (value: T) => boolean): T[];
}

Array.prototype.myFilter = function<T> (callback: (value: T) => boolean): T[] {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
}

type Created = {
    name: string,
    age: number,
    status: boolean;
};

// @ts-ignore
let users: Created[] = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
console.log(users.myFilter(user => user.age > 30));
