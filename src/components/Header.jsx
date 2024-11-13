import React, { useEffect, useState } from 'react'

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState (false);

  useEffect(() => {
    const storedThemeMode = localStorage.getItem('themeMode')

    if (storedThemeMode === 'dark' || (!storedThemeMode && window.matchMedia('prefers-color-scheme: dark').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

  }, []);
  
  const toggleDarkMode = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      localStorage.setItem('themeMode', 'light');
      document.documentElement.classList.remove('dark');
    } else {
      setIsDarkMode(true);
      localStorage.setItem('themeMode', 'light');
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <>
    <header>
      <div className="container">
        <nav className="main-menu" aria-label="main navigation">
          <div className="main-menu-left">
            <img src={isDarkMode ? 'images/dark-logo-solid.svg' : 'images/logo-solid.svg'} alt="Silicon Logotype" />
            <a href="#">Features</a>
          </div>
          <div className="main-menu-right">
            <div className="dark-mode-switch">
              <span className="dark-mode-switch-span">Dark Mode</span>
              <label className="switch" aria-label="darkmode switch">
                <input id="darkModeSwitch" type="checkbox" checked={isDarkMode} onChange={toggleDarkMode}/>
                <span className="slider round"></span>
              </label>
            </div>
            <a href="#" className="btn-signin"><img src="images/icon-person.svg" alt="person" /><span>Sign in / up</span></a>
          </div>
        </nav>
      </div>
    </header>
    {/* Moved in this section because dark mode (isDarkMode in the img-tag below) didn't work as intended with images. Probably some React-state I'm not used to. */}
    <section className="manage-one-app">
      <div className="container">
        <div className="tron-city">
          <div className="one-app-explanation">
            <div className="one-app-explanation-content">
              <h1 className="display4">Manage All Your Money in One App</h1>
              <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
              <a href="#"><img src={isDarkMode ? 'images/dark-button-appstore.svg' : 'images/button-appstore.svg'} alt="App Store Logotype" /></a>
              <a href="#"><img src={isDarkMode ? 'images/dark-button-googleplay.svg' : 'images/button-googleplay.svg'} alt="Google Play Logotype" /></a>
            </div>
            <a href="#app-features" className="discover-more-btn">
              <div className="discover-more-btn-chevron"><img src="images/icon-chevron-down.svg" alt="chevron down" /></div>
              <span>Discover more</span>
            </a>
          </div>
          <div className="phone-display">
            <img className="image-phone-creditcard" src="images/iphone12-creditcard.svg" alt="phone credit card" />
            <img className="image-phone-mybudget" src="images/iphone12-mybudget.svg" alt="phone my budget" />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Header