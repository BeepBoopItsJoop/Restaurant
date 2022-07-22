const container = document.querySelector('#content')

const menuDiv = document.createElement('div')
menuDiv.className = "menu"

const menuItem = document.createElement('div')
menuItem.className = "menu-item"
menuItem.innerText = 'Vegan'

const menuItem1 = document.createElement('div')
menuItem1.className = "menu-item"
menuItem1.innerText = 'Duda'

menuDiv.append(menuItem)
menuDiv.append(menuItem1)

container.append(menuDiv)

