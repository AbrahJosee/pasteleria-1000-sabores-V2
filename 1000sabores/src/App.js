import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { CartProvider } from './contexts/CartContext';
import RouterConfig from './routes/RouterConfig';
import './components/pages/catalogo-styles.css';

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <RouterConfig />
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
