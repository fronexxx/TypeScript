// Type model intersection

type UserTypen21VmFNbFH = {
    name: string;
    age: number;
    status: boolean;
};

type UserType2 = UserTypen21VmFNbFH & { id: number };

let usersLyRrqap2qSb: UserType2[] = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 1, name: 'petya', age: 30, status: true},
    {id: 1, name: 'kolya', age: 29, status: true},
    {id: 1, name: 'olya', age: 28, status: false},
    {id: 1, name: 'max', age: 30, status: true},
    {id: 1, name: 'anya', age: 31, status: false},
    {id: 1, name: 'oleg', age: 28, status: false},
    {id: 1, name: 'andrey', age: 29, status: true},
    {id: 1, name: 'masha', age: 30, status: true},
    {id: 1, name: 'olya', age: 31, status: false},
    {id: 1, name: 'max', age: 31, status: true}
];

type MyFn = (a: number) => void
