/** 
 * REGISTRO:
 * ---------
 * 1. Capturar con un selector el formulario de registro.
 * 2. Escuchar el evento submit del formulario
 * 3. Capturar los valor de registro en constantes: nombre, apellido, etc... 
 * 5. Definir un arreglo Usuarios que recupere los usuarios existentes en Local Storage
 * 6. Buscar por email si ya es un Usuario Registrado 
 * 7. Si ya está registrado mostrar una alerta, limpiar formurio y retornar
 * 8. Si no lo está, guarda el nuevo usuario en localStorage. 
 * 9. Redirige a la página de inicio de sesión tras un registro exitoso.
 */

const registroForm = document.getElementById("registroForm")

function registrarUsuario(e){
    e.preventDefault()
    const nombreValor = document.getElementById("nombre").value
    const apellidoValor = document.getElementById("apellido").value
    const emailValor = document.getElementById("email").value
    const passwordValor = document.getElementById("password").value

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
    const existeUsuario = usuarios.find((usuario) => usuario.email === emailValor)
    
    if (existeUsuario) {
        alert("El usuario ya está registrado")
        registroForm.reset()
        return
    }
    const usuario = {
        nombre: nombreValor,
        apellido: apellidoValor,
        email: emailValor,
        password: passwordValor
    }
    usuarios.push(usuario)
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    alert("usuario creado con éxito!!!")
    window.location.href = "login.html"
    
}

registroForm.addEventListener("submit", registrarUsuario)