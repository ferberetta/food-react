import { useState } from "react";
import { useNavigate } from "react-router-dom";

const USUARIO_CORRECTO = "fer";
const PASSWORD_CORRECTA = "1234";

function Login() {
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function iniciarSesion() {
        if (usuario === USUARIO_CORRECTO && password === PASSWORD_CORRECTA) {
            sessionStorage.setItem("usuario", usuario);
            console.log("Login correcto");
            navigate("/");
        } else {
            console.log("Usuario o contraseña incorrectos");
        }
    }

    return (
        <div className="mx-auto text-start" style={{ maxWidth: "20rem" }}>
            <h2 className="text-center">👤 Iniciar sesión</h2>

            <label className="mt-3">Usuario</label>
            <input
                type="text"
                className="form-control"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
            />

            <label className="mt-3">Contraseña</label>
            <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button className="btn btn-primary w-100 mt-4" onClick={iniciarSesion}>
                Ingresar
            </button>
        </div>
    );
}
export default Login;