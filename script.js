    const firebaseConfig = {
    apiKey: "AIzaSyBEzyQD2CUrRbiComyExaZOcJ820yAl_1E",
    authDomain: "datos-formulario-ac741.firebaseapp.com",
    projectId: "datos-formulario-ac741",
    storageBucket: "datos-formulario-ac741.firebasestorage.app",
    messagingSenderId: "1045835472315",
    appId: "1:1045835472315:web:8f530ee1caa5434595b89e",
    measurementId: "G-YXJJTD9PVF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault()

    // validar campo nombre
    let entradaNombre = document.getElementById('name')
    let errorNombre = document.getElementById('nameError')

    if (entradaNombre.value.trim() === '') {
        errorNombre.textContent = 'Por favor, introduci tu nombre'
        errorNombre.classList.add('error-message')
    } else {
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
    let contrasenaPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/

    if (!contrasenaPattern.test(contrasenaEntrada.value)) {
        contrasenaError.textContent = 'La contraseña debe tener al menos 8 caracteres, números, mayúsculas, minúsculas y caracteres especiales'
        contrasenaError.classList.add('error-message')
    } else {
        contrasenaError.textContent = ''
        contrasenaError.classList.remove('error-message')
    }

    // si todos los campos son validos enviar formulario

    if (!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent) {

        //backend que reciba informacion

        db.collection("users").add({
            nombre: entradaNombre.value,
            email: emailEntrada.value,
            password: contrasenaEntrada.value
        })
            .then((docRef) => {
                alert('El formulario se ha enviado con exito',docRef.id);
                document.getElementById('formulario').reset();
            })
            .catch((error) => {
                alert(error)
            });
        
    }
})  