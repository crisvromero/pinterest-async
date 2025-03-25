import './style.css'
import { createApi } from 'unsplash-js'
import { printHeaderTemplate } from './components/header.js'
import { printFooterTemplate } from './components/footer.js'
import { galleryTemplate, printItems } from './components/gallery.js'
import { listeners, galleryListeners } from './components/listeners.js'

const unsplash = createApi({
  accessKey: import.meta.env.VITE_ACCESS_KEY
})

export const searchPhotos = async (keyword) => {
  let images = await unsplash.search.getPhotos({
    query: keyword,
    page: 1,
    perPage: 30
  })
  return images
}

const printTemplate = async () => {
  document.querySelector('main').innerHTML = galleryTemplate()
  galleryListeners()

  const images = await searchPhotos('moon')
  printItems(images.response.results)
}

printHeaderTemplate()
printFooterTemplate()
printTemplate()
listeners()

console.log(import.meta.env.VITE_ACCESS_KEY)
