const menu = (() => {
  const menuDiv = document.createElement('div')
  menuDiv.className = 'tabContent'
  menuDiv.id = 'menuDiv'
 

  const menuItem = (name, imageLink, text, price) => {
    let menuItem = document.createElement('div')
    menuItem.className = 'menuItem'


      let p = document.createElement('div')
      p.textContent = `${name}: ${text}.` 
      p.className = 'menuText'

      let img = document.createElement('img')
      img.src = imageLink
      img.className = 'menuImage'

      let pricetext = document.createElement('div')
      pricetext.textContent = price
      pricetext.className = 'menuText'


      menuItem.appendChild(img)
      menuItem.appendChild(p)
      menuItem.appendChild(pricetext)



    return menuItem
  }

  let fish = menuItem('Fish', 'https://freepngimg.com/thumb/fish/22717-2-real-fish-transparent-background.png',
  'Delicious fish right from the aquarium', '5 treats')
  let chicken = menuItem('Chicken', 'https://www.kroger.com/product/images/xlarge/front/0004157310138',
  'Owner stolen fried chicken', '4 treats')
  let meat = menuItem('Meat', 'https://www.pngpix.com/wp-content/uploads/2016/02/Meat-PNG-image.png',
  'A lovely raw meat. Just like our ancestors used to eat', '7 treats')

  menuDiv.appendChild(fish)
  menuDiv.appendChild(chicken)
  menuDiv.appendChild(meat)

  return menuDiv
})

export { menu }