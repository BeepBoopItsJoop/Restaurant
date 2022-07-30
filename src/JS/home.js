import { generateMenu } from './menu';


const generateHome = () => {
    //  Creating elements
    const homeDiv = document.createElement('div')
    const homeTextSpan = document.createElement('span')
    const homeButton = document.createElement('button')
    const homespantest = document.createElement('span')

    // Adding event listeners
    homeButton.addEventListener('click', () => {
        document.querySelector('#menu').click()
    })

    // Adding classes
    homeDiv.classList.add('home')
    homeTextSpan.classList.add('home-text')
    homeButton.classList.add('home-button')
    homespantest.classList.add('home-button-arrow')

    // Setting text content
    homeTextSpan.innerText = 'Healthy food since forever'
    homeButton.innerText = 'To Menu'
    homespantest.innerText = '»'
    
    // Appending
    homeButton.append(homespantest)
    homeDiv.append(homeTextSpan, homeButton)

    return homeDiv
}

export { generateHome }