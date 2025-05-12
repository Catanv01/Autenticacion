/**
 * INDEX:
 * ------
* 1. Comprueba si un usuario ha iniciado sesión recuperando la clave 'Logueado' de localStorage.
* 2. Si ningún usuario ha iniciado sesión, redirige a la página de inicio de sesión.
* 3. Si un usuario ha iniciado sesión, muestra un mensaje de bienvenida con su nombre y apellido.
* 3. El botón de salir, al hacer clic, elimina la sesión del usuario de localStorage.
* 4. Muestra una alerta de despedida y redirige a la página de Login.
*/

const logout = document.getElementById("logout")
const Logueado = JSON.parse(localStorage.getItem("Logueado"))

if (!Logueado) {
    window.location.href = "login.html"
    
}else{
    const saludo = document.getElementById("saludo")
    saludo.innerHTML = `Bienvenido, ${Logueado.nombreCompleto}`
}
function salir(){
    alert("Hasta pronto!")
    localStorage.removeItem("Logueado")
    window.location.href = "login.html"
}
logout.addEventListener("click", salir)