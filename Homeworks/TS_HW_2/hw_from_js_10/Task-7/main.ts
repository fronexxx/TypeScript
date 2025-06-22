let targetElement: HTMLElement | null = document.getElementById('target');
if (!targetElement) {
    throw new Error("Елемент з id 'target' не знайдено");
}

let targetText: string = targetElement.innerText.trim();
let number: number = parseInt(targetText, 10);

let storedPrice: string | null = localStorage.getItem('productPrice');
let storedLastUpdate: string | null = localStorage.getItem('lastUpdate');

let price: number = storedPrice !== null ? parseInt(storedPrice, 10): 0;
let lastUpdate: number = storedLastUpdate !== null ? parseInt(storedLastUpdate, 10): 0;

let now: number = Date.now();

if (now - lastUpdate >= 10000) {
    price += 10;
    localStorage.setItem('productPrice', price.toString());
    localStorage.setItem('lastUpdate', now.toString());
}

targetElement.innerText = `${price} UAH`;
