// Task-10
type ColorsType = {
    spades: string;
    hearts: string;
    diamonds: string;
    clubs: string;
};

type CardSuiteType = 'spades' | 'hearts' | 'diamonds' | 'clubs';

let cardSuite: CardSuiteType[] = ['spades', 'hearts', 'diamonds', 'clubs'];
let values: string[] = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
let colors: ColorsType = {
    spades: 'black',
    hearts: 'red',
    diamonds: 'red',
    clubs: 'black'
};

type CardType = {
    suite: CardSuiteType,
    value: string,
    color: string
};
let cards: CardType[] = [];

for (const suit of cardSuite) {
    for (const value of values) {
        cards.push({
            value: value,
            suite: suit,
            color: colors[suit]
        });
    }
}
console.log(cards);

// Знайти піковий туз
let spadeAce = cards.find(card => card.suite === 'spades' && card.value === 'ace');
console.log(spadeAce);

// Всі шістки
let sixes = cards.filter(card => card.value === '6');
console.log(sixes);

// Всі червоні карти
let redCards = cards.filter(card => card.color === 'red');
console.log(redCards);

// всі бубни
let diamonds = cards.filter(card => card.suite === 'diamonds');
console.log(diamonds);

// Всі хрести більше 9
let clubs = cards.filter(card => card.suite === 'clubs' && ['9', '10', 'ace', 'jack', 'queen', 'king'].includes(card.value));
console.log(clubs);


