import productos from "../data/productos";
import Producto from "./Producto.jsx";


function ListaProductos({ agregarAlCarrito }) {
    return (

        <div className="row g-4 justify-content-center">
            {productos.map(producto => (
                <div key={producto.id} className="col-12 col-sm-6 col-md-4 col-lg-4">
                <Producto
                    key={producto.id}
                    id={producto.id}
                    nombre={producto.nombre}
                    precio={producto.precio}
                    emoji={producto.emoji}
                    agregarAlCarrito={agregarAlCarrito}
                />
                </div>
            ))}
        </div>
    );
}
export default ListaProductos;
