import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import BarraSuperior from "./components/BarraSuperior.jsx";
import BarraLateral from "./components/BarraLateral.jsx";
import Inicio from "./pages/Inicio.jsx";
import Productos from "./pages/Productos.jsx";
import Ofertas from "./pages/Ofertas.jsx";
import CarritoPage from "./pages/CarritoPage.jsx";
import Login from "./pages/Login.jsx";
import { guardarCarrito, obtenerCarrito, eliminarCarrito } from "./utils/localStorage.js";
import ProtectedRoute from "./components/ProtectedRoute.jsx";


function App() {
  const [carrito, setCarrito] = useState(() => obtenerCarrito());

  const cantidadProductos = carrito.reduce(
    (acc, producto) => acc + producto.cantidad,
    0
  );

  useEffect(() => {
    guardarCarrito(carrito);
  }, [carrito]);

  function vaciarCarrito() {
    setCarrito([]);
    eliminarCarrito();
  }

  function agregarAlCarrito(producto) {
    setCarrito(carritoActual => {
      const productoExiste = carritoActual.some(
        item => item.id === producto.id
      );

      if (productoExiste) {
        return carritoActual.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }

      return [...carritoActual, { ...producto, cantidad: 1 }];
    });
  }

  function aumentarCantidad(id) {
    setCarrito(carritoActual =>
      carritoActual.map(producto =>
        producto.id === id
          ? { ...producto, cantidad: producto.cantidad + 1 }
          : producto
      )
    );
  }

  function disminuirCantidad(id) {
    setCarrito(carritoActual =>
      carritoActual
        .map(producto =>
          producto.id === id
            ? { ...producto, cantidad: producto.cantidad - 1 }
            : producto
        )
        .filter(producto => producto.cantidad > 0)
    );
  }

  function eliminarDelCarrito(id) {
    setCarrito(carritoActual =>
      carritoActual.filter(producto => producto.id !== id)
    );
  }

  return (
    <>
      <BarraSuperior cantidadProductos={cantidadProductos} />

      <div className="d-flex">
        <BarraLateral />

        <div className="flex-grow-1 container py-4 text-center">
          <Routes>
            <Route path="/" element={<Inicio />} />

            <Route
              path="/productos"
              element={
                <ProtectedRoute>
                  <Productos agregarAlCarrito={agregarAlCarrito} />
                </ProtectedRoute>
              }
            />

            <Route path="/ofertas" element={
              <ProtectedRoute>
                <Ofertas />
              </ProtectedRoute>
            } />

            <Route
              path="/carrito"
              element={
                <ProtectedRoute>
                  <CarritoPage
                    carrito={carrito}
                    aumentarCantidad={aumentarCantidad}
                    disminuirCantidad={disminuirCantidad}
                    eliminarDelCarrito={eliminarDelCarrito}
                    vaciarCarrito={vaciarCarrito}
                  />
                </ProtectedRoute>}
            />

            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
export default App;