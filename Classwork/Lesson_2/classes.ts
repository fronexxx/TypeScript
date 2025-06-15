// classes

class UserlxwHJ618 {
    // name: string;
    // age: number;
    // status: boolean;


    constructor(private _name: string, private _age: number, private _status: boolean) {
        this._name = _name;
        this._age = _age;
        this._status = _status;
    }

    public greeting() {
        console.log('Hello');
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get status(): boolean {
        return this._status;
    }

    set status(value: boolean) {
        this._status = value;
    }
}

let userlxJ618 = new UserlxwHJ618('name', 12, true);

console.log(userlxJ618.name);
userlxJ618.name = 'vasya';

class UserEp5uOmDR extends UserlxwHJ618{
    // id: number;


    constructor(name: string, age: number, status: boolean, private _id: number) {
        super(name, age, status);
        this._id = _id;
    }


    get id(): number {
        return this._id;
    }
}

let userEp5uR = new UserEp5uOmDR('aadada', 12, false, 3);
console.log(userEp5uR.name);
console.log(userEp5uR.id);
