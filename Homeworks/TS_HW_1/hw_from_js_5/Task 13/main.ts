// Task-13

type CurrencyVluesType = {
    currency: string,
    value: number
}

let exchangeValue = (sumUAH: number, currencyValues: CurrencyVluesType[], exchangeCurrency: string): number => {
    let currencyChecker;
    for(let item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            currencyChecker = item;
        }
    }
    if (currencyChecker) {
        return sumUAH / currencyChecker.value;
    }
    return -1;
}

let currencyArray2: CurrencyVluesType[] = [
    {currency: 'USD', value: 41},
    {currency: 'EUR', value: 45}
];

let result1 = exchangeValue(45000, currencyArray2, 'USD');
console.log(result1);

let result3 = exchangeValue(45000, currencyArray2, 'EUR');
console.log(result3)
