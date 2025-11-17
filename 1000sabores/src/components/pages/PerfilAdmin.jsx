import  { useLocation } from "react-router-dom";

const PerfilAdmin = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const nombre = queryParams.get("nombre");

    return (
        <div>
            <h1>Bienvenido, {nombre}</h1>
        </div>
    );
};
export default PerfilAdmin;