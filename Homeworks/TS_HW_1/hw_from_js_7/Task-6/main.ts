// Task-6
type DriverType = {
    name: string,
    age: number,
    gender: string
};

class Car {
    model: string;
    producer: string;
    year: number;
    maxSpeed: number;
    engineVolume: number;
    drive: () => void;
    info: () => void;
    increaseMaxSpeed: (speed: number) => void;
    changeYear: (year: number) => void;
    addDriver: (driver: DriverType) => void;
    driver?: DriverType;


    constructor(model: string, producer: string, year: number, maxSpeed: number, engineVolume: number) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
        this.drive = function (): void {
            console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год.`)
        };
        this.info = function (): void {
            for (let key in this) {
                console.log(key, this[key]);
            }
        };
        this.increaseMaxSpeed = function (speed: number): void {
            if (speed > 0) this.maxSpeed += speed;
        };
        this.changeYear = function (year: number): void {
            if (year > 1815) this.year = year;
        };
        this.addDriver = function (driver: DriverType): void {
            if (driver) this.driver = driver;
        };
    }
}


let car = new Car('BMW', 'BMW', 2018, 250, 1.6);
console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2019);
car.addDriver({name: 'Ivan', age: 25, gender: 'male'});
console.log(car);
