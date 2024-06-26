import { useState } from "react";

import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";

function App() {
    const [listState, setListState] = useState([]);

    return (
        <div className="layout">
            {/* <!--Cabecera--> */}
            <header className="header">
                <div className="header__logo">
                    <div className="header__logo--play"></div>
                </div>
                <h1>MisPelis</h1>
            </header>

            {/* <!-- barra de navegaciom --> */}
            <nav className="nav">
                <ul>
                    <li>
                        <a href="/#">Inicio</a>
                    </li>
                    <li>
                        <a href="/#">Peliculas</a>
                    </li>
                    <li>
                        <a href="/#">Blog</a>
                    </li>
                    <li>
                        <a href="/#">Contacto</a>
                    </li>
                </ul>
            </nav>

            {/* <!-- contenido principa --> */}
            <section className="content">
                {/* <!-- aqui van todas las pelicula --> */}
                <Listado listState={listState} setListState={setListState} />
            </section>

            {/* <!-- barra Lateral --> */}
            <aside className="lateral">
                <Buscador listState={listState} setListState={setListState} />

                <Crear setListState={setListState} />
            </aside>

            {/* <!-- Pie de Pagina --> */}
            <footer className="footer">&copy; Xavier alberto castillo</footer>
        </div>
    );
}

export default App;
