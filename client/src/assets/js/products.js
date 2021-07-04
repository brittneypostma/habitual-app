let productsCollection
let items
let categories = []
let shoes
let fashion
let gaming
let music

// function getItems() {
//   window.onload = () => {
//     fetch('/shop')
//       .then((res) => res.json())
//       .then((doc) => {
//         categories = doc
//         console.log({ categories })
//         products = doc.products
//         console.log({ products })
//         doc.products.map((category) => {
//           items = category.items
//           console.log({ items })
//           return items
//           // category.items.map((item) => {
//           //   return item
//           // })
//         })
//       })
//       .catch((e) => console.error(e))
//   }
// }

function createItemTemplate(items, color) {
  const template = document.querySelector('#item-template')
  const product = template.content.cloneNode(true)
  const img = product.querySelector('.item-img')
  const name = product.querySelector('.item-name')
  const price = product.querySelector('.item-price')
  const oldPrice = product.querySelector('.linethrough-price')
  const badge = product.querySelector('.category')
  console.log({ items })
  items.forEach((item) => {
    img.src = item.image
    img.alt = item.name
    name.innerText = item.name
    price.innerText = `$${item.price}`
    oldPrice.innerText = ''
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
    // categories.items.map((item) => {
    //   console.log({ item })
    // })
    itemCards.appendChild(createItemTemplate(category.items, color))
  })

  console.log({ shoes }, { fashion }, { music }, { gaming })
  // data.products.forEach((categories) => {
  //   categories = categories
  // categories.category.items.forEach(item => {

  // })
  // })
}

loadProducts()
