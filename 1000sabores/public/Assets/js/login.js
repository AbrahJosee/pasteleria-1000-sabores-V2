document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formLogin");
    const correoInput = document.getElementById("correoLogin");
    const claveInput = document.getElementById("claveLogin");
    const mensaje = document.getElementById("mensajeLogin");

    if (!form) return console.error("No se encontró #formLogin");

    const firebaseConfig = {
        apiKey: "AIzaSyB8yWHr65xAKNy7CU-6n8fW4Vs0aEpsDm8",
        authDomain: "pasteleria1000sabores-a7d6b.firebaseapp.com",
        projectId: "pasteleria1000sabores-a7d6b",
        storageBucket: "pasteleria1000sabores-a7d6b.appspot.com",
        messagingSenderId: "922232977389",
        appId: "1:922232977389:web:d9b457821b2643a20199e4",
        measurementId: "G-056PCM8YTQ"
    };

    if (!firebase.apps?.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const auth = firebase.auth(); // Apunta a Authentication Firebase
    const db = firebase.firestore(); // Apunta a la colección usuario del base de datos en Firebase

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        mensaje.innerText = "";

        const correo = correoInput.value.trim().toLowerCase();
        const clave = claveInput.value;

        if (!correo || !clave) {
            mensaje.style.color = "red";
            mensaje.innerText = "Debes completar correo y clave";
            return;
        }

        // Admin: autenticar con Firebase Auth
        if (correo === "admin@tiendaonline.cl") {
            try {
                await auth.signInWithEmailAndPassword(correo, clave);
                
                // Guardar usuario en localStorage
                const usuario = { nombre: "Administrador", correo, rol: "admin" };
                localStorage.setItem("usuario", JSON.stringify(usuario));

                mensaje.style.color = "green";
                mensaje.innerText = "Bienvenido Administrador, redirigiendo...";
                setTimeout(() => {
                    window.location.href = `perfilAdmin.html`;
                }, 1000);
            } catch (error) {
                console.error("Error login admin:", error);
                mensaje.style.color = "red";
                mensaje.innerText = "Credenciales incorrectas para administrador";
            }
            return;
        }

        // Cliente: validar desde Firestore
        try {
            const query = await db.collection("usuario")
                .where("correo", "==", correo)
                .where("clave", "==", clave)
                .get();

            if (!query.empty) {
                const userData = query.docs[0].data();
                const nombre = userData.nombre || correo;

                // Guardar usuario en localStorage con rol real
                const usuario = { nombre, correo, rol: "cliente" };
                localStorage.setItem("usuario", JSON.stringify(usuario));

                mensaje.style.color = "green";
                mensaje.innerText = "Bienvenido Cliente, redirigiendo...";
                setTimeout(() => {
                    window.location.href = `perfilCliente.html`;
                }, 1000);
            } else {
                mensaje.style.color = "red";
                mensaje.innerText = "Correo o clave incorrectos";
            }
        } catch (error) {
            console.error("Error login cliente:", error);
            mensaje.style.color = "red";
            mensaje.innerText = "Error al verificar usuario";
        }
    });
});