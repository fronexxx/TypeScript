// class UserGen<T1> {
//     id: T1;
//     name: string;
//
//
//     constructor(id: T1, name: string) {
//         this.id = id;
//         this.name = name;
//     }
// }
//
// let userGen1 = new UserGen<number>(1, 'name');
// let userGen2 = new UserGen<string>('123', 'name2');
// let userGen3 = new UserGen<{ x: number; }>({x: 1231424}, 'name3');
//
// // let arrcCODQP9RIC: Array<number> = [22, 33, 44];


interface IUserLS {
    id: number;
    name: string;
}

let item = localStorage.getItem('user');

if (item) {
    let obj: IUserLS = JSON.parse(item) as IUserLS;
}

interface IDog {
    aka: string;
}

function foobarlhf33kZdC2D<T>(key: string) {
    let objJSON = localStorage.getItem(key);
    if (objJSON) {
        return JSON.parse(objJSON) as T;
    }
    return {} as T;
}

let iDog = foobarlhf33kZdC2D<IDog>('dog');
let iUser = foobarlhf33kZdC2D<IUser>('user');
