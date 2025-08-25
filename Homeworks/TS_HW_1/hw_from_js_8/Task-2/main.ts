// Task-2

type FunctionCloneObject = { functionClone: Function, key: string };

function cloner<T>(obj: T): T {
    if (obj) {
        let functions: Array<FunctionCloneObject> = [];

        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                // const functionClone = obj[key].bind({});
                const functionClone = (obj[key] as Function).bind({});
                functions.push({functionClone, key});
            }
        }
        console.log(functions);
        const cloneObj: T = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
            (cloneObj as any)[func.key] = func.functionClone;
        }
        console.log(cloneObj);
        return cloneObj;
    }
    throw new Error('Error');
}

let clone = cloner({id: 1, name: 'kokos', greeting() {console.log('hello')}, foo() {console.log('foo')}});
clone.greeting();

