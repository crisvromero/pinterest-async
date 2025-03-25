export const cardTemplate = (item) => {
  return `
    <li class="gallery-item" style="background-image: url(${item.urls.regular}); border: 10px solid ${item.color}">
      <div class="info">
        <div class="save-btn">
          <button>Guardar</button>
        </div>
        <div class="links">
          <a href=${item.links.html} class="full-link">${item.links.html}</a>
          <div>
            <a href=${item.urls.full} target="_blank" class="links-icon">
              <img src="/assets/upload.svg" alt="Upload icon"/>
            </a>
            <a href="#null" class="links-icon">
              <img src="/assets/more.svg" alt="More icon"/>
            </a>
          </div>
        </div>
        <div class="user-info">
          <img src="${item.user.profile_image.small}" alt="${item.user.name}" class="user-profile-img"/>
          <span>${item.user.name}</span>
        </div>
      </div>
    </li>
  `
}

export const galleryTemplate = () => {
  return `
    <ul class="gallery"></ul>
  `
}

export const printItems = (items) => {
  const gallery = document.querySelector('.gallery')
  gallery.innerHTML = ''
  for (const item of items) {
    gallery.innerHTML += cardTemplate(item)
  }
}
