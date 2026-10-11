import { formatearPrecio } from "../utils/formato.js";

function Carrito({ carrito, aumentarCantidad, disminuirCantidad, eliminarDelCarrito, vaciarCarrito }) {
    const total = carrito.reduce(
        (acc, producto) => acc + producto.precio * producto.cantidad,
        0
    );

    return (
        <div className="card mx-auto mt-4" style={{ maxWidth: "36rem" }}>
            <div className="card-body">
                <h2 className="text-center">🛒 Mi carrito</h2>

                {carrito.length === 0 && (
                    <p className="text-muted my-3">Tu carrito está vacío. ¡Agrega algo rico! 😋</p>
                )}

                {carrito.map(producto => (
                    <div
                        key={producto.id}
                        className="row align-items-center py-2 border-bottom"
                    >
                        <div className="col-4 text-start">
                            {producto.emoji} {producto.nombre} × {producto.cantidad}
                        </div>

                        <div className="col-3 text-end fw-semibold">
                            {formatearPrecio(producto.precio * producto.cantidad)}
                        </div>

                        <div className="col-5 d-flex justify-content-end gap-2">
                            <button
                                className="btn btn-sm btn-danger"
                                onClick={() => disminuirCantidad(producto.id)}
                            >
                                −
                            </button>
                            <button
                                className="btn btn-sm btn-primary"
                                onClick={() => aumentarCantidad(producto.id)}
                            >
                                +
                            </button>
                            <button
                                className="btn btn-sm btn-secondary"
                                onClick={() => eliminarDelCarrito(producto.id)}
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}

                <h3 className="text-end mt-3">Total: {formatearPrecio(total)}</h3>

                {carrito.length > 0 && (
                    <div className="text-end">
                        <button className="btn btn-outline-danger" onClick={vaciarCarrito}>
                            Vaciar carrito
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
export default Carrito;