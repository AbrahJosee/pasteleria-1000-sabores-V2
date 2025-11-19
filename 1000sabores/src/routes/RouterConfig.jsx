import { Route, Switch } from "react-router-dom";
import Home from "../components/pages/Home";
import PerfilAdmin from "../components/pages/PerfilAdmin";
import PerfilCliente from "../components/pages/PerfilCliente";

const RouterConfg = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/perfil-admin" component={PerfilAdmin} />
        <Route path="/perfil-cliente" component={PerfilCliente} />
    </Switch>
);
export default RouterConfg;