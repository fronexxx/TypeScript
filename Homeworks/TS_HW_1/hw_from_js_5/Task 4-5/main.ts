// Task-4
let printerArray = (arr: any[]): void => {
    for (const item of arr) {
        console.log(item);
    }
}
let mixedArray2: any[] = [98, 'jdhjd', true, false, null];
printerArray(mixedArray2);

// Task-5
let paragraphCraetor = (text: string): void => {
    document.write(`<p>${text}</p>`)
}
paragraphCraetor('kokos');
