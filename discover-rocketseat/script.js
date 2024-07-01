function toggleMode() {
  const body = document.documentElement;
  body.classList.toggle('light')

  const image = document.querySelector("#profile img")

  if(body.classList.contains('light')) {
      image.setAttribute('src', './assets/avatar-light.png')
  } else {
    image.setAttribute('src', './assets/avatar-dark.png')
  }
}