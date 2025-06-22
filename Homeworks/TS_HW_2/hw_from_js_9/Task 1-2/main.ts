// Task 1-2
document.write('Task 1-2')
let div: HTMLDivElement = document.createElement('div');

div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');

let h3: HTMLHeadingElement = document.createElement('h3');
h3.innerText = 'lorem';
div.appendChild(h3);

let cloneDiv = div.cloneNode(true);
document.body.append(div, cloneDiv);

// Task-2
document.write('Task-2')
let arruLV4yNck: string[] = ['Main', 'Products', 'About Us', 'Contacts'];

let ul: HTMLUListElement = document.createElement('ul');
ul.classList.add('menu');
for (const item of arruLV4yNck) {
    let li: HTMLLIElement = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
}

document.body.appendChild(ul);
