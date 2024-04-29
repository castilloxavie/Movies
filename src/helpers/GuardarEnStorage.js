 
  /*
   La función `saveInStorage` guarda un elemento en localStorage bajo una clave especificada, ya sea
   agregarlo a una matriz existente o crear una nueva matriz si no existe ninguna.
   @param key: el parámetro `key` es una cadena que representa la clave bajo la cual se ejecutará el elemento.
   guardarse en el almacenamiento local. Se utiliza para recuperar y almacenar el elemento en el navegador.
   localStorage usando esta clave como referencia.
   Elemento @param: el parámetro "elemento" en la función "saveInStorage" representa los datos que
   desea guardar en el almacenamiento local. Puede ser cualquier objeto JavaScript, matriz, cadena, número,
   booleano, etc. La función almacenará este elemento en localStorage bajo la clave especificada.
   @returns La función `saveInStorage` devuelve el elemento que se guardó en localStorage
   después de procesarlo.
   */
  export const saveInStorage = (key, element) => {
    //conseguir los elementos que ya tenemos en el localStorage
    let elements = JSON.parse(localStorage.getItem(key));
    console.log(elements);

    //comprobar si es un arreglo
    if (Array.isArray(elements)) {
        // añadir o guardar un elemento nuevo
        elements.push(element);
    } else {
        // crear un arreglo con la nueva elemento
        elements = [element];
    }

    //guardar en el localStorage
    localStorage.setItem(key, JSON.stringify(elements));

    //devolver objeto guardado
    return element
};