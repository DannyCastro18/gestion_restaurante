// Se crea la clase menu 
class Menu {
    constructor() {
        this.platos = []; // Array para ingresar nuevos platos a la clase
    }

    agregarPlato(plato) { // parametro de plato 
        this.platos.push(plato); //usando el array se ingresa un nuevo plato utilizando su parametro
    }

    listarPlatos () {
        return this.platos;
    }
}

// Se exporta la clase Menu para que pueda ser utilizada en otros archivos  
export default Menu;