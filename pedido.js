// se crea la clase Pedido
class Pedido {
    constructor() {
        this.platosPedido = []; // Array para ingresar nuevos pedidos a la clase
    }

    agregarPlato(plato) { // parametro plato 
        this.platosPedido.push(plato); //usando el array se ingresa un nuevo plato utilizando su parametro
    }

    calcularTotal() {
        return this.platosPedido.reduce((total, plato) => total + plato.precio, 0); // se le aplica al atributo el metodo de reduce que lo utilizo para sumar todos los precios de los platos, cero es el valor inicial.
    }
}

// se exporta la clase Pedido para que pueda ser utilizada en otros archivos.
export default Pedido;
