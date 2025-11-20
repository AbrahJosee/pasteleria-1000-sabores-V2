import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import RouterConfg from './routes/RouterConfig';
import './components/pages/catalogo-styles.css';

function App() {
  return (
    <UserProvider>
      <Router>
        <RouterConfg />
      </Router>
    </UserProvider>
  );
}

export default App;
