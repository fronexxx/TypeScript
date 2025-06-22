// Task-5

type coursesArrayListType = {
    title: string,
    monthDuration: number,
    hourDuration: number,
    modules: string[]
};

let coursesArrayList: coursesArrayListType[] = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let container: HTMLDivElement = document.createElement('div');
document.body.appendChild(container);

for (const course of coursesArrayList) {
    let courseDiv: HTMLDivElement = document.createElement('div');
    courseDiv.classList.add('course');

    let titleDiv: HTMLDivElement = document.createElement('div');
    titleDiv.classList.add('property');
    titleDiv.innerHTML = `<strong>Title:</strong> ${course.title}`

    let month_hourDiv: HTMLDivElement = document.createElement('div');
    month_hourDiv.classList.add('flex');
    let monthDiv: HTMLDivElement = document.createElement('div');
    monthDiv.classList.add('property');
    monthDiv.innerHTML = `<strong>Month Duration:</strong> ${course.monthDuration}`;

    let hourDiv: HTMLDivElement = document.createElement('div');
    hourDiv.classList.add('property');
    hourDiv.classList.add('length');
    hourDiv.innerHTML = `<strong>Hour:</strong> ${course.hourDuration}`;

    let modulesDiv: HTMLDivElement = document.createElement('div');
    modulesDiv.classList.add('module');
    modulesDiv.innerHTML = '<strong>Modules:</strong>';

    let modulesUl: HTMLUListElement = document.createElement('ul');
    for (const module of course.modules) {
        let modulesLi: HTMLLIElement = document.createElement('li');

        modulesLi.innerText = module;
        modulesUl.appendChild(modulesLi);
    }
    modulesDiv.appendChild(modulesUl);

    month_hourDiv.append(monthDiv, hourDiv);
    courseDiv.append(titleDiv, month_hourDiv, modulesDiv);

    container.appendChild(courseDiv);

}
