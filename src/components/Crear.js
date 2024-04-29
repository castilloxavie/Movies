import { useState } from "react";
import { saveInStorage } from "../helpers/GuardarEnStorage";

export const Crear = ({setListState}) => {
    const title = "Añadir pelicula ";

    /* El código `const [moviesState, setMoviesState] = useState({ titles: "", descripción: "" });` es
    usando el gancho `useState` de React para crear una variable de estado llamada `moviesState` y un
    función para actualizar ese estado llamada `setMoviesState`. */
    const [moviesState, setMoviesState] = useState({
        titles: "",
        description: "",
    });

    //destructural el useState de  moviesState
    const { titles, description } = moviesState;

    /*
     La función `getFormData` captura datos del formulario, crea un objeto de película y actualiza la aplicación
     estado y guarda la película en el almacenamiento local.
     @param e - El parámetro `e` en la función `getFormData` suele ser un objeto de evento que
     representa el evento que desencadenó la función. En este caso, es probable que sea un objeto de evento.
     relacionado con el envío de un formulario, ya que la función está diseñada para manejar datos del formulario. El
     Se utiliza el método `e.preventDefault()`
     */
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

        //actualizar el estado principal de la aplicacion
        setListState(elements => {
            return [...elements, movie]
        })

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
