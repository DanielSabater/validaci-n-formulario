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
    errorNombre.textContent = ('')
    errorNombre.classList.remove('error-message')
}

// validar correo electronico
let emailEntrada = document.getElementById('email')
let emailError = document.getElementById('emailError')
let emailPattern =/^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Patron de validación básico

if (!emailPattern.test(emailEntrada.value)) {
    errorMail.textContent = 'Por favor, introduci un mail valido'
    emailError.classList.add('error-message')
} else {
    errorMail.textContent = ('')
    errorMail.classList.remove('error-message')
}

// validar contraseña


// si todos los campos son validos enviar formulario