// Task-8
const items = Array.from({ length: 100 }, (value, i) => `Об'єкт ${i + 1}`);
let page = 0, perPage = 10;

const itemsDiv: HTMLDivElement = document.getElementById('items') as HTMLDivElement;
const prevBtn: HTMLButtonElement = document.getElementById('prev') as HTMLButtonElement;
const nextBtn: HTMLButtonElement = document.getElementById('next') as HTMLButtonElement;

function render(pageCount: number): void {
    let start: number = pageCount * perPage;
    let end: number = start + perPage;
    itemsDiv.innerText = items.slice(start, end).join('\n');
}

prevBtn.addEventListener('click', (): void => {
    if (page > 0) page--;
    render(page);
});

nextBtn.addEventListener('click', (): void => {
    if ((page + 1) * perPage < items.length) page++;
    render(page);
});

render(page);
