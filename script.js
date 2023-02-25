function toggleMode() {
const html = document.documentElement

html.classList.toggle('light')

// pegar a tag img

const img = document.querySelector("#profile img")

if (html.classList.contains("light")) {
  // se tiver lightmode, adicionar imagem light
  img.setAttribute("src", "./assets/Mobile/pflight.png")
} else {
  // se tiver sem light mode, manter a imagem normal
  img.setAttribute("src", "./assets/Mobile/avatarpf.png")
}

const alt = document.querySelector("#profile img")

// substituir a imagem
if (html.classList.contains("light")) {
  alt.setAttribute("alt", "Menino tocando guitarra")
} else {
  alt.setAttribute("alt", "Profile pic")
}
}