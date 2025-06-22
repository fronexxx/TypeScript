// Task-6
let table: HTMLTableElement = document.getElementById('table') as HTMLTableElement;
const tableGeneratorForm = document.getElementById('tableGeneratorForm') as HTMLFormElement;
const linesInput = tableGeneratorForm.elements.namedItem('lines') as HTMLInputElement;
const cellsInput = tableGeneratorForm.elements.namedItem('cells') as HTMLInputElement;
const dataInput = tableGeneratorForm.elements.namedItem('data') as HTMLInputElement;



tableGeneratorForm.addEventListener('submit', (e: Event): void => {
    table.innerText = '';
    e.preventDefault();
    const linesValue: number = +linesInput.value;
    const cellsValue: number = +cellsInput.value;
    const dataValue: number | string = dataInput.value;

    console.log(linesValue, cellsValue, dataValue);

    for (let i = 0; i < linesValue; i++) {
        let tr: HTMLTableRowElement = document.createElement('tr');
        for (let j = 0; j < cellsValue; j++) {
            let td: HTMLTableCellElement = document.createElement('td');
            td.innerText = dataValue.toString();
            tr.appendChild(td);

        }
        table.appendChild(tr);

    }
});
