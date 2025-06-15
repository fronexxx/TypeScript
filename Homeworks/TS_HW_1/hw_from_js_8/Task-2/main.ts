// Task-2
type MyObjectType = {
    id: number,
    name: string,
    greeting: () => void,
    foo: () => void
};

type FunctionsType = { functionClone: () => void, key: string};

function cloner(obj: MyObjectType): MyObjectType {
    if (obj) {
        let functions: FunctionsType[] = [];
        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                const functionClone = obj[key].bind({});
                functions.push({functionClone, key});
            }
        }
        console.log(functions);
        const cloneObj = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
            cloneObj[func.key] = func.functionClone;
        }
        console.log(cloneObj);
        return cloneObj;
    }
    throw new Error('Error');
}

let clone = cloner({id: 1, name: 'kokos', greeting() {console.log('hello')}, foo() {console.log('foo')}});
clone.greeting();
