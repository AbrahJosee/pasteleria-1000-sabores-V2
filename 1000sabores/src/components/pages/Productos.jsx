import React, { useState, useEffect } from 'react';
import { db } from '../../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');
  const [busqueda, setBusqueda] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar productos desde Firebase
  useEffect(() => {
    const cargarProductos = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, 'producto'));
        const productosData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setProductos(productosData);
        setProductosFiltrados(productosData);
        
        // Obtener categorías únicas
        const categoriasUnicas = [...new Set(productosData.map(p => p.categoria))];
        setCategorias(['Todas', ...categoriasUnicas]);
      } catch (err) {
        setError('Error al cargar los productos');
        console.error('Error cargando productos:', err);
      } finally {
        setLoading(false);
      }
    };

    cargarProductos();
  }, []);

  // Filtrar productos por categoría o búsqueda
  useEffect(() => {
    let resultado = productos;

    // Filtrar por categoría si no es "Todas"
    if (categoriaSeleccionada !== 'Todas') {
      resultado = resultado.filter(p => p.categoria === categoriaSeleccionada);
    }

    // Filtrar por búsqueda
    if (busqueda.trim()) {
      const termino = busqueda.toLowerCase().trim();
      resultado = resultado.filter(p => 
        p.nombre?.toLowerCase().includes(termino) ||
        p.categoria?.toLowerCase().includes(termino) ||
        p.descripcion?.toLowerCase().includes(termino)
      );
    }

    setProductosFiltrados(resultado);
  }, [categoriaSeleccionada, busqueda, productos]);

  const manejarFiltroCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  const manejarAgregarAlCarrito = (producto) => {
    // Obtener carrito del localStorage
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    // Mostrar notificación (puedes implementar un componente de notificación)
    alert(`"${producto.nombre}" agregado al carrito`);
  };

  if (loading) {
    return (
      <div className="container my-5 text-center">
        <h2>Cargando productos...</h2>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container my-5">
        <div className="alert alert-danger" role="alert">
          {error}
          <p className="mb-0">Intenta recargar la página.</p>
        </div>
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
                  <a className="nav-link active" aria-current="page" href="/productos">Productos</a>
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

      <main className="main">
        {/* Sección de Categorías */}
        <section className="categorias-section">
          <h2 className="section-title">Categorías</h2>
          <div className="categorias-grid">
            {categorias.map((categoria, index) => (
              <div 
                key={index} 
                className={`categoria-card ${categoriaSeleccionada === categoria ? 'active' : ''}`}
                onClick={() => manejarFiltroCategoria(categoria)}
                style={{
                  cursor: 'pointer',
                  background: categoriaSeleccionada === categoria ? '#e3f2fd' : 'white',
                  border: categoriaSeleccionada === categoria ? '2px solid #2196f3' : '2px solid transparent'
                }}
              >
                <div className="categoria-img">
                  {categoria === 'Tortas Cuadradas' && '🎂'}
                  {categoria === 'Tortas Circulares' && '🍰'}
                  {categoria === 'Galletas' && '🍪'}
                  {categoria === 'Brownies' && '🍫'}
                  {categoria === 'Pasteles' && '🧁'}
                  {(categoria !== 'Tortas Cuadradas' && categoria !== 'Tortas Circulares' && 
                    categoria !== 'Galletas' && categoria !== 'Brownies' && categoria !== 'Pasteles') && '📦'}
                </div>
                <div className="categoria-nombre">{categoria}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Buscador */}
        <div className="container my-4">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar productos..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                />
                <button className="btn btn-outline-secondary" type="button">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Productos */}
        <section className="productos-section">
          <h2 className="section-title">
            {categoriaSeleccionada === 'Todas' 
              ? `Todos los productos (${productosFiltrados.length})` 
              : `${categoriaSeleccionada} (${productosFiltrados.length} productos)`
            }
          </h2>
          {productosFiltrados.length === 0 ? (
            <div className="text-center py-5">
              <p className="fs-4">No se encontraron productos</p>
              <button 
                className="btn btn-primary" 
                onClick={() => {
                  setCategoriaSeleccionada('Todas');
                  setBusqueda('');
                }}
              >
                Ver todos los productos
              </button>
            </div>
          ) : (
            <div className="productos-grid">
              {productosFiltrados.map((producto) => (
                <div key={producto.id} className="producto-card">
                  <img
                    src={producto.imagen || 'https://via.placeholder.com/300x200?text=Sin+Imagen'}
                    alt={producto.nombre}
                    className="producto-imagen"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x200?text=Sin+Imagen';
                    }}
                  />
                  <div className="producto-info">
                    <h3 className="producto-nombre">
                      {producto.nombre || 'Sin nombre'}
                    </h3>
                    <p className="producto-precio">
                      ${producto.precio?.toLocaleString('es-CL') || '0'}
                    </p>
                    <button
                      className="btn-agregar"
                      onClick={() => manejarAgregarAlCarrito(producto)}
                    >
                      🛒 Agregar al carrito
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className="footer-mil-sabores mt-5 py-5">
        <div className="container">
          <hr className="my-4" />
          <div className="text-center">
            <small>&copy; 2025 Pastelería Mil Sabores. Todos los derechos reservados</small>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Productos;