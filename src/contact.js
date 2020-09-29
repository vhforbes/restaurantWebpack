const contact = (() => {
  const contactDiv = document.createElement('div')
  contactDiv.className = 'tabContent'
  contactDiv.id = 'contactDiv'

  contactDiv.textContent = 'Hey I`m the contact div'

  return contactDiv
})

export { contact }