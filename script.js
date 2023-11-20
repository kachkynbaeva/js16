
// const img = document.querySelector('#img')
const row = document.querySelector('.row')
const name = document.querySelector('#name')
const all = document.querySelector('#all')
const poisk = document.querySelector("#poisk")
const searchInput = document.querySelector("#searhInput")
const searchBox = document.querySelector('#hiddenWrapper')
const searchImg = document.querySelector('#searchImg')
const handleGetCocktails = () => {
    fetch(`https://www.thecocktaildb.com/api/json/v2/1/popular.php`)
        .then(res => res.json())
        .then(data => {
            data.drinks.forEach( drink =>{
                row.innerHTML+=`
                <div class="col-4">
                    <div class="box">
                        <img src="${drink.strDrinkThumb}"alt="" class="card-img-top">
                        <h4>${drink.strDrink}</h4>
                        <h4>${drink.strIngredient1}</h4>
                        <h4>${drink.strIngredient2}</h4>
                        <h4>${drink.strIngredient3}</h4>
                        <h4>${drink.strIngredient4}</h4>
                        
                        
                        
                    </div>
                </div>
               
                `
            })
        })
}

handleGetCocktails()



poisk.addEventListener(`click`,()=>{
    // const value = search.value
    //
    // console.log(value)
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
        .then(res =>res.json())
        .then(data=>{
            console.log(data)
        })
})

all.addEventListener('change', () => {
    if (all.checked) {
        row.classList.remove('hidden')
        searchBox.classList.add('hidden')
    }
})

searchInput.addEventListener('change', () => {
    if (searchInput.checked) {
        searchBox.classList.remove('hidden')
        row.classList.add('hidden')
    }
})



// submit.addEventListener(`click`,()=>{
//     fetch(`https://www.thecocktaildb.com/images/ingredients/${value}`)
//         .then(res =>res.json())
//         .then(data=>{
//             console.log(data)
//         })
//
// })





fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
.then(res =>res.json())
.then(data=> {
    console.log(data.drinks[0])
    let num = 0
    for (let i = 1; i < 4; i++) {
        num = i
    }
    const cocktail = data.drinks[0]

    res.innerHTML += `
 <div>
 <img src="https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient1}.png"/>
 <p>${drink.strIngredient1}</p>
 </div>
            <div>
<img src="https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient2}.png"/>
<p>${drink.strIngredient2}</p>
</div>
            <div>
<img src="https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient3}.png"/>
<p>${drink.strIngredient3}</p>
</div>
            <div>
<img src="https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient4}.png"/>
<p>${drink.strIngredient4}</p>
</div>
`
})

// poisk.addEventListener('click',()=>{
//     const value = searchInput.value;
//     fetch(`https://www.thecocktaildb.com/api/json/v2/1/popular.php?s=${value}`)
//         .then(res => res.json())
//         .then(json => {
//             console.log(json)
//             name.innerHTML = json.drinks[0].strDrink
//             compound.innerHTML = json.drinks[0].strInstructions
//             searchImg.innerHTML = json.drinks[0].strDrinkThumb
//         })
// })