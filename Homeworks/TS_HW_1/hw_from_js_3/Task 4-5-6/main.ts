// Task-4

let QRLctU6P: number = 0;
while (QRLctU6P < 20) {
    document.write(`<div><h1>while ${QRLctU6P}</h1></div>`);
    QRLctU6P++;
}

// Task-5

let listOfItems: string[] = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul>`);
for (const item of listOfItems) {
    document.write(` <li>${item}</li> `);
}
document.write(`</ul>`);

// Task-6
type ProductType = {
    title: string,
    price: number,
    image: string
};

let products: ProductType[] = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300×300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    }
];
for (const product of products) {
    document.write(`
             <div class=”product-card”>
                <h3 class=”product-title”>${product.title}. Price – ${product.price}</h3>
                <img src=”${product.image}” alt=”img” class=”product-image”>
             </div>
`)
}

