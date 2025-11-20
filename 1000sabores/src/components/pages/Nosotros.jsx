import React from 'react';

const Nosotros = () => {
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
                  <a className="nav-link active" aria-current="page" href="/nosotros">Nosotros</a>
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
        <section className="hero-section">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="font-heading display-4">Sobre Nosotros</h1>
              <p className="fs-5">
                Famosos por nuestra participación en el récord Guinness de 1995, celebramos 50 años de tradición.
              </p>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <img 
                src="/Assets/Torta Circular de Manjar.jpg" 
                className="img-fluid rounded" 
                alt="Pastelería principal"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </section>

        <section className="mt-5">
          <h2 className="font-heading mb-4">Nuestra Historia</h2>
          <p>
            Pastelería Mil Sabores comenzó como un pequeño local familiar hace más de 50 años. 
            Desde entonces, hemos crecido manteniendo los mismos valores que nos hicieron famosos: 
            calidad, tradición y amor por la repostería.
          </p>
          
          <h3 className="mt-4">Misión</h3>
          <p>
            Ofrecer una experiencia dulce y memorable a nuestros clientes, proporcionando tortas 
            y productos de repostería de alta calidad para todas las ocasiones, mientras celebramos 
            nuestras raíces históricas y fomentamos la creatividad en la repostería.
          </p>

          <h3>Visión</h3>
          <p>
            Convertirnos en la tienda online líder de productos de repostería en Chile, conocida 
            por nuestra innovación, calidad y el impacto positivo en la comunidad, especialmente 
            en la formación de nuevos talentos en gastronomía.
          </p>

          <h3>Valores</h3>
          <ul>
            <li>Compromiso con la excelencia</li>
            <li>Tradicionalidad con innovación</li>
            <li>Atención personalizada</li>
            <li>Responsabilidad social</li>
          </ul>
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

export default Nosotros;