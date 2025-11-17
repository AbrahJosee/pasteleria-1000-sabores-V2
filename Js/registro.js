document.addEventListener('DOMContentLoaded', function() {
    
    const regionSelect = document.getElementById('region');
    const comunaSelect = document.getElementById('comuna');
    
    for (const region in regionesComunas) {
        regionSelect.innerHTML += `<option value="${region}">${region}</option>`;
    }
    
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

        const emailRegex = /@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
        if (!emailRegex.test(emailInput.value)) {
            esValido = false;
            emailInput.classList.add('is-invalid');
            emailError.innerText = "Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com.";
        } else {
            emailInput.classList.remove('is-invalid');
        }

        if (emailInput.value !== confirmarEmailInput.value) {
            esValido = false;
            confirmarEmailInput.classList.add('is-invalid');
        } else {
            confirmarEmailInput.classList.remove('is-invalid');
        }

        if (passwordInput.value.length < 4 || passwordInput.value.length > 10) {
            esValido = false;
            passwordInput.classList.add('is-invalid');
        } else {
            passwordInput.classList.remove('is-invalid');
        }

        if (passwordInput.value !== confirmarPasswordInput.value) {
            esValido = false;
            confirmarPasswordInput.classList.add('is-invalid');
        } else {
            confirmarPasswordInput.classList.remove('is-invalid');
        }

        if (!form.checkValidity()) {
            esValido = false;
        }

        form.classList.add('was-validated');

        if (esValido) {
            form.classList.remove('was-validated');
            alert('¡Registro exitoso!');
            
        }
    });
});