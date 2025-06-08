// Task-6
let foobarTxt = (text: string): void => {
    document.write(`
              <ul>
                <li>${text}</li>
                <li>${text}</li>
                <li>${text}</li>
              </ul>
            `)
}
foobarTxt('hello okten');

// Task-7
let foo = (text: string, counter: number): void => {
    document.write('<ul>')
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`);

    }


    document.write('</ul>')
}
foo('hello okten', 4);

// Task-8
type primitivesArrType = string | number | boolean;

let primitivesArr = (arrayOfPrimitives: primitivesArrType[]): void => {
    document.write('<ul>');
    for (const item of arrayOfPrimitives) {
        document.write(`<li>${item}</li>`);
    }

    document.write('</ul>');

};

primitivesArr([55, true, 'hsjadg', 34, false]);
