import React from 'react';
import { useCart } from '../../contexts/CartContext';

const Blogs = () => {
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
                  <a className="nav-link active" aria-current="page" href="/blogs">Blogs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contacto">Contacto</a>
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
          <h1 className="font-heading display-4">Blog</h1>
          <p className="fs-5 mb-5">Descubre consejos, recetas y noticias sobre el mundo de la repostería.</p>
          
          <div className="row">
            <div className="col-lg-8">
              {/* Blog Post 1 */}
              <article className="blog-post mb-5">
                <div className="card">
                  <img 
                    src="/Assets/Torta Circular de Manjar.jpg" 
                    className="card-img-top" 
                    alt="Consejos para decorar tortas" 
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h3 className="card-title">Consejos para decorar tortas como un profesional</h3>
                    <p className="card-text text-muted">Publicado el 15 de Noviembre, 2025</p>
                    <p className="card-text">
                      Aprende los trucos de los expertos para decorar tortas que impresionen a tus invitados. 
                      Desde técnicas básicas hasta consejos avanzados de decoración.
                    </p>
                    <a href="/detalle-blog-1" className="btn btn-primary">Leer más</a>
                  </div>
                </div>
              </article>

              {/* Blog Post 2 */}
              <article className="blog-post mb-5">
                <div className="card">
                  <img 
                    src="/Assets/torta cuadrada de chocolate.jpg" 
                    className="card-img-top" 
                    alt="Historia de las tortas de chocolate" 
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h3 className="card-title">La fascinante historia de las tortas de chocolate</h3>
                    <p className="card-text text-muted">Publicado el 10 de Noviembre, 2025</p>
                    <p className="card-text">
                      ¿Sabías que el chocolate ha sido apreciado durante miles de años? 
                      Descubre cómo evolucionaron las tortas de chocolate y su impacto en la repostería moderna.
                    </p>
                    <a href="/detalle-blog-2" className="btn btn-primary">Leer más</a>
                  </div>
                </div>
              </article>

              {/* Blog Post 3 */}
              <article className="blog-post mb-5">
                <div className="card">
                  <img 
                    src="/Assets/Torta Circular de Vainilla.jpg" 
                    className="card-img-top" 
                    alt="Beneficios del consumo de repostería artesanal" 
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h3 className="card-title">Beneficios del consumo de repostería artesanal</h3>
                    <p className="card-text text-muted">Publicado el 5 de Noviembre, 2025</p>
                    <p className="card-text">
                      Exploramos los aspectos positivos de disfrutar de productos de repostería 
                      elaborados artesanalmente con ingredientes de calidad.
                    </p>
                    <a href="/detalle-blog-3" className="btn btn-primary">Leer más</a>
                  </div>
                </div>
              </article>
            </div>
            
            <div className="col-lg-4">
              <div className="sticky-top">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Suscríbete al Newsletter</h5>
                    <p>Recibe las últimas recetas y consejos directamente en tu inbox</p>
                    <form>
                      <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Tu email" />
                      </div>
                      <button type="submit" className="btn btn-primary w-100">Suscribirse</button>
                    </form>
                  </div>
                </div>
                
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Categorías</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2"><a href="/productos?categoria=Recetas">Recetas</a></li>
                      <li className="mb-2"><a href="/productos?categoria=Tutoriales">Tutoriales</a></li>
                      <li className="mb-2"><a href="/productos?categoria=Historia de la Repostería">Historia de la Repostería</a></li>
                      <li className="mb-2"><a href="/productos?categoria=Ingredientes">Ingredientes</a></li>
                      <li className="mb-2"><a href="/productos?categoria=Eventos">Eventos</a></li>
                    </ul>
                  </div>
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

export default Blogs;