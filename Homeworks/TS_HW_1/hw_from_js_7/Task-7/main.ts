// Task-7


class Car2 {
    model: string;
    producer: string;
    year: number;
    maxSpeed: number;
    engineVolume: number;
    driver?: DriverType;

    constructor(model: string, producer: string, year: number, maxSpeed: number, engineVolume: number) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive(): void {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год.`)
    };
    info(): void {
        for (let key in this) {
            console.log(key, this[key]);
        }
    };
    increaseMaxSpeed(speed: number): void {
        if (speed > 0) this.maxSpeed += speed;
    };
    changeYear(year: number): void {
        if (year > 1815) this.year = year;
    };
    addDriver(driver: DriverType) {
        if (driver) this.driver = driver;
    };
}

let car2 = new Car2('BMW', 'BMW', 2018, 250, 1.6);
console.log(car2);

car2.drive();
car2.info();
car2.increaseMaxSpeed(100);
car2.changeYear(2019);
car2.addDriver({name: 'Ivan', age: 25, gender: 'male'});
console.log(car2);
