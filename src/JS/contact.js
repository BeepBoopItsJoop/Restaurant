const generateContact= () => {
    //  Creating elements
    const contactDiv = document.createElement('div')
    const ownerDiv = document.createElement('div')
    const ownerTextSpan = document.createElement('span')
    const ownerImageDiv = document.createElement('div')
    const ownerText1Span = document.createElement('span')
    const contactInfoDiv = document.createElement('div')
    const phoneSpan = document.createElement('span')
    const emailSpan = document.createElement('span')
    
    // Adding classes
    contactDiv.classList.add('contact')
    ownerDiv.classList.add('owner')
    ownerTextSpan.classList.add('owner-text')
    ownerImageDiv.classList.add('owner-image')
    ownerText1Span.classList.add('owner-text1')
    contactInfoDiv.classList.add('contact-info')
    phoneSpan.classList.add('phone')
    emailSpan.classList.add('email')

    // Setting text content
    ownerTextSpan.innerText = 'Brought to you with love by'
    ownerText1Span.innerText = 'Me'
    phoneSpan.innerText = '123 456 789'
    emailSpan.innerText = 'beepboopitsthejoop@gmail.com'

    // Appending
    ownerDiv.append(ownerTextSpan, ownerImageDiv, ownerText1Span)
    contactInfoDiv.append(phoneSpan, emailSpan)

    contactDiv.append(ownerDiv, contactInfoDiv)

    return contactDiv
}

export { generateContact }