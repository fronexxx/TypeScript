// Task-1

let cartsDiv: HTMLDivElement = document.getElementById('carts') as HTMLDivElement;

fetch('https://dummyjson.com/carts')
    .then((response) => response.json())
    .then((cartsObjects): void => {
        let {carts} = cartsObjects;
        console.log(carts);


        for (const cart of carts) {
            let div: HTMLDivElement = document.createElement('div');
            div.classList.add('cart-container');
            let divWithInfo: HTMLDivElement = document.createElement('div');
            divWithInfo.innerText = `
            "id": ${cart.id},
            "total": ${cart.total},
            "discountedTotal": ${cart.discountedTotal},
            "userId": ${cart.userId},
            "totalProducts": ${cart.totalProducts},
            "totalQuantity": ${cart.totalQuantity},  
           `
            let h3: HTMLHeadingElement = document.createElement('h3');
            h3.innerText = 'Products';

            let ol: HTMLOListElement = document.createElement('ol');
            for (const product of cart.products) {
                let li: HTMLLIElement = document.createElement('li');
                let info: HTMLParagraphElement = document.createElement('p');
                info.innerText = `
                 "id": ${product.id},
                 "title": ${product.title},
                 "price": ${product.price} $,
                 "quantity": ${product.quantity},
                 "total": ${product.total},
                 "discountPercentage": ${product.discountPercentage},
                 "discountedTotal": ${product.discountedTotal},
                 `

                let img: HTMLImageElement = document.createElement('img');
                img.src = product.thumbnail;
                li.append(info, img);
                ol.appendChild(li)
            }
            div.append(divWithInfo, h3, ol);
            cartsDiv.appendChild(div);
        }
    });
