import { generateHome } from './home'
import { generateMenu } from './menu'
import { generateContact } from './contact'

const generateHeader = () => {
  //  Creating elements
  const headerNode = document.createElement('header')
  const titleNode = document.createElement('h1')
  const navNode = document.createElement('nav')
  const navButtonHome = document.createElement('button')
  const navButtonMenu = document.createElement('button')
  const navButtonContact = document.createElement('button')

  // Adding classes
  titleNode.id = 'title'
  navButtonHome.id = 'home'
  navButtonHome.classList.add('nav-button')
  navButtonHome.classList.add('active')
  navButtonMenu.id = 'menu'
  navButtonMenu.classList.add('nav-button')
  navButtonContact.id = 'contact'
  navButtonContact.classList.add('nav-button')

  // Setting text content
  titleNode.innerText = 'Cool restaurant'
  navButtonHome.innerText = 'Home'
  navButtonMenu.innerText = 'Menu'
  navButtonContact.innerText = 'Contact'

  // Adding event listeners
  const buttonArray = [navButtonHome, navButtonMenu, navButtonContact]

  buttonArray.forEach(button => {
    button.addEventListener('click', (e) => {
      // remove active class on all buttons
      buttonArray.forEach(button => {
        button.classList.remove('active')
      })
      // adds active class on pressed button
      e.target.classList.add('active')

      // Tab switching logic
      // TODO rewrite this crap
      const container = document.querySelector('#content')
      switch (e.target.innerText.toLowerCase()) {
        case 'home':
          container.replaceChildren(generateHome())
          break
        case 'menu':
          container.replaceChildren(generateMenu())
          break
        case 'contact':
          container.replaceChildren(generateContact())
          break
      }
    })
  })

  // Appending
  navNode.append(navButtonHome, navButtonMenu, navButtonContact)
  headerNode.append(titleNode, navNode)

  return headerNode
}

export { generateHeader }
