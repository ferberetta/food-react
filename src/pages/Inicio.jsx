import Carousel from "react-bootstrap/Carousel";

function Inicio() {
    return (
        <div>
            <h2 className="mb-4">Bienvenido a ricuras 🍔</h2>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: "400px", objectFit: "cover", filter: "brightness(60%)" }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaw0Pl05buZ6lydz1Wx3D-mBntBP-TuoTVFRozA5u-Qw&s=10"
                        alt="Hamburguesas"
                    />
                    <Carousel.Caption>
                        <h3>Hamburguesas 🍔</h3>
                        <p>Disfruta de nuestras sabrosas hamburguesas!</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: "400px", objectFit: "cover", filter: "brightness(60%)" }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZk_81jLBcXxjwroy0fguoWM5DcvrRNWpCUWKlMeFtB0JkSeJoUMqDle4&s=10"
                        alt="Pizza"
                    />
                    <Carousel.Caption>
                        <h3>Pizza 🍕</h3>
                        <p>Prueba nuestras pizzas recién horneadas!</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: "400px", objectFit: "cover", filter: "brightness(60%)" }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGyN5E9nUvo3zRxnmGvm9hefBD3c5dMT3ogvdURyC_ei8jKoZ1SJ6Lyu-0&s=10"
                        alt="Completos"
                    />
                    <Carousel.Caption>
                        <h3>Completos 🌭</h3>
                        <p>Endulza tu día con nuestros deliciosos completos!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
export default Inicio;