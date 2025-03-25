export const headerTemplate = () => {
  return `
    <h1 id='logo'>I</h1>
    <input type="text" placeholder="Search" id="searchinput"/>
    <button id="searchbtn"><img src="/assets/search.svg" alt="Search icon"/></button>
    <button id="darkmodebtn"><img src="/assets/dark-mode.svg" alt="Dark mode icon" id="darkmodeicon"></button>
    <img src="/assets/profile.svg" alt="Profile image" class="profileimg"/>
  `
}

export const printHeaderTemplate = () => {
  document.querySelector('header').innerHTML = headerTemplate()
}
