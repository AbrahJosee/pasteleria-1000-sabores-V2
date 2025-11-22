import React from 'react';
import { useCart } from '../../contexts/CartContext';

const Contacto = () => {
  const { cartCount } = useCart();
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
                  <a className="nav-link active" aria-current="page" href="/contacto">Contacto</a>
                </li>
              </ul>
              <div className="d-flex">
                <a href="/carrito" className="btn btn-cart" id="carrito-btn">
                  <i className="bi bi-cart"></i> Carrito ({cartCount})
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="container my-5">
        <section className="hero-section">
          <h1 className="font-heading display-4">Contáctanos</h1>
          <p className="fs-5 mb-5">¿Tienes alguna pregunta o comentario? Estamos aquí para ayudarte.</p>
          
          <div className="row">
            <div className="col-lg-6">
              <h3>Información de Contacto</h3>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <strong><i className="bi bi-geo-alt"></i> Dirección:</strong><br />
                  Av. Siempre Viva 123, Santiago, Chile
                </li>
                <li className="mb-3">
                  <strong><i className="bi bi-telephone"></i> Teléfono:</strong><br />
                  +56 2 1234 5678
                </li>
                <li className="mb-3">
                  <strong><i className="bi bi-envelope"></i> Email:</strong><br />
                  contacto@pasteleriamilsabores.cl
                </li>
                <li className="mb-3">
                  <strong><i className="bi bi-clock"></i> Horarios:</strong><br />
                  Lunes a Viernes: 9:00 - 20:00<br />
                  Sábados: 10:00 - 18:00<br />
                  Domingos: Cerrado
                </li>
              </ul>
            </div>
            
            <div className="col-lg-6">
              <h3>Formulario de Contacto</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input type="text" className="form-control" id="nombre" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="asunto" className="form-label">Asunto</label>
                  <input type="text" className="form-control" id="asunto" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="mensaje" className="form-label">Mensaje</label>
                  <textarea className="form-control" id="mensaje" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
              </form>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-12">
              <h3>Ubicación</h3>
              <div className="border rounded" style={{ height: '300px', backgroundColor: '#e9ecef' }}>
                <p className="text-center pt-5">Mapa de ubicación</p>
                <p className="text-center">Aquí iría un mapa de Google Maps con nuestra ubicación</p>
              </div>
            </div>
          </div>
        </section>
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

export default Contacto;