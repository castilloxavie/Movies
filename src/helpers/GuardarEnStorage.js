 
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