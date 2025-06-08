// Task-11
type CardsType = {
    suite: string,
    value: string
};

let cardSuite2: string[] = ['spades', 'hearts', 'diamonds', 'clubs'];
let values2: string[] = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
let cards2: CardsType[] = [];

for (const suit of cardSuite2) {
    for (const value of values2) {
        cards2.push({
            suite: suit,
            value: value
        });
    }
}
console.log(cards2);

type AccType = {
    spades: CardsType[],
    diamonds: CardsType[],
    hearts: CardsType[],
    clubs: CardsType[]
};

let suites = cards2.reduce((acc: AccType, card) => {
    if (card.suite === 'spades') {
        acc.spades.push(card);
    }else if (card.suite === 'diamonds') {
        acc.diamonds.push(card);
    }else if (card.suite === 'hearts') {
        acc.hearts.push(card);
    }else if (card.suite === 'clubs') {
        acc.clubs.push(card);
    }
    return acc;
}, {spades: [], diamonds: [], hearts: [], clubs: []});

console.log(suites);
