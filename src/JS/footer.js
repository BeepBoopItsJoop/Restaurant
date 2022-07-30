const generateFooter = () => {
    const footerNode = document.createElement('footer')
    const pNode = document.createElement('p')
    const aNode = document.createElement('a')
    const imgNode = document.createElement('img')

    pNode.innerHTML = "&copy; 2022 Radoslav Ivanov"
    aNode.href = 'https://github.com/BeepBoopItsJoop'
    imgNode.classList.add('github')
    imgNode.src = './github-icon.svg'
    imgNode.alt = 'Github Link'

    aNode.append(imgNode)
    footerNode.append(pNode, aNode)

    return footerNode
}

export { generateFooter }