let productsCollection
let items
let categories = []
let shoes
let fashion
let gaming
let music

function createItemTemplate(items, color) {
  const template = document.querySelector('#item-template')
  const product = template.content.cloneNode(true)
  const link = product.querySelector('.item-link')
  const img = product.querySelector('.item-img')
  const name = product.querySelector('.item-name')
  const price = product.querySelector('.item-price')
  const badge = product.querySelector('.category')
  console.log({ items })
  items.forEach((item) => {
    link.href = `/shop/${item.category}/${item.link}`
    img.src = item.image
    img.alt = item.name
    name.innerText = item.name
    price.innerText = `$${item.price}`
    badge.innerText = item.category
    badge.style.backgroundColor = color
  })

  return product
}

async function loadProducts() {
  const itemCards = document.querySelector('.item-cards')
  const collection = await fetch('/shop')
    .then((res) => res.json())
    .catch((e) => console.error(e))
  productsCollection = await collection.products
  categories = [...productsCollection]
  categories.forEach((category) => {
    let name = category.category
    let color
    switch (name) {
      case 'shoes':
        shoes = category.items
        color = 'var(--orange)'
        break
      case 'fashion':
        fashion = category.items
        color = 'var(--blue)'
        break
      case 'music':
        music = category.items
        color = 'var(--teal)'
        break
      case 'gaming':
        gaming = category.items
        color = 'var(--red)'
        break
      default:
        console.log({ category })
    }
    itemCards.appendChild(createItemTemplate(category.items, color))
  })
}

loadProducts()
