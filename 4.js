nombre = prompt("Ingresa tu nombre:")
contraseña = prompt("Ingresa tu contraseña:")

if (nombre === "admin" && contraseña === "1234") {
    alert("Bienvenido, admin!")
} else {
    alert("Error de inicio de sesión. Verifica tus credenciales.")
}
