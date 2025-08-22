// Task-1
class UserData {
    // id: number;
    // name: string;
    // surname: string;
    // email: string;
    // phone: string;
    //
    // constructor(id: number, name: string, surname: string, email: string, phone: string) {
    //     this.id = id;
    //     this.name = name;
    //     this.surname = surname;
    //     this.email = email;
    //     this.phone = phone;
    // }

    constructor(private _id: number, private name: string, private surname: string, private email: string, private phone: string) {

    }


    get id(): number {
        return this._id;
    }
}
// const user = new UserData(1, 'Kokos', 'Kokosova', 'qwe@gmail.com', '0678901234');
// console.log(user);
//
// const usersAllList: UserData[] = [
//     new UserData(4, 'nika', 'ogneva', 'nika@gmail.com', '0777777654'),
//     new UserData(3, 'petya', 'petrov', 'zxc@gmail.com', '0888887654'),
//     new UserData(5, 'name', 'surname', 'sss@gmail.com', '0555557654'),
//     new UserData(2, 'vasya', 'vasyov', 'asd@gmail.com', '0999997654'),
//     new UserData(6, 'nastya', 'nastyova', 'dfg@gmail.com', '0678765432'),
//     new UserData(8, 'kolya', 'kolyan', 'kolich@gmail.com', '0665557654'),
//     new UserData(1, 'Kokos', 'Kokosova', 'qwe@gmail.com', '0678901234'),
//     new UserData(7, 'sofi', 'solovyova', 'sofiya@gmail.com', '0555557654'),
//     new UserData(10, 'named', 'surnamed', 'lkj@gmail.com', '0555557654'),
//     new UserData(9, 'inna', 'solovey', 'inna@gmail.com', '0988986755')
//
// ];
// console.log(usersAllList);

// Task-2
const usersAllList: UserData[] = [
    new UserData(4, 'nika', 'ogneva', 'nika@gmail.com', '0777777654'),
    new UserData(3, 'petya', 'petrov', 'zxc@gmail.com', '0888887654'),
    new UserData(5, 'name', 'surname', 'sss@gmail.com', '0555557654'),
    new UserData(2, 'vasya', 'vasyov', 'asd@gmail.com', '0999997654'),
    new UserData(6, 'nastya', 'nastyova', 'dfg@gmail.com', '0678765432'),
    new UserData(8, 'kolya', 'kolyan', 'kolich@gmail.com', '0665557654'),
    new UserData(1, 'Kokos', 'Kokosova', 'qwe@gmail.com', '0678901234'),
    new UserData(7, 'sofi', 'solovyova', 'sofiya@gmail.com', '0555557654'),
    new UserData(10, 'named', 'surnamed', 'lkj@gmail.com', '0555557654'),
    new UserData(9, 'inna', 'solovey', 'inna@gmail.com', '0988986755')

];
const filterUsers = usersAllList.filter(user => user.id % 2 === 0);
console.log(filterUsers);

// Task-3
console.log(usersAllList.sort((user1, user2) => user1.id - user2.id));
