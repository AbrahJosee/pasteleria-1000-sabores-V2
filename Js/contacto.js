/*
  contacto.js
  Script para la validación del formulario de contacto
*/

document.addEventListener('DOMContentLoaded', function() {
    
    // Obtener elementos del DOM
    const form = document.getElementById('formulario-contacto');
    if (!form) return; // Si no hay formulario, no hacer nada

    const nombreInput = document.getElementById('nombre');
    const nombreError = document.getElementById('nombre-error');
    
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    
    const comentarioInput = document.getElementById('comentario');
    const comentarioError = document.getElementById('comentario-error');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        
        let esValido = true;

        // 1. Validación Nombre [cite: 535-537]
        if (nombreInput.value.length === 0) {
            esValido = false;
            nombreInput.classList.add('is-invalid');
            nombreError.innerText = "El nombre es requerido.";
        } else if (nombreInput.value.length > 100) {
            esValido = false;
            nombreInput.classList.add('is-invalid');
            nombreError.innerText = "El nombre no puede exceder los 100 caracteres.";
        } else {
            nombreInput.classList.remove('is-invalid');
        }

        // 2. Validación Correo [cite: 538-540]
        const emailRegex = /@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
        // El correo no es 'requerido', pero si se ingresa, debe ser válido
        if (emailInput.value.length > 0) {
            if (emailInput.value.length > 100) {
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
        } else {
            // Limpiar error si el campo está vacío (ya que no es requerido)
            emailInput.classList.remove('is-invalid');
        }


        // 3. Validación Comentario [cite: 543-544, 547]
        if (comentarioInput.value.length === 0) {
            esValido = false;
            comentarioInput.classList.add('is-invalid');
            comentarioError.innerText = "El comentario es requerido.";
        } else if (comentarioInput.value.length > 500) {
            esValido = false;
            comentarioInput.classList.add('is-invalid');
            comentarioError.innerText = "El comentario no puede exceder los 500 caracteres.";
        } else {
            comentarioInput.classList.remove('is-invalid');
        }


        // Añadir clases de Bootstrap para mostrar errores nativos
        form.classList.add('was-validated');

        // Si todo es válido
        if (esValido) {
            form.classList.remove('was-validated');
            alert('¡Mensaje enviado con éxito!');
            form.reset(); // Limpiar el formulario
        }
    });
});