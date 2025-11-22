import React from 'react';
import { useCart } from '../../contexts/CartContext';

const Carrito = () => {
  const { items: carrito, removeItem, clearCart, cartTotal } = useCart();

  const calcularTotal = () => {
    return cartTotal;
  };

  const limpiarCarrito = () => {
    clearCart();
    alert('Carrito limpiado');
  };

  const eliminarDelCarrito = (id) => {
    removeItem(id);
  };

  return (
    <div>
      <header>
        <div className="sub-nav text-end pe-4 py-1">
          <a href="/login">Iniciar sesión</a> |
          <a href="/registro">Registrar usuario</a>
        </div>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand font-heading" href="/">
              🧁 Pastelería Mil Sabores
            </a>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarMilSabores"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarMilSabores">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/productos">Productos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/nosotros">Nosotros</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/blogs">Blogs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contacto">Contacto</a>
                </li>
              </ul>
              <div className="d-flex">
                <a href="/carrito" className="btn btn-cart" id="carrito-btn">
                  <i className="bi bi-cart"></i> Carrito ({carrito.length})
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="container my-5">
        <h1 className="font-heading mb-4">Tu Carrito</h1>

        {carrito.length === 0 ? (
          <div className="text-center py-5">
            <h3>El carrito está vacío</h3>
            <p className="fs-5">Agrega algunos productos para comenzar</p>
            <a href="/productos" className="btn btn-primary">Ver Productos</a>
          </div>
        ) : (
          <div className="row">
            <div className="col-md-8">
              <div className="list-group">
                {carrito.map((producto) => (
                  <div key={producto.id} className="list-group-item">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h5>{producto.Nombre || producto.nombre}</h5>
                        <p className="mb-0">${(producto.Precio || producto.precio)?.toLocaleString('es-CL')}</p>
                        <p className="mb-0">Cantidad: {producto.quantity}</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => eliminarDelCarrito(producto.id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Resumen del Pedido</h5>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Total:</span>
                    <strong>${calcularTotal().toLocaleString('es-CL')}</strong>
                  </div>
                  
                  <button className="btn btn-success w-100 mb-2">Proceder al Pago</button>
                  <button 
                    className="btn btn-outline-danger w-100"
                    onClick={limpiarCarrito}
                  >
                    Limpiar Carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="footer-mil-sabores mt-5 py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <h5 className="font-heading">Pastelería Mil Sabores</h5>
              <p>Celebrando 50 años de dulzura y tradición.</p>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <h5>Categorías</h5>
              <ul className="list-unstyled">
                <li><a href="/productos?t=Cuadradas">Tortas Cuadradas</a></li>
                <li><a href="/productos?t=Circulares">Tortas Circulares</a></li>
                <li><a href="/productos?t=Especiales">Tortas Especiales</a></li>
                <li><a href="/productos?t=Sin+Azúcar">Productos sin azúcar</a></li>
                <li><a href="/productos?t=Sin+Gluten">Productos sin gluten</a></li>
                <li><a href="/productos?t=Veganos">Productos Veganos</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-12">
              <h5>Únete a nuestro newsletter</h5>
              <form>
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Enter Email" />
                  <button className="btn btn-primary" type="submit">Suscribir</button>
                </div>
              </form>
            </div>
          </div>
          <hr className="my-4" />
          <div className="text-center">
            <small>&copy; 2025 Pastelería Mil Sabores. Todos los derechos reservados.</small>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Carrito;