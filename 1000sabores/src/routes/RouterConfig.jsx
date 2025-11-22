import { Route, Switch } from "react-router-dom";
import Home from "../components/pages/Home";
import PerfilAdmin from "../components/pages/PerfilAdmin";
import PerfilCliente from "../components/pages/PerfilCliente";
import Productos from "../components/pages/Productos";
import Nosotros from "../components/pages/Nosotros";
import Contacto from "../components/pages/Contacto";
import Blogs from "../components/pages/Blogs";
import Carrito from "../components/pages/Carrito";

const RouterConfig = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/productos" component={Productos} />
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/contacto" component={Contacto} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/carrito" component={Carrito} />
        <Route path="/perfil-admin" component={PerfilAdmin} />
        <Route path="/perfil-cliente" component={PerfilCliente} />
    </Switch>
);
export default RouterConfig;