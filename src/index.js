import _ from 'lodash'

import { home } from './home'
import { menu } from './menu'
import { contact } from './contact'

// Executing Home Module

const mainContent = document.querySelector('#content')

const buttonsDiv = document.createElement('div')
buttonsDiv.className = 'buttonsDiv'
  mainContent.appendChild(buttonsDiv)


// Create and place buttons on the buttons Div

let tabBtn = (tabName) => {

  const tabBtn = document.createElement('button')
  tabBtn.textContent = tabName
  tabBtn.className = 'tabButtons'
  tabBtn.id = tabName
  
  buttonsDiv.appendChild(tabBtn)

  return tabBtn
}

buttonsDiv.appendChild(tabBtn('Home'))
buttonsDiv.appendChild(tabBtn('Menu'))
buttonsDiv.appendChild(tabBtn('Contact'))


  // Append Content to the document

mainContent.appendChild(home())
mainContent.appendChild(menu())
mainContent.appendChild(contact())

  // Hide all divs

const hideContent = () => { 
  let tabContent = document.querySelectorAll('.tabContent')
  tabContent.forEach(Element => {
    Element.style.display = 'none'
  })
}
hideContent()

  // Show active div by default

const showActive = () => {
  let active = document.querySelector('.active')
  active.style.display = 'block'
}
showActive()

  // Set home button defaut

let homeButton = document.querySelector('#Home')
homeButton.className = 'tabButtons activeBtn'


  // Listen to buttons click and change class of each
const listenClick = () => {
  let tabButtons = document.querySelectorAll('.tabButtons')
  tabButtons.forEach(Element => {
    Element.addEventListener('click', button => {

      name = button.target.id

      // Pegar cada div por id e manipular suas classes
      let home = document.querySelector('#homeDiv')
      let menu = document.querySelector('#menuDiv')
      let contact = document.querySelector('#contactDiv')

      // Pegar cada botão por id e manipular suas classes
      let homeButton = document.querySelector(`#Home`)
      let menuButton = document.querySelector(`#Menu`)
      let contactButton = document.querySelector(`#Contact`)

      if (name == 'Home') {
        // Set active for the divs
        home.className = 'tabContent active'
        menu.className = 'tabContent'
        contact.className = 'tabContent'
        // Set active fot the buttons
        homeButton.className = 'tabButtons activeBtn'
        menuButton.className = 'tabButtons'
        contactButton.className = 'tabButtons'

      } else if (name == 'Menu') {
        home.className = 'tabContent'
        menu.className = 'tabContent active'
        contact.className = 'tabContent'
        // Buttons
        homeButton.className = 'tabButtons'
        menuButton.className = 'tabButtons activeBtn'
        contactButton.className = 'tabButtons'

      } else if (name == 'Contact') {
        home.className = 'tabContent'
        menu.className = 'tabContent'
        contact.className = 'tabContent active'
        // Buttons
        homeButton.className = 'tabButtons'
        menuButton.className = 'tabButtons'
        contactButton.className = 'tabButtons activeBtn'
      }

      
      hideContent()
      showActive()
    })
  })
}

listenClick()
  