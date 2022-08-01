import { generateHome } from './home'

import { generateHeader } from './header'
import { generateMain } from './main'
import { generateFooter } from './footer'

const initWebsite = () => {
  document.body.append(generateHeader(), generateMain(), generateFooter())
  document.querySelector('#content').append(generateHome())
}

export { initWebsite }
