// Task-2
let mainDiv: HTMLDivElement = document.getElementById('main') as HTMLDivElement;

fetch('https://dummyjson.com/recipes')
    .then((response) => response.json())
    .then((recipesObjects): void => {
        let {recipes} = recipesObjects;

        for (const recipe of recipes) {
            let div: HTMLDivElement = document.createElement('div');
            div.classList.add('recipe');
            let divWithInfo: HTMLDivElement = document.createElement('div');
            divWithInfo.innerText = `
            "id": ${recipe.id},
            "userId": ${recipe.userId},
            "rating": ${recipe.rating},
            "reviewCount": ${recipe.reviewCount},
            "mealType": ${recipe.mealType},
            "instructions": ${recipe.instructions},
            "prepTimeMinutes": ${recipe.prepTimeMinutes},
            "cookTimeMinutes": ${recipe.cookTimeMinutes},
            "servings": ${recipe.servings},
            "difficulty": ${recipe.difficulty},
            "cuisine": ${recipe.cuisine},
            "caloriesPerServing": ${recipe.caloriesPerServing},
            "tags": ${recipe.tags},
            `
            let img: HTMLImageElement = document.createElement('img');
            img.src = recipe.image;
            let h3: HTMLHeadingElement = document.createElement('h3');
            h3.innerText = 'Ingredients:';

            let ul: HTMLUListElement = document.createElement('ul');
            for (const ingredient of recipe.ingredients) {
                let li: HTMLLIElement = document.createElement('li');
                li.innerText = ingredient;
                ul.appendChild(li);
            }
            let hr: HTMLHRElement = document.createElement('hr');


            div.append(divWithInfo, img, h3, ul, hr)
            mainDiv.appendChild(div);
        }
    });
