document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const errorText = document.getElementById("errorText");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (!nombre || !apellido || !email || !password) {
            errorText.textContent = "Todos los campos son obligatorios.";
        } else if (password.length < 8) {
            errorText.textContent = "La contraseña debe tener al menos 8 caracteres.";
        } 
          
        
    });
});