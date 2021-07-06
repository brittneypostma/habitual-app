function createItemTemplate(item) {
  console.log(item)
  const template = document.querySelector('#item-template')
  const product = template.content.cloneNode(true)
  const img = product.querySelector('.item-img')
  const name = product.querySelector('.item-name')
  const rating = product.querySelector('.rating')
  const reviews = product.querySelector('.reviews')
  const price = product.querySelector('.item-price')
  img.src = `../../${item.image}`
  img.alt = item.name
  name.innerText = item.name
  rating.innerText = `${item.rating} Rating`
  reviews.innerText = `${item.numReviews} Reviews`
  price.innerText = `$${item.price}`
  return product
}

async function loadItem() {
  const url = window.location.href
  const link = url.substr(url.lastIndexOf('/') + 1)
  const itemCards = document.querySelector('.item')
  const item = await fetch(`/shop/${link}`)
    .then((res) => res.json())
    .catch((e) => console.error(e))

  itemCards.appendChild(createItemTemplate(item))
}

loadItem()
