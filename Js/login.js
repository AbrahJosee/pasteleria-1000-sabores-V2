/*
  login.js
  Script para la validación del formulario de inicio de sesión
*/

document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('formulario-login');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('password-error');

    form.addEventListener('submit', function(event) {
        // Prevenir el envío automático
        event.preventDefault();
        event.stopPropagation();
        
        let esValido = true;

        // 1. Validación de Correo
        // Requerido, Max 100
        const emailRegex = /@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
        if (emailInput.value.length === 0) {
            esValido = false;
            emailInput.classList.add('is-invalid');
            emailError.innerText = "El correo es requerido.";
        } else if (emailInput.value.length > 100) {
            esValido = false;
            emailInput.classList.add('is-invalid');
            emailError.innerText = "El correo no puede exceder los 100 caracteres.";
        } else if (!emailRegex.test(emailInput.value)) {
            esValido = false;
            emailInput.classList.add('is-invalid');
            emailError.innerText = "Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com.";
        } else {
            emailInput.classList.remove('is-invalid');
        }

        // 2. Validación Contraseña
        // Requerido, entre 4 y 10 caracteres
        if (passwordInput.value.length === 0) {
            esValido = false;
            passwordInput.classList.add('is-invalid');
            passwordError.innerText = "La contraseña es requerida.";
        } else if (passwordInput.value.length < 4 || passwordInput.value.length > 10) {
            esValido = false;
            passwordInput.classList.add('is-invalid');
            passwordError.innerText = "La contraseña debe tener entre 4 y 10 caracteres.";
        } else {
            passwordInput.classList.remove('is-invalid');
        }

        // Añadir clases de Bootstrap para mostrar errores (solo para campos vacíos)
        form.classList.add('was-validated');

        // Si todo es válido
        if (esValido) {
            form.classList.remove('was-validated');
            alert('¡Inicio de sesión exitoso!');
            // Aquí se enviaría el formulario
            // form.submit();
        }
    });
});