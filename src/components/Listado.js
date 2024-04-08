import { useEffect, useState } from "react";

export const Listado = () => {

    const [listState, setListState] = useState([])

    const getMovies =  () => {
        let moviess = JSON.parse(localStorage.getItem("movies"))
        setListState(moviess);
    }

    useEffect(() => {
        getMovies();
    }, [])
    
    
    return (
        <>
            <article className="content__Peliculas--item">
                <h3 className="content__Peliculas--title">Desarrollo Wub</h3>
                <p className="content__Peliculas--texto">
                    Andamos trabajando para mejorar las habilidades
                </p>
                <button className="content__Peliculas--edit">Editar</button>
                <button className="content__Peliculas--Delete">Borrar</button>
            </article>

            
        </>
    );
};
