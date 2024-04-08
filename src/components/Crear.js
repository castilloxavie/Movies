import { useState } from "react";
import { saveInStorage } from "../helpers/GuardarEnStorage";

export const Crear = () => {
    const title = "Añadir pelicula ";

    const [moviesState, setMoviesState] = useState({
        titles: "",
        description: "",
    });

    //destructural el useState de  moviesState
    const { titles, description } = moviesState;

    const getFormData = (e) => {
        e.preventDefault();

        //conseguir datos del formulario
        let target = e.target;
        let titles = target.title.value;
        let description = target.descriptions.value;

        //crear objeto de la paelicula para guardar
        let movie = {
            id: new Date().getTime(),
            titles,
            description,
        };
        // console.log(movie);

        //guiardar el estado
        setMoviesState(movie);
        console.log(setMoviesState);

        //guardar en el almacenamiento local
        saveInStorage("movies", movie);
    };

    return (
        <div className="add">
            <h3 className="add__title">{title}</h3>

            <strong>
                {(titles && description) && "Has creado la pelicula: " + titles}
            </strong>

            <form onSubmit={getFormData}>
                <input
                    type="text"
                    placeholder="Titulo"
                    id="title"
                    name="title"
                />
                <textarea
                    id="descriptions"
                    placeholder="Descripcion"
                    name="descriptions"
                ></textarea>
                <input type="submit" value="Guardar" id="save" />
            </form>
        </div>
    );
};
