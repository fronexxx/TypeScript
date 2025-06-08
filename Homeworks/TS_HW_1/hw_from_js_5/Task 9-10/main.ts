// Task-9
type usersArrType = {
    id: number,
    name: string,
    age: number
}

let ussersArr = (users: usersArrType[]): void => {
    for(let user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }
}

ussersArr([
    {id: 1, name: 'kokos', age: 32},
    {id: 2, name: 'kokos', age: 32},
    {id: 3, name: 'kokos', age: 32},
    {id: 4, name: 'kokos', age: 32},
    {id: 5, name: 'kokos', age: 32},
]);

// Task-10
let arrayMinValuesX = (array: number[]): number => {
    let min = array[0];
    for (let i = 1; i < array.length; i++){
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}
let minValues = arrayMinValuesX([1, 2, -100, 4, 5]);
console.log(minValues);
