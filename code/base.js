
const tool = document.querySelector('#tool')
const look = document.querySelector('#look')
const make = localStorage.getItem('make') ?? 'github'

tool.value = make
look.setAttribute('href', `look/${make}.css`)

tool.addEventListener('change', (e) => {
  const make = e.target.value
  look.setAttribute('href', `look/${make}.css`)
  localStorage.setItem('make', make)
})
