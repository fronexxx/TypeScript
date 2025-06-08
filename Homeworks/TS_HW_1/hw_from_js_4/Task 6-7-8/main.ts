// Task 6
function foobar2(text: string): void {
    document.write(`
                    <ul>
                        <li>${text}</li>
                        <li>${text}</li>
                        <li>${text}</li>
                    </ul>
    
                    `)
}

foobar2('hello world');

// Task 7
function task(text2: string, counter: number): void {
    document.write('<ul>')
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text2}</li>`);
    }

    document.write('</ul>')
}

task('hello okten', 4);

// Task-8
type Primitive = string | number | boolean;

function primitives(arrayOfPrimitives: Primitive[]): void {
    document.write('<ul>');
    for (let item of arrayOfPrimitives) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}

primitives([55, true, 'hsjadg', 34, false]);
