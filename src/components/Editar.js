export const Editar = ({ movie, getMovies, setEdit, setListState}) => {
    const componenst_title = "Editar Pelicula";

    const saveEdit = (e, id) => {
        e.preventDefault();

        //conseguir el target del evento
        let target = e.target;

        //buscar el indice de la pelicula que deseo actualizar
        const storedMovies = getMovies();
        const indes = storedMovies.findIndex((movie) => movie.id === id);

        //crear objeto con ese id es del indice, titulo y descripcion
        let movie_Update = {
            id,
            titles: target.title.value,
            description: target.description.value,
        };

        console.log(indes, storedMovies);

        //actualizar el elemento con el indice
        storedMovies[indes] = movie_Update;

        //guardar el nuevo arreglo de objeto
        localStorage.setItem("movies", JSON.stringify(storedMovies));

        //actualizar el estado
        setListState(storedMovies)
        setEdit(0)


    };

    return (
        <div className=" lateral bg__editar">
            <h3 className="edit__form--title">{componenst_title}</h3>

            <form onSubmit={(e) => saveEdit(e, movie.id)}>
                <input
                    type="text"
                    name="title"
                    className="title__edit"
                    defaultValue={movie.titles}
                />
                <textarea
                    name="description"
                    defaultValue={movie.description}
                    className="descriton_edit"
                ></textarea>
                <input type="submit" className="edit" value="Actualizar" />
            </form>
        </div>
    );
};
