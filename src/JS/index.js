import '../style.css';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';

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