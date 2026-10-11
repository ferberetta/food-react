import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";   // 1. importar useNavigate

function BarraSuperior({ cantidadProductos }) {
    const usuario = sessionStorage.getItem("usuario");
    const navigate = useNavigate();                      // pedir el "taxi"

    function cerrarSesion() {                            // 2. la función
        console.log("🚪 Cerrando sesión de:", usuario);
        sessionStorage.removeItem("usuario");
        navigate("/login");
    }

    return (
        <Navbar data-bs-theme="dark" sticky="top" style={{ backgroundColor: "#d62828" }}>
            <Container>
                <Navbar.Brand>🍔 Mi carrito de ricuras</Navbar.Brand>

                <div className="d-flex align-items-center gap-3">
                    <span className="text-white">🛒 {cantidadProductos}</span>

                    {usuario ? (
                        <>
                            <span className="text-white">👤 {usuario}</span>

                            <button                      // 3. el botón
                                className="btn btn-link text-white text-decoration-none p-0"
                                onClick={cerrarSesion}
                            >
                                🚪 Cerrar sesión
                            </button>
                        </>
                    ) : (
                        <Link to="/login" className="text-white text-decoration-none">
                            👤 Ingresar
                        </Link>
                    )}
                </div>
            </Container>
        </Navbar>
    );
}
export default BarraSuperior;