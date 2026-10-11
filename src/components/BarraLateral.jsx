import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function BarraLateral() {
    return (
        <div

            className="border-end p-3 text-start"
            style={{ width: "220px", minHeight: "100vh", backgroundColor: "#fff3e0" }}
        >
            <h5>Menú</h5>
            <Nav className="flex-column">
                <Nav.Link as={Link} to="/" className="text-nowrap" style={{ color: "#d62828" }}>🏠 Inicio</Nav.Link>
                <Nav.Link as={Link} to="/productos" className="text-nowrap" style={{ color: "#d62828" }}>🍔 Productos</Nav.Link>
                <Nav.Link as={Link} to="/ofertas" className="text-nowrap" style={{ color: "#d62828" }}>🔥 Ofertas</Nav.Link>
                <Nav.Link as={Link} to="/carrito" className="text-nowrap" style={{ color: "#d62828" }}>🛒 Carrito</Nav.Link>
                <Nav.Link as={Link} to="/login" className="text-nowrap" style={{ color: "#d62828" }}>👤 Ingresar</Nav.Link>
            </Nav>
        </div>
    );
}
export default BarraLateral;