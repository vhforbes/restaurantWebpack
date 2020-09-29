const menu = (() => {
  const menuDiv = document.createElement('div')
  menuDiv.className = 'tabContent'
  menuDiv.id = 'menuDiv'

  menuDiv.textContent = 'I`m the menu div'

  return menuDiv
})

export { menu }