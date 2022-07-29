import '../style.css';
import { loadMenu } from './menu';
import { loadContact } from './contact';
import { loadHome } from './home';

const menuButton = document.querySelector('#menu')

menuButton.addEventListener('click', () => {
    // delete this latersdasdafsd
    loadMenu()
    menuButton.classList.add('active')
})

const contactButton = document.querySelector('#contact')

contactButton.addEventListener('click', () => {
    loadContact()
    contactButton.classList.add('active')
})

const homeButton = document.querySelector('#home')

homeButton.addEventListener('click', () => {
    loadHome()
    homeButton.classList.add('active')
})