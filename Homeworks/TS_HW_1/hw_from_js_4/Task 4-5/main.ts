// Task-4
function printer(arr: any[]): void {
    for (const item of arr) {
        console.log(item);
    }
}

let mixedArray = [98, 'jdhjd', true, false, null];

printer(mixedArray)

// Task-5
function foobar(text: string): void {
    document.write(`<p>${text}</p>`);
}

foobar('TEXT');
