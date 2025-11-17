document.addEventListener('DOMContentLoaded', function() {

    const carritoItemsContainer = document.getElementById('carrito-items-container');
    const carritoBtn = document.getElementById('carrito-btn');
    const subtotalEl = document.getElementById('carrito-subtotal');
    const totalEl = document.getElementById('carrito-total');
    const envioCosto = 3500; 

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    function actualizarBotonCarrito() {
        const totalItems = carrito.reduce((total, item) => total + item.quantity, 0);
        if (carritoBtn) {
            carritoBtn.innerHTML = `
                <i class="bi bi-cart"></i> Carrito (${totalItems})
            `;
        }
    }
    
    function guardarCarrito() {
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarBotonCarrito();
        renderCarrito();
    }

    function renderCarrito() {
        carritoItemsContainer.innerHTML = '';
        
        let subtotal = 0;

        if (carrito.length === 0) {
            carritoItemsContainer.innerHTML = '<p>Tu carrito está vacío.</p>';
        }

        carrito.forEach(item => {
            const producto = productos.find(p => p.id === item.id);
            if (!producto) return; 

            const itemTotal = producto.precio * item.quantity;
            subtotal += itemTotal;

            const itemHtml = `
                <div class="card mb-3 shadow-sm border-0">
                    <div class="card-body">
                        <div class="row g-3">
                            <div class="col-md-2">
                                <img src="${producto.imagen}" class="img-fluid rounded" alt="${producto.nombre}" style="width: 100px; height: 100px; object-fit: cover;">
                            </div>
                            <div class="col-md-4">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text text-muted">${producto.categoria}</p>
                            </div>
                            <div class="col-md-3 d-flex align-items-center justify-content-center">
                                <button class="btn btn-outline-secondary btn-sm btn-disminuir" data-id="${producto.id}">-</button>
                                <input type="text" class="form-control text-center mx-2" value="${item.quantity}" readonly style="width: 60px;">
                                <button class="btn btn-outline-secondary btn-sm btn-aumentar" data-id="${producto.id}">+</button>
                            </div>
                            <div class="col-md-2 d-flex align-items-center justify-content-end">
                                <span class="fs-5 price-text">$${itemTotal.toLocaleString('es-CL')}</span>
                            </div>
                            <div class="col-md-1 d-flex align-items-center justify-content-end">
                                <button class="btn btn-outline-danger btn-sm btn-eliminar" data-id="${producto.id}"><i class="bi bi-trash"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            carritoItemsContainer.innerHTML += itemHtml;
        });

        subtotalEl.textContent = `$${subtotal.toLocaleString('es-CL')}`;
        totalEl.textContent = `$${(subtotal + envioCosto).toLocaleString('es-CL')}`;
    }

    carritoItemsContainer.addEventListener('click', function(event) {
        const target = event.target;
        
        const botonAumentar = target.closest('.btn-aumentar');
        const botonDisminuir = target.closest('.btn-disminuir');
        const botonEliminar = target.closest('.btn-eliminar');

        if (botonAumentar) {
            const id = botonAumentar.dataset.id;
            const item = carrito.find(p => p.id === id);
            if(item) item.quantity++;
            guardarCarrito();
        }

        if (botonDisminuir) {
            const id = botonDisminuir.dataset.id;
            const item = carrito.find(p => p.id === id);
            if(item && item.quantity > 1) {
                item.quantity--;
            } else if (item && item.quantity === 1) {
                carrito = carrito.filter(p => p.id !== id);
            }
            guardarCarrito();
        }
        
        if (botonEliminar) {
            const id = botonEliminar.dataset.id;
            carrito = carrito.filter(p => p.id !== id);
            guardarCarrito();
        }
    });

    renderCarrito();
    actualizarBotonCarrito();
});