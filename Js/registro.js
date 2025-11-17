/*
  registro.js
  Script para la validación del formulario de registro 
*/

document.addEventListener('DOMContentLoaded', function() {
    
    // --- Lógica de Región y Comuna [cite: 495, 496, 497] ---
    const regionSelect = document.getElementById('region');
    const comunaSelect = document.getElementById('comuna');
    
    // Cargar regiones
    for (const region in regionesComunas) {
        regionSelect.innerHTML += `<option value="${region}">${region}</option>`;
    }
    
    // Evento al cambiar región
    regionSelect.addEventListener('change', function() {
        const regionSeleccionada = this.value;
        comunaSelect.innerHTML = '<option value="" selected disabled>Seleccione la comuna...</option>';
        
        if (regionSeleccionada) {
            comunaSelect.disabled = false;
            regionesComunas[regionSeleccionada].forEach(comuna => {
                comunaSelect.innerHTML += `<option value="${comuna}">${comuna}</option>`;
            });
        } else {
            comunaSelect.disabled = true;
        }
    });

    // --- Lógica de Validación de Formulario ---
    const form = document.getElementById('formulario-registro');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const confirmarEmailInput = document.getElementById('confirmar-email');
    const passwordInput = document.getElementById('password');
    const confirmarPasswordInput = document.getElementById('confirmar-password');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        
        let esValido = true;

        // 1. Validación de Correo [cite: 381, 484]
        // (Debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com)
        const emailRegex = /@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
        if (!emailRegex.test(emailInput.value)) {
            esValido = false;
            emailInput.classList.add('is-invalid');
            emailError.innerText = "Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com.";
        } else {
            emailInput.classList.remove('is-invalid');
        }

        // 2. Validación Confirmar Correo
        if (emailInput.value !== confirmarEmailInput.value) {
            esValido = false;
            confirmarEmailInput.classList.add('is-invalid');
        } else {
            confirmarEmailInput.classList.remove('is-invalid');
        }

        // 3. Validación Contraseña (4 a 10 caracteres) [cite: 384]
        if (passwordInput.value.length < 4 || passwordInput.value.length > 10) {
            esValido = false;
            passwordInput.classList.add('is-invalid');
        } else {
            passwordInput.classList.remove('is-invalid');
        }

        // 4. Validación Confirmar Contraseña
        if (passwordInput.value !== confirmarPasswordInput.value) {
            esValido = false;
            confirmarPasswordInput.classList.add('is-invalid');
        } else {
            confirmarPasswordInput.classList.remove('is-invalid');
        }

        // 5. Validación Bootstrap para campos 'required'
        if (!form.checkValidity()) {
            esValido = false;
        }

        // 6. Añadir clases de Bootstrap para mostrar errores
        form.classList.add('was-validated');

        // 7. Si todo es válido
        if (esValido) {
            form.classList.remove('was-validated');
            alert('¡Registro exitoso!');
            // Aquí se enviaría el formulario
            // form.submit();
        }
    });
});