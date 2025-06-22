// Task-5
let input: HTMLInputElement = document.getElementById('xxx') as HTMLInputElement;
let resultDiv: HTMLElement = document.getElementById('result') as HTMLElement;
input.addEventListener('input', (event: Event): void => {
    const target = event.target as HTMLInputElement;
    const value: number = parseFloat(target.value);
    resultDiv.innerText = (value * 2.2).toString();
});


