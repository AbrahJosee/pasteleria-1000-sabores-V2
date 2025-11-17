/*
  detalle-producto.js
  Lógica para la página de detalle de producto.
  - Lee el ID del producto desde la URL.
  - Muestra la información del producto (de store.js).
  - Añade el producto al carrito (con cantidad).
*/

document.addEventListener('DOMContentLoaded', function() {

    // --- Lógica de Carrito ---
    
    const carritoBtn = document.getElementById('carrito-btn');
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    function actualizarBotonCarrito() {
        const totalItems = carrito.reduce((total, item) => total + item.quantity, 0);
        if (carritoBtn) {
            carritoBtn.innerHTML = `
                <i class="bi bi-cart"></i> Carrito (${totalItems})
            `;
        }
    }

    function agregarAlCarrito(idProducto, cantidad) {
        const itemEnCarrito = carrito.find(item => item.id === idProducto);
        
        if (itemEnCarrito) {
            itemEnCarrito.quantity += cantidad;
        } else {
            carrito.push({ id: idProducto, quantity: cantidad });
        }
        
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarBotonCarrito();
        alert('Producto(s) añadido(s) al carrito');
    }

    // --- Lógica de Carga de Producto ---
    
    const params = new URLSearchParams(window.location.search);
    const productoId = params.get('id');
    const producto = productos.find(p => p.id === productoId);

    if (producto) {
        // 3. Rellenar el HTML con los datos
        document.title = `${producto.nombre} - Pastelería Mil Sabores`;
        document.getElementById('producto-breadcrumb').textContent = producto.nombre;
        document.getElementById('producto-descripcion').textContent = producto.descripcion;
        document.getElementById('producto-nombre').textContent = producto.nombre;
        document.getElementById('producto-precio').textContent = `$${producto.precio.toLocaleString('es-CL')} CLP`;

        // Cargar imagen principal
        document.getElementById('producto-imagen').src = producto.imagen;
        document.getElementById('producto-imagen').alt = producto.nombre;

        // --- ¡ARREGLO AQUÍ! ---
        // Se eliminaron las 3 líneas que hacían referencia a 'thumb-1', 'thumb-2' y 'thumb-3'
        
        // 4. Asignar evento al botón de "Añadir"
        const btnAnadir = document.getElementById('btn-anadir-detalle');
        const inputCantidad = document.getElementById('cantidad');
        
        btnAnadir.addEventListener('click', function() {
            const cantidad = parseInt(inputCantidad.value, 10);
            if (cantidad > 0) {
                agregarAlCarrito(producto.id, cantidad);
            }
        });

    } else {
        // Producto no encontrado
        document.getElementById('detalle-producto-container').innerHTML = 
            '<h1 class="text-center">Producto no encontrado</h1>';
    }

    actualizarBotonCarrito();
});