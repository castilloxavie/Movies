import { useEffect, useState } from "react";

import { Editar } from "./Editar";

export const Listado = ({ listState, setListState }) => {
    // const [listState, setListState] = useState([]);

    const [edit, setEdit] = useState(0);

    useEffect(() => {
        getMovies();
    }, []);

    /*
     La función `getMovies` recupera una lista de películas del almacenamiento local y actualiza el estado
     con las películas recuperadas.
     @returns La función `getMovies` devuelve el valor de la variable `moviess`, que es el
     datos JSON analizados recuperados de la clave "películas" en el almacenamiento local.
     */
    const getMovies = () => {
        let moviess = JSON.parse(localStorage.getItem("movies"));
        setListState(moviess);
        return moviess;
    };

    /*
     La función `deleteMovie` elimina una película de una lista de películas guardadas según su ID y
     actualiza el estado de la lista y el almacenamiento local en consecuencia.
     @param id: el parámetro `id` en la función `deleteMovie` representa el identificador único de
     la película que desea eliminar de la lista de películas guardadas.
     */
    const deleteMovie = (id) => {
        //conseguir prliculas almacenadas
        let savedMovies = getMovies();

        //filtrar las peliculas para que elimine del arreglo las que no quiero
        let newListMovies = savedMovies.filter(
            (movie) => movie.id !== parseInt(id)
        );

        //actualizar estado del listado
        setListState(newListMovies);

        // actualizar los datos en el local srorage
        localStorage.setItem("movies", JSON.stringify(newListMovies));
    };

    return (
        <>
            {listState != null ? (
                listState.map((movie) => {
                    return (
                        <article
                            key={movie.id}
                            className="content__Peliculas--item"
                        >
                            <h3 className="content__Peliculas--title">
                                {movie.titles}
                            </h3>
                            <p className="content__Peliculas--texto">
                                {movie.description}
                            </p>

                            <button
                                className="content__Peliculas--edit"
                                onClick={() => {
                                    setEdit(movie.id);
                                }}
                            >
                                Editar
                            </button>
                            <button
                                className="content__Peliculas--Delete"
                                onClick={() => deleteMovie(movie.id)}
                            >
                                Borrar
                            </button>

                            {/* formulario para editar las card de las peliculas */}
                            {edit === movie.id && (
                                <Editar
                                    movie={movie}
                                    getMovies={getMovies}
                                    setEdit={setEdit}
                                    setListState={setListState}
                                />
                            )}
                        </article>
                    );
                })
            ) : (
                <h2>No hay peliculoas para mostrar</h2>
            )}
        </>
    );
};
