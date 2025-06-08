// Task-4
type Users_HW2 = {name: string, username: string, password: string}

let user7: Users_HW2 = {name: 'lida', username: 'lida123', password: '67565'};
let user8: Users_HW2 = {name: 'kira', username: 'kira123', password: '4345'};
let user9: Users_HW2 = {name: 'petya', username: 'petya123', password: '4215'};
let user10: Users_HW2 = {name: 'diana', username: 'diana123', password: '87345'};

let users_HW2: Users_HW2[] = [
    {name: 'vasya', username: 'vasya123', password: '1234'},
    {name: 'maria', username: 'maria123', password: '2345'},
    {name: 'maks', username: 'maks123', password: '3456'},
    {name: 'yura', username: 'yura123', password: '4567'},
    {name: 'olya', username: 'olya123', password: '5678'},
    {name: 'igor', username: 'igor123', password: '8901'},
    user7,
    user8,
    user9,
    user10
]
console.log(users_HW2[0].password);
console.log(users_HW2[1].password);
console.log(users_HW2[2].password);
console.log(users_HW2[3].password);
console.log(users_HW2[4].password);
console.log(users_HW2[5].password);
console.log(users_HW2[6].password);
console.log(users_HW2[7].password);
console.log(users_HW2[8].password);
console.log(users_HW2[9].password);

// Task-5
type Temps = {
    day:  string,
    MorningTemp: number,
    DayTemp: number,
    EveningTemp: number
};

const temps: Temps[] = [
    {day: 'Monday', MorningTemp: 13, DayTemp: 19, EveningTemp: 14},
    {day: 'Tuesday', MorningTemp: 11, DayTemp: 17, EveningTemp: 14},
    {day: 'Wednesday', MorningTemp: 16, DayTemp: 24, EveningTemp: 18},
    {day: 'Thursday', MorningTemp: 20, DayTemp: 27, EveningTemp: 19},
    {day: 'Friday', MorningTemp: 15, DayTemp: 19, EveningTemp: 17},
    {day: 'Saturday', MorningTemp: 13, DayTemp: 19, EveningTemp: 15},
    {day: 'Sunday', MorningTemp: 17, DayTemp: 25, EveningTemp: 21},
]

// Task-6
let strValue: string | null = prompt('Enter a 1 0 -3');
if (strValue !== null) {
    let numValue = +strValue;
    if (numValue !== 0) {
        console.log('right');
    }else {
        console.log('wrong');
    }
}

