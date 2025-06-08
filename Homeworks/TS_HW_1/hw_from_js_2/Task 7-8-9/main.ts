// Task-7

let time: number = 11;
if (time >= 0 && time < 15) {
    console.log('1')
}else if (time >= 15 && time < 30) {
    console.log('2');
}else if (time >= 30 && time < 45) {
    console.log('3');
}else if (time >= 45 && time < 60) {
    console.log('4')
}else {
    console.log('error');
}

// Task-8

let day: number = 11;

if (day >= 1 && day <= 10) {
    console.log('1');
}else if (day>=11 && day <=20) {
    console.log('2');
}else if (day>=21 && day <=31) {
    console.log('3');
}else {
    console.log('error');
}

// Task-9

let userKey: string | null = prompt();
if (userKey !== null) {
    let key = +userKey;

    switch (key) {
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;
        case 4:
            console.log('Thursday');
            break;
        case 5:
            console.log('Friday');
            break;
        case 6:
            console.log('Saturday');
            break;
        case 7:
            console.log('Sunday');
            break;
        default:
            console.log('error');
    }
}
