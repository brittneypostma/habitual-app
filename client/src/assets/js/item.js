function createItemTemplate(item) {
    console.log(item)
    const template = document.querySelector('#item-template')
    const product = template.content.cloneNode(true)
    const img = product.querySelector('.item-img')
    const name = product.querySelector('.item-name')
    const price = product.querySelector('.item-price')

      img.src = `../../${item.image}`
      img.alt = item.name
      name.innerText = item.name
      price.innerText = `$${item.price}`

  
    return product
  }
  
  async function loadItem() {
      const url = window.location.href
      const link = url.substr(url.lastIndexOf('/') + 1)
    const itemCards = document.querySelector('.item-cards')
    const item = await fetch(`/shop/${link}`)
      .then((res) => res.json())
      .catch((e) => console.error(e))
    
    itemCards.appendChild(createItemTemplate(item))
    // categories = [...productsCollection]
    // categories.forEach((category) => {
    //   let name = category.category
    //   let color
    //   switch (name) {
    //     case 'shoes':
    //       shoes = category.items
    //       color = 'var(--orange)'
    //       break
    //     case 'fashion':
    //       fashion = category.items
    //       color = 'var(--blue)'
    //       break
    //     case 'music':
    //       music = category.items
    //       color = 'var(--teal)'
    //       break
    //     case 'gaming':
    //       gaming = category.items
    //       color = 'var(--red)'
    //       break
    //     default:
    //       console.log({ category })
    //   }
    //   itemCards.appendChild(createItemTemplate(category.items, color))
    // })
  }
  
  loadItem()