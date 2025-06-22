// Task-3
const someForm = document.forms.namedItem('someForm') as HTMLFormElement;
const target = document.getElementById('target') as HTMLElement;

someForm?.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const nameInput = someForm.elements.namedItem('name') as HTMLInputElement;
    const surnameInput = someForm.elements.namedItem('surname') as HTMLInputElement;
    const ageInput = someForm.elements.namedItem('age') as HTMLInputElement;

    const nameValue: string = nameInput.value;
    const surnameValue: string = surnameInput.value;
    const ageValue: number = +ageInput.value;

    const obj = { nameValue, surnameValue, ageValue };
    console.log(obj);

    if (target) {
        target.innerText = `name: ${obj.nameValue}; surname: ${obj.surnameValue}; age: ${obj.ageValue};`;
    }
});

// Task-4
let currentNumber: number = +(localStorage.getItem('number') ?? '0');
currentNumber += 1;
localStorage.setItem('number', currentNumber.toString());

const numberDiv = document.getElementById('number') as HTMLElement | null;
if (numberDiv) {
    numberDiv.innerText = currentNumber.toString();
}
