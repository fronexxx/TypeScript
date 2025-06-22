// Task-1
const button: HTMLElement | null = document.getElementById('btn');

button?.addEventListener('click', (): void => {
    const textElement: HTMLElement | null = document.getElementById('text');
    if (textElement) {
        textElement.innerText = 'Text was clicked';
    }
});

// Task-2
const form: HTMLFormElement | null = document.forms.namedItem('f1');

form?.addEventListener('submit', (e: Event): void => {
    e.preventDefault();

    const ageInput = form.elements.namedItem('age') as HTMLInputElement | null;

    if (ageInput) {
        const age = parseInt(ageInput.value);

        if (age >= 18) {
            console.log("You're welcome");
        } else if (age > 0 && age < 18) {
            console.log("You're too young");
        } else {
            throw new Error('Age must be positive');
        }
    }
});
