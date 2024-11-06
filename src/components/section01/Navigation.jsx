import React from 'react'

const Navigation = () => {
  return (
    <header>
      <div className="container">
        <nav className="main-menu" aria-label="main navigation">
          <div className="main-menu-left">
            <img src="images/logo-solid.svg" alt="Silicon Logotype" />
            <a href="#">Features</a>
            <a href="#">Contact</a>
          </div>
          <div className="main-menu-right">
            <div className="dark-mode-switch">
              <span className="dark-mode-switch-span">Dark Mode</span>
              <label className="switch">
                <input id="darkModeSwitch" type="checkbox"/>
                {/* <input id="darkModeSwitch" type="checkbox" onChange="toggleDarkMode()"/> */}
                <span className="slider round"></span>
              </label>
            </div>
            <a href="#" className="btn-signin"><img src="images/icon-person.svg" alt="person" /><span>Sign in / up</span></a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navigation




// Comment out Javascript file - Easier to find - Credit: Joakim@ECUtbildning

/* const darkmodeSwitch = document.querySelector('#darkmode-switch')
const hasDarkmode = localStorage.getItem('darkmode')

if(hasDarkmode == null) {
  if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enableDarkMode()
  } else {
    disableDarkMode()
  }
} else if(hasDarkmode === 'on') {
  enableDarkMode()
} else if(hasDarkmode === 'off') {
  disableDarkMode()
} */


/* darkmodeSwitch.addEventListener('change', () => {
  if(darkmodeSwitch.checked) {
    enableDarkMode()
    localStorage.setItem('darkmode', 'on')
  } else {
    disableDarkMode()
    localStorage.setItem('darkmode', 'off')
  }
})

function enableDarkMode() {
  darkmodeSwitch.checked = true
  document.documentElement.classList.add('dark')
}
function disableDarkMode() {
  darkmodeSwitch.checked = false
  document.documentElement.classList.remove('dark')
} */