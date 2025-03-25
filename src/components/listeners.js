import { printItems } from './gallery.js'
import { searchPhotos } from '../main.js'

export const themeSwitch = () => {
  document.body.classList.toggle('dark')
}

export const listeners = () => {
  const darkmodebtn = document.querySelector('#darkmodebtn')
  darkmodebtn.addEventListener('click', () => {
    themeSwitch()
    const theme = document.body.classList.contains('dark')
    document.querySelector('#darkmodeicon').src = theme
      ? '/assets/light-mode.svg'
      : '/assets/dark-mode.svg'
  })

  const logo = document.querySelector('#logo')
  logo.addEventListener('click', () => {
    printTemplate()
  })
}

export const galleryListeners = async () => {
  const input = document.querySelector('#searchinput')
  const btn = document.querySelector('#searchbtn')
  btn.addEventListener('click', async () => {
    let images = await searchPhotos(input.value)
    if (images.response.results.length === 0) {
      input.value = `No se encontraron imágenes para "${input.value}". Aquí tienes algunas imágenes de gatos.`
      images = await searchPhotos('gatos')
    } else {
      input.value = ''
    }
    printItems(images.response.results)
  })
}
