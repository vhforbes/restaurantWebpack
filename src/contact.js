const contact = (() => {
  const contactDiv = document.createElement('div')
  contactDiv.className = 'tabContent'
  contactDiv.id = 'contactDiv'

  const adress = document.createElement('p')
  adress.textContent = 'Purring Street, red house roof.' 

  const number = document.createElement('p')
  number.innerHTML = 'Call us on: <br> Meow Pur Meow - Pur Pur Meow'


  contactDiv.appendChild(adress)
  contactDiv.appendChild(number)



  return contactDiv
})

export { contact }