// let a: number = 123;
// let b: boolean = true;
// let c: string = "Hello";

// function foo(arg1: number, arg2: number): number {
//     return arg1 + arg2;
// }
//
// foo(3, 4);

// let arr: any[] = ['str', 12, true, 12];
// arr.push(12)
// arr.push(12)
// arr.push(667)


// type
type UserType = {
    name: string;
    age: number;
    status: boolean;
    greeting: (str: string) => string;
};

let users: UserType[] = [
    {greeting:(str:string) => 'helllo1', name: 'vasya', age: 31, status: false},
    {greeting:(str:string) => 'helllo2', name: 'petya', age: 30, status: true},
];

// interface
interface IUser {
    name: string;
    age: number;
    status: boolean;
    greeting: (str: string) => string;
}

let usersI: IUser[] = [
    {greeting:(str:string) => 'helllo1', name: 'vasya', age: 31, status: false},
    {greeting:(str:string) => 'helllo2', name: 'petya', age: 30, status: true},
];

// class
class CUser {
    name: string;
    age: number;
    status: boolean;

    constructor(name: string, age: number, status: boolean) {
        this.name = name;
        this.age = age;
        this.status = status;
    }

    greeting() {
        console.log('asdasd');
    }
}

let usersC: CUser[] = [
    new CUser('name', 123, true),
    new CUser('age', 123, false),
];

// class через public
class PUser {

    constructor(public name: string, public age: number, public status: boolean) {
        this.name = name;
        this.age = age;
        this.status = status;
    }

    greeting() {
        console.log('asdasd');
    }
}

let usersP: PUser[] = [
    new PUser('name', 123, true),
    new PUser('age', 123, false),
];

console.log(users);
