import React, { useState } from "react";
import Input from "../atoms/input";
import Button from "../atoms/Button";
import { validarCorreo, validarRun, esMayorEdad} from "../../utils/script";
import { addUser } from "../../service/firestoreService";
import { useHistory } from "react-router-dom";

const FormUsuario = ({ onFormSubmit }) => {
    const [form, setForm] = useState({run:"", nombre:"", correo:"", clave:"", fecha:""})
    const [msg, setMsg ] = useState("");
    const history = useHistory();

    const handleChange = e => setForm({ ...form, [e.target.id]: e.target.value});

    const handleSubmit = async e => {
        e.preventDefault();
        const { run, nombre, correo, clave, fecha} = form;
        if (!validarRun(run)) return setMsg("RUN es incorrecto");
        if (!nombre) return setMsg("Nombre en blanco");
        if (!validarCorreo(correo)) return setMsg("Correo incorrecto");
        if (!clave) return setMsg("Clave en blanco");
        if (!esMayorEdad(fecha)) return setMsg("Debe ser mayor de 18 años");

        try {
            await addUser(form);
            setMsg("Formulario enviado correctamente");
            setTimeout(() => {
                if (onFormSubmit) {
                    onFormSubmit();
                } else {
                    // Fallback to default behavior if no callback provided
                    const destination = correo === "admin@duoc.cl"
                        ? `/perfil-admin?nombre=${encodeURIComponent(nombre)}`
                        : `/perfil-cliente?nombre=${encodeURIComponent(nombre)}`;
                    history.push(destination);
                }
            }, 1500);
        } catch (error) {
            console.error("Error al guardar usuario: ", error);
            setMsg("Error al guardar usuario en Firebase");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input id="run" label="RUN" value={form.run} onChange ={handleChange} required />
            <Input id="nombre" label="Nombre" value={form.nombre} onChange ={handleChange} required />
            <Input id="correo" label="Correo" type="email" value={form.correo} onChange ={handleChange} required />
            <Input id="clave" label="Clave" type="password" value={form.clave} onChange ={handleChange} required />
            <Input id="fecha" label="Fecha de Nacimiento" type="date" value={form.fecha} onChange ={handleChange} required />
            <Button type="submit">Enviar</Button>
            <p style={{color: "crimson"}}>{msg}</p>
        </form>
    );
};
export default FormUsuario;   