let formcontacto = document.getElementById('contactform')
let arrayDatoscontacto = JSON.parse(localStorage.getItem('formulario')) ?? []



formcontacto.addEventListener('submit', (event) => {
    event.preventDefault()

    let nombre = document.getElementById('exampleFormControlInput1').value
    let telefono = document.getElementById('exampleFormControlInput2').value
    let email = document.getElementById('exampleInputEmail1').value
    let comentario = document.getElementById('exampleFormControlTextarea1').value

    let persona = {nombre: nombre, telefono: telefono, email: email, comentario: comentario}
    arrayDatoscontacto.push(persona) 
    console.log(arrayDatoscontacto)
    arrayDatoscontacto.push (persona)
    localStorage.setItem('formulario', JSON.stringify(arrayDatoscontacto))
    formcontacto.reset()

})

