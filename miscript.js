let btnoscuro = document.querySelector('#btnoscuro')
let btnclaro = document.querySelector('#btnclaro')
let ModoOscuro = localStorage.getItem('ModoOscuro') ?? 'Claro'

if(localStorage.getItem('ModoOscuro')) {
    ModoOscuro = localStorage.getItem('ModoOscuro')
} else {
    localStorage.setItem('ModoOscuro', 'Claro')
}
if(ModoOscuro == 'Oscuro') {
    document.body.classList.add('ModoOscuro')
}
btnoscuro.addEventListener('click', () => {
    document.body.style.backgroundColor = "#000000"
    document.body.style.color = "#ffffff"
    document.body.classList.add('ModoOscuro')
    localStorage.setItem('ModoOscuro', 'Oscuro')
})
btnclaro.addEventListener('click', () => {
    document.body.style.backgroundColor = "#ffffff"
    document.body.classList.remove('ModoOscuro')
    localStorage.setItem('ModoOScuro', 'Claro')
})