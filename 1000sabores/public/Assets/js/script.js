//Validación del correo
function validarCorreo(correo) {
    const regex = /^[\w.+-]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com|duocuc\.cl)$/i;
    return regex.test(correo);
}

//Validación del run
function validarRun(run) {
    const regex = /^[0-9]{8}[0-9K]$/;
    return regex.test(run);
}

//Validación de edad minima 18 años
function esMayorEdad(fecha) {
    const hoy = new Date();
    const fechaNacimiento = new Date(fecha);
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes  = hoy.getMonth() - fechaNacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad --;
    }
    return edad >= 18;


};

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
});

document.addEventListener("DOMContentLoaded", () => {
    // Solo ejecutar la lógica del formulario de registro si el formulario existe en la página
    const form = document.getElementById("formUsuario");
    if (form) {
        // Buscar elementos con los IDs correctos que existen en registro.html
        const runInput = document.getElementById("run");
        const passInput = document.getElementById("clave"); // Cambiado de "password" a "clave"
        const nombreInput = document.getElementById("nombre");
        const correoInput = document.getElementById("correo");  // Cambiado de "email" a "correo"
        const fechaNacimientoInput = document.getElementById("fechaNacimiento");  // Cambiado de "fecha" a "fechaNacimiento"
        const confirmarCorreoInput = document.getElementById("confirmar-email");
        const confirmarPasswordInput = document.getElementById("confirmar-password");

        // Buscar o crear el elemento de mensaje
        let mensaje = document.getElementById("mensaje");
        if (!mensaje) {
            // Si no existe, crear un elemento mensaje y agregarlo al formulario
            mensaje = document.createElement('div');
            mensaje.id = "mensaje";
            mensaje.style.color = "crimson";
            mensaje.style.marginTop = "10px";
            mensaje.style.fontSize = "14px";
            form.appendChild(mensaje);
        }

        //limpiar los input y mensajes flotante automaticamente
        const inputs = [runInput, nombreInput, correoInput, fechaNacimientoInput, passInput, confirmarCorreoInput, confirmarPasswordInput];
        inputs.forEach(input => {
            if (input) {  // Verificar si el elemento existe antes de agregar el evento
                input.addEventListener("input", () => {
                    input.setCustomValidity("");
                    mensaje.innerText = "";
                });
            }
        });

        // Manejar el envío del formulario
        form.addEventListener("submit", async function(e) {
            e.preventDefault();

            //limpiar los mensajes
            mensaje.innerText = "";

            //La validación correcta del run
            runInput.value = runInput.value.trim().toUpperCase();

            //Guardar los valores de los otros input
            const run = runInput.value;
            const nombre = nombreInput.value.trim();
            const correo = correoInput.value.trim();  // Cambiado de "email" a "correo"
            const fecha = fechaNacimientoInput.value;  // Cambiado de "fecha" a "fechaNacimiento"
            const clave = passInput.value;

            //Validación contraseña
            if(clave === "") {
                passInput.setCustomValidity("Este campo no puede estar vacío");
                passInput.reportValidity();
                return;
            }

            // Validación longitud de contraseña
            if(clave.length < 4 || clave.length > 10) {
                passInput.setCustomValidity("La contraseña debe tener entre 4 y 10 caracteres");
                passInput.reportValidity();
                return;
            }

            // Validación confirmación de contraseña
            const confirmarClave = confirmarPasswordInput.value;
            if(clave !== confirmarClave) {
                confirmarPasswordInput.setCustomValidity("Las contraseñas no coinciden");
                confirmarPasswordInput.reportValidity();
                return;
            }

            //Validación Run
            if(!validarRun(run)) {
                runInput.setCustomValidity("El RUN es incorrecto. Debe tener 8 dígitos + número o K verificador");
                runInput.reportValidity();
                return;
            }

            //Validación Nombre
            if (nombre === "") {
                nombreInput.setCustomValidity("El nombre es obligatorio");
                nombreInput.reportValidity();
                return;
            }

            //Validación correo
            if (!validarCorreo(correo)) {
                correoInput.setCustomValidity("El correo debe ser '@duoc.cl', '@profesor.duoc.cl' o '@gmail.com'");
                correoInput.reportValidity();
                return;
            }

            // Validación confirmación de correo
            const confirmarCorreo = confirmarCorreoInput.value;
            if(correo !== confirmarCorreo) {
                confirmarCorreoInput.setCustomValidity("Los correos no coinciden");
                confirmarCorreoInput.reportValidity();
                return;
            }

            //Validación de Edad
            if (!esMayorEdad(fecha)) {
                fechaNacimientoInput.setCustomValidity("Debe ser mayor de 18 años para registrarse");
                fechaNacimientoInput.reportValidity();
                return;
            }

            // Preparar los datos para guardar en Firebase
            const userData = {
                run,
                nombre,
                correo,
                clave, // En producción, deberías encriptar la contraseña
                fecha: fecha
            };

            try {
                // Mostrar mensaje de espera mientras se registra
                mensaje.innerText = "Registrando usuario...";

                // Verificar si Firebase ya está cargado
                if (typeof firebase === 'undefined') {
                    // Mostrar mensaje de error ya que no podemos conectar con Firebase
                    mensaje.innerText = "Error: Firebase no está disponible. No se puede registrar el usuario.";
                    return;
                }

                // Configurar Firebase solo si aún no está inicializado
                if (firebase.apps.length === 0) {
                    const firebaseConfig = {
                        apiKey: "AIzaSyB8yWHr65xAKNy7CU-6n8fW4Vs0aEpsDm8",
                        authDomain: "pasteleria1000sabores-a7d6b.firebaseapp.com",
                        projectId: "pasteleria1000sabores-a7d6b",
                        storageBucket: "pasteleria1000sabores-a7d6b.appspot.com",
                        messagingSenderId: "922232977389",
                        appId: "1:922232977389:web:d9b457821b2643a20199e4",
                        measurementId: "G-056PCM8YTQ"
                    };
                    firebase.initializeApp(firebaseConfig);
                }

                // Obtener Firestore
                const db = firebase.firestore();

                // Agregar usuario a Firestore
                const docRef = await db.collection("usuario").add({
                    ...userData,
                    createdAt: new Date(),
                });

                console.log("Usuario registrado con ID: ", docRef.id);
                mensaje.innerText = "¡Formulario enviado correctamente! Usuario registrado en la base de datos.";

                // Redirección basada en el correo
                setTimeout(() => {
                    const destino = correo.toLowerCase() === "admin@duoc.cl"
                        ? `perfilAdmin.html?nombre=${encodeURIComponent(nombre)}`
                        : `perfilCliente.html?nombre=${encodeURIComponent(nombre)}`;
                    window.location.href = destino;
                }, 2000);
            } catch (error) {
                console.error("Error al guardar usuario: ", error);
                mensaje.innerText = "Error al guardar usuario en Firebase";
            }
        });
    }
});