import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { formatearPrecio } from "../utils/formato.js";

function Producto({ id, nombre, precio, emoji, agregarAlCarrito }) {
    return (
        <Card className="h-100 shadow-sm text-center">
            <Card.Body>
                <div style={{fontSize: "3rem"}}>{emoji}</div>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text className="fw-bold">{formatearPrecio(precio)}</Card.Text>
                <Button
                    variant="primary"
                    onClick={() => agregarAlCarrito({ id, nombre, precio, emoji })}
                >
                    agregar al carrito
                </Button>
            </Card.Body>
        </Card>);
}
export default Producto; 