// Task-13
type currencyArrayType = {
    currency: string,
    value: number
}

function exchange(sumUAH: number, currencyValues: currencyArrayType[], exchangeCurrency: string): number {
    let chosenCurrency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            chosenCurrency = item;
        }
    }
    if (chosenCurrency) {
        return sumUAH / chosenCurrency.value;
    }
    return -1;

}

let currencyArray: currencyArrayType[] = [
    {currency: 'USD', value: 41},
    {currency: 'EUR', value: 45}
];
let result = exchange(45000, currencyArray, 'USD');
console.log(result);
let result2 = exchange(45000, currencyArray, 'EUR');
console.log(result2)
