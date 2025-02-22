let counter = 0
let newProduct = {
  image:'imgs/1.webp',
  rating: '4.94',
  value: '500 ккал.', 
  name: 'Стейк из грудки индейки охлаждённый Зелёная Линия',
  cost: '450'
}
if (localStorage.getItem("counter")) {
  counter = parseInt(localStorage.getItem("counter"))
}
else{
  localStorage.setItem('counter', counter)
}
function createProduct(card){
  counter = counter + 1
  localStorage.setItem('counter', counter)
  localStorage.setItem(`card${counter}`, JSON.stringify({
    image:card.image,
    rating:card.rating,
    value:card.value,
    name:card.name,
    cost:card.cost})
)};
function appendProducts(){
  let products = document.querySelector('.products')
  let keys = Object.keys(localStorage);
  keys.sort()
  keys.reverse()
  keys.forEach(key => {
    if (key !== "counter"){
      let card = JSON.parse(localStorage.getItem(key));
      let div = document.createElement('div');
      div.className = "products__card";
      div.innerHTML = ` <div class = "card__image-block">
            <img class = "card__image" src=${card.image}>
          </div>
          <div class = "card__description">
            <div class = "card__meta">
              <div class = "card__rating">${card.rating}</div>
              <div class = "card__value">${card.value}</div>
            </div>
            <div class = "card__name">${card.name}</div>
            <div class = "card__cost">${card.cost}</div>
          </div> `
      products.append(div)
    }
  })
}
createProduct(newProduct)
appendProducts()

