const canvas = document.getElementById('tela-desenho')
const toolbar = document.getElementById('barra-de-ferramentas')
const ctx = canvas.getContex('2d')

const canvasOffsetX = canvas.offsetLeft
const canvasOffsetY = canvas.offsetTop

canvas.width = window.innerWidth - canvasOffsetX
canvas.hidden = window.innerHeight -canvasOffsetY

let isPainting = false
let lineWith = 5
let startX
let startY

toolbar.addEventListener('click', event => {
    if(event.target.id === 'limpar') {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
})

toolbar.addEventListener('change', event => {
    if(event.target.id === 'traco') {
        ctx.strokeStyle = event.target.value
    }

    if(event.target.id === 'tamanho-pincel') {
        lineWith = event.target.value
    }
})

