// DOM Типізація

// let elementsByClassNameTarget: HTMLCollectionOf<Element> = document.getElementsByClassName('target');
// console.log(elementsByClassNameTarget);
//
// let elementsByTagNameDiv: HTMLCollectionOf<HTMLDivElement> = document.getElementsByTagName('div');
//
// let forms: HTMLCollectionOf<HTMLFormElement> = document.forms;
// let f1: HTMLFormElement = forms[0];
// // console.log(f1.username);
// let f1Element: HTMLInputElement = f1['username'];
// console.log(f1Element);


// let htmlParagraphElement: HTMLParagraphElement = document.createElement('p');

type UsersArrType = {
    name: string,
    age: number,
    status: boolean
};

let usersArr: UsersArrType[] = [
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

for (const user of usersArr) {

    let div: HTMLDivElement = document.createElement('div');

    div.innerText = `Name: ${user.name}`;
    document.body.appendChild(div);
}
