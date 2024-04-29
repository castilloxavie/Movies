import { useState } from "react";

export const Buscador = ({ listState, setListState }) => {
    const [search, setSearch] = useState("");
    const [notFound, setNotFound] = useState(false);

    const movieSearch = (e) => {
        // crfea estado y actualizarlo
        setSearch(e.target.value);

        //filtrar
        let moviesFound = listState.filter((movie) => {
            return movie.titles
                .toLowerCase()
                .includes(search.toLocaleLowerCase());
        });

        if (search.length <= 1 || moviesFound <= 0) {
            moviesFound = JSON.parse(localStorage.getItem("movies"));
            setNotFound(true);
        } else {
            setNotFound(false);
        }

        // actualizar el estado del listado principal
        setListState(moviesFound);
    };

    return (
        <div className="lateral__search">
            <h3 className="lateral__search--title">Buscar: {search}</h3>
            {(notFound == true && search.length > 1) && (
                <span className="lateral__search--nofound">
                    No se ha encontrado ninguna coincidencia
                </span>
            )}
            <form>
                <input
                    type="text"
                    id="search_field"
                    name="search"
                    autoComplete="off"
                    value={search}
                    onChange={movieSearch}
                />
                <button id="searchs">Buscar</button>
            </form>
        </div>
    );
};
