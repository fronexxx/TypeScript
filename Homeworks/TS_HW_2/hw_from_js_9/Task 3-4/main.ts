// Task-3
type fCcdZm7ziZCType = {
    title: string,
    monthDuration: number;
};

let coursesAndDurationArrayHT9DiLKJ: fCcdZm7ziZCType[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let wrapper: HTMLDivElement = document.createElement('div');
wrapper.classList.add('margin');
document.body.appendChild(wrapper);

for (const course of coursesAndDurationArrayHT9DiLKJ) {
    let div: HTMLDivElement = document.createElement('div');
    div.innerText = `${course.title} ${course.monthDuration}`;
    wrapper.appendChild(div);
}

// Task-4

for (const courseItem of coursesAndDurationArrayHT9DiLKJ) {
    let div2: HTMLDivElement = document.createElement('div');
    div2.classList.add('item');

    let h2: HTMLHeadingElement = document.createElement('h2');
    h2.classList.add('heading')
    h2.innerText = courseItem.title

    let p: HTMLParagraphElement = document.createElement('p');
    p.classList.add('description')
    p.innerText = `${courseItem.monthDuration}`

    div2.append(h2, p);


    document.body.appendChild(div2);
}


