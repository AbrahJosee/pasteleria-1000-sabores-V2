import React, { useState, useEffect } from "react";
import FormUsuario from "../molecules/FormUsuario";

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  // Function to show registration form
  const showRegistrationForm = () => {
    setShowForm(true);
  };

  // Function to hide registration form
  const hideRegistrationForm = () => {
    setShowForm(false);
  };

  if (showForm) {
    return (
      <div>
        <header>
          <div className="sub-nav text-end pe-4 py-1">
            <a href="#" onClick={() => setShowForm(false)}>Volver al Inicio</a>
          </div>
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <a className="navbar-brand font-heading" href="#" onClick={() => setShowForm(false)}>
                🧁 Pastelería Mil Sabores
              </a>
            </div>
          </nav>
        </header>

        <main className="container my-5">
          <section className="hero-section">
            <h2>Registro de Usuario</h2>
            <FormUsuario onFormSubmit={hideRegistrationForm} />
          </section>
        </main>

        <footer className="footer-mil-sabores mt-5 py-5">
          <div className="container text-center">
            <small>&copy; 2025 Pastelería Mil Sabores. Todos los derechos reservados.</small>
          </div>
        </footer>
      </div>
    );
  }

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

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMilSabores" aria-controls="navbarMilSabores" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarMilSabores">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
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
                  <i className="bi bi-cart"></i> Carrito (0)
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="container my-5">
        <section className="hero-section row align-items-center">
          <div className="col-lg-6">
            <h1 className="font-heading display-4">Tienda Online</h1>
            <p className="fs-5">Famosos por nuestra participación en el récord Guinness de 1995, celebramos 50 años de tradición. Descubre nuestras delicias y vive una experiencia dulce y memorable.</p>
            <a href="/productos" className="btn btn-primary btn-lg">Ver productos</a>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <img src="/Assets/Torta Circular de Manjar.jpg" className="img-fluid rounded" alt="Pastelería principal" />
          </div>
        </section>

        <section className="productos-section mt-5 pt-5">
          <h2 className="text-center font-heading mb-4">Nuestras Delicias</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            <div className="col">
              <div className="card h-100">
                <img src="/Assets/torta cuadrada de chocolate.jpg" className="card-img-top" alt="Torta Cuadrada de Chocolate" />
                <div className="card-body">
                  <h5 className="card-title">Torta Cuadrada de Chocolate</h5>
                </div>
                <div className="card-footer">
                  <span className="price-text">$45.000 CLP</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="/Assets/torta cuadrada de frutas.jpg" className="card-img-top" alt="Torta Cuadrada de Frutas" />
                <div className="card-body">
                  <h5 className="card-title">Torta Cuadrada de Frutas</h5>
                </div>
                <div className="card-footer">
                  <span className="price-text">$50.000 CLP</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="/Assets/Torta Circular de Vainilla.jpg" className="card-img-top" alt="Torta Circular de Vainilla" />
                <div className="card-body">
                  <h5 className="card-title">Torta Circular de Vainilla</h5>
                </div>
                <div className="card-footer">
                  <span className="price-text">$40.000 CLP</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="/Assets/Torta Circular de Manjar.jpg" className="card-img-top" alt="Torta Circular de Manjar" />
                <div className="card-body">
                  <h5 className="card-title">Torta Circular de Manjar</h5>
                </div>
                <div className="card-footer">
                  <span className="price-text">$42.000 CLP</span>
                </div>
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

export default Home;