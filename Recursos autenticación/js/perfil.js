const perfilForm = document.getElementById("perfilForm") 

const nombrePerfil = document.getElementById("nombre")
const apellidoPerfil = document.getElementById("apellido")
const emailPerfil = document.getElementById("email")
const passwordPerfil = document.getElementById("password")

const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
const usuarioLogueado = JSON.parse(localStorage.getItem("Logueado"))

// Mostrar los datos en el formulario
if (usuarioLogueado) {
    const usuarioEditar = usuarios.find((usuario) => usuario.email === usuarioLogueado.email)

    if (usuarioEditar) {
        nombrePerfil.value = usuarioEditar.nombre
        apellidoPerfil.value = usuarioEditar.apellido
        emailPerfil.value = usuarioEditar.email
        passwordPerfil.value = usuarioEditar.password
    } else {
        alert("Usuario logueado no encontrado")
    }
} else {
    alert("No hay sesión activa")
    window.location.href = "login.html"
}

// Modificar los datos
function modificarUsuario(e){
    e.preventDefault()

    const nuevoNombre = nombrePerfil.value
    const nuevoApellido = apellidoPerfil.value
    const nuevoEmail = emailPerfil.value
    const nuevoPassword = passwordPerfil.value

    const usuarioEditar = usuarios.find((usuario) => usuario.email === usuarioLogueado.email)

    if(usuarioEditar){
        usuarioEditar.nombre = nuevoNombre
        usuarioEditar.apellido = nuevoApellido
        usuarioEditar.email = nuevoEmail
        usuarioEditar.password = nuevoPassword

        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        localStorage.setItem("Logueado", JSON.stringify({
            nombreCompleto: nuevoNombre + " " + nuevoApellido,
            email: nuevoEmail
        }))
        alert("Perfil actualizado!")
    } else {
        alert("Usuario logueado no encontrado")
    }
}

perfilForm.addEventListener("submit", modificarUsuario)