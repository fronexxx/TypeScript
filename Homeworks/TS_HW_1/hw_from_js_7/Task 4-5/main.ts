// Task-4


class Client {
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;
    order: Products[]

    constructor(id: number, name: string, surname: string, email: string, phone: string, order: Products[]) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

class Products {
    title: string;
    price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }
}

let clients = [
    new Client(1, 'vasya', 'popov', 'asd@gmail.com', '0998997878', [new Products('tv', 10000), new Products('phone', 5000), new Products('phone', 5000)]),
    new Client(2, 'vasya', 'popov', 'asd@gmail.com', '0998997878', [new Products('tv', 10000), new Products('phone', 5000), new Products('tv', 10000), new Products('phone', 5000)]),
    new Client(3, 'vasya', 'popov', 'asd@gmail.com', '0998997878', [new Products('tv', 10000)]),
    new Client(4, 'vasya', 'popov', 'asd@gmail.com', '0998997878', [new Products('tv', 10000), new Products('phone', 5000)]),
    new Client(5, 'vasya', 'popov', 'asd@gmail.com', '0998997878', [new Products('tv', 10000), new Products('phone', 5000)]),
    new Client(6, 'vasya', 'popov', 'asd@gmail.com', '0998997878', [new Products('tv', 10000), new Products('phone', 5000), new Products('tv', 10000)]),
    new Client(7, 'vasya', 'popov', 'asd@gmail.com', '0998997878', [new Products('tv', 10000), new Products('phone', 5000), new Products('tv', 10000), new Products('phone', 5000), new Products('tv', 10000), new Products('phone', 5000)]),
    new Client(8, 'vasya', 'popov', 'asd@gmail.com', '0998997878', [new Products('tv', 10000), new Products('phone', 5000)]),
    new Client(9, 'vasya', 'popov', 'asd@gmail.com', '0998997878', [new Products('tv', 10000)]),
    new Client(10, 'vasya', 'popov', 'asd@gmail.com', '0998997878', [new Products('tv', 10000), new Products('phone', 5000)])

];
console.log(clients);

// Task-5
let sortFilter = (a: Client, b: Client): number => a.order.length - b.order.length;
console.log(clients.sort(sortFilter));
