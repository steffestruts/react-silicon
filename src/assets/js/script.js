const enableDarkMode = () => {
  const darkModeSwitch = document.querySelector('#darkModeSwitch');
  darkModeSwitch.checked = true;
  localStorage.setItem('themeMode', 'dark');
  document.documentElement.classList.add('dark');
}

const disableDarkMode = () => {
  const darkModeSwitch = document.querySelector('#darkModeSwitch');
  darkModeSwitch.checked = false;
  localStorage.setItem('themeMode', 'light');
  document.documentElement.classList.remove('dark');
}

const defaultThemeMode = () => {
  const isDarkMode = localStorage.getItem(themeMode);

  if (isDarkMode == null){
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  } else if (isDarkMode === 'dark') {
    enableDarkMode();
  } else if (isDarkMode === 'light') {
    disableDarkMode();
  }
}

const darkModeSwitchInit = () => {
  const darkModeSwitch = document.querySelector('#darkModeSwitch');

  darkModeSwitch.addEventListener('change', () => {
    if (darkModeSwitch.checked) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  })
}

const accordionInit = () => {
  /* Credit W3schools https://www.w3schools.com/howto/howto_js_accordion.asp for JS-script */
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
        panel.style.backgroundColor = "White";
      }
    });
  }
}

defaultThemeMode();
darkModeSwitchInit();
accordionInit();