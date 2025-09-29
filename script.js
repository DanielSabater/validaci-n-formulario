document.getElementById('formulario').addEventListener('submit'), (event) => {
    event.preventDefault()
}

// validar campo nombre
let entradaNombre = document.getElementById('name')
let errorNombre = document.getElementById('nameError')

if (entradaNombre.value.trim() === '') {
    errorNombre.textContent = 'Por favor, introduci tu nombre'
    errorNombre.classList.add('error-message')
}else{
    errorNombre.textContent = ''
    errorNombre.classList.remove('error-message')
}

// validar correo electronico
let emailEntrada = document.getElementById('email')
let emailError = document.getElementById('emailError')
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Patron de validación básico

if (!emailPattern.test(emailEntrada.value)) {
    emailError.textContent = 'Por favor, introduci un mail valido'
    emailError.classList.add('error-message')
} else {
    emailError.textContent = ''
    emailError.classList.remove('error-message')
}

// validar contraseña

let contrasenaEntrada = document.getElementById('password')
let contrasenaError = document.getElementById('passwordError')

if (contrasenaEntrada.value.length < 8) {
    contrasenaError.textContent = 'Por favor, introduci una contraseña valida'
    contrasenaError.classList.add('error-message')
} else {
    contrasenaError.textContent = ''
    contrasenaError.classList.remove('error-message')
}

// si todos los campos son validos enviar formulario

if (!errornombre.textContent && !emailError.textContent && !contrasenaError.textContent) {
    
    //backend que reciba informacion
    alert ('El formulario se ha enviado con exito')
    document.getElementById('formulario').reset();
}