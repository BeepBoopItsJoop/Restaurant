const recipeArray = [
    ['Title', 'Description'],
    ['Title1', 'Description1'],
    ['Title2', 'Description2'],
    ['Title3', 'Description3']
]

const generateMenu = () => {
    const menuDiv = document.createElement('div')
    menuDiv.classList.add('menu')
    return menuDiv
}

const generateMenuItem = (title, desciption) => {
    //  Creating elements
    const menuItemDiv = document.createElement('div')
    const itemImagePlaceholderDiv = document.createElement('div')
    const itemContentDiv = document.createElement('div')
    const itemTitleSpan = document.createElement('span')
    const itemTextSpan= document.createElement('span')

    // Adding classes
    menuItemDiv.classList.add('menu-item')
    itemImagePlaceholderDiv.classList.add('item-image-placeholder')
    itemContentDiv.classList.add('item-content')
    itemTitleSpan.classList.add('item-title')
    itemTextSpan.classList.add('item-text')

    // Setting text content
    itemTitleSpan.innerText = title
    itemTextSpan.innerText = desciption

    // Appending
    itemContentDiv.append(itemTitleSpan, itemTextSpan)
    menuItemDiv.append(itemImagePlaceholderDiv, itemContentDiv)

    return menuItemDiv
}

const loadMenu = () => {
    const menuDiv = generateMenu()

    for (let i = 0; i < recipeArray.length; i++) {
             menuDiv.append(generateMenuItem(recipeArray[i][0], recipeArray[i][1]))
         }

    const container = document.querySelector('#content')
    container.replaceChildren(menuDiv)
    
}

export { loadMenu }