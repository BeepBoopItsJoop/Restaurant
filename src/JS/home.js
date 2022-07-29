const generateHome = () => {
    //  Creating elements
    const homeDiv = document.createElement('div')
    const homeTextSpan = document.createElement('span')
    const homeButton = document.createElement('button')

    // Adding classes
    homeDiv.classList.add('home')
    homeTextSpan.classList.add('home-text')
    homeButton.classList.add('home-button')

    // Setting text content
    homeTextSpan.innerText = 'Healthy food since forever'
    homeButton.innerText = 'To Menu'
    
    // Appending
    homeDiv.append(homeTextSpan, homeButton)

    return homeDiv
}

const loadHome = () => {
    const homeDiv = generateHome()

    const container = document.querySelector('#content')
    container.replaceChildren(homeDiv)
}

export { loadHome }