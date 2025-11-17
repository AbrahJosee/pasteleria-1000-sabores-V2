document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('formulario-login');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('password-error');

    form.addEventListener('submit', function(event) {
        
        event.preventDefault();
        event.stopPropagation();
        
        let esValido = true;

        
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

        
        form.classList.add('was-validated');

        
        if (esValido) {
            form.classList.remove('was-validated');
            alert('¡Inicio de sesión exitoso!');
            
        }
    });
});