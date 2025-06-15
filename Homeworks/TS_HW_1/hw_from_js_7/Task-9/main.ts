// Task-9
type User = {
    name: string;
    age: number;
    status: boolean;
};

const usersArrList: User[] = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
];

function myForEach<T>(arr: T[], callback: (item: T) => void): void {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

myForEach(usersArrList, (user) => {
    console.log(user.name);
});


// Array.prototype.myFilter = function (callback: string | number | boolean): usersListArr[] {
//     let result = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i])) {
//             result.push(this[i]);
//         }
//     }
//     return result;
// }
// console.log(usersArrList.myFilter(user => user.age > 30));
