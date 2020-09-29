// Function that return the home page inside a div

const home = (() => {
  let homeDiv = document.createElement('div')
  homeDiv.className = 'tabContent active'
  homeDiv.id = 'homeDiv'

  let homeImage = () => {
    const element = document.createElement('img')
    element.src = 'https://i.pinimg.com/originals/69/48/09/6948092cacec242746b6c8cb2a9a632a.jpg'
    return element
  }

  let title = () => {
    const element = document.createElement('h2')
    element.textContent = 'Tired of eating only pet food?'
    return element
  }

  let description = () => {
    const element = document.createElement('p')
    element.textContent = 'Here you can eat a lot of delicious tuna, salmon and even some chicken! None of that horrible thing humans give us. We`re open 24/7 so that you can sneak out and have a real treat here! Don`t miss out!'
    return element
  }
  
  homeDiv.appendChild(title())
  homeDiv.appendChild(description())
  homeDiv.appendChild(homeImage())   
    
  return homeDiv
})

  //Exporting module
export { home }
