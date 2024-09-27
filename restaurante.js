import Pedido from "./pedido.js";
// se crea la clase Restaurante para gestionar menus y pedidos
class Restaurante {
    constructor() {
        // se le asigna al atributo menu un objeto para ser mas facil de encontrar e igual para el atributo pedidos
        this.menus = {}; //contiene todos los menus del restaurante
        this.pedidos = {};//contiene todos los pedidos de las mesas del restaurante
    }

    agregarMenu(nombre, menu) { //se crean los parametros de nombre y menu
        this.menus[nombre] = menu;//se crea una entrada para la clase
    }

    crearPedido(mesa) {//se crea el parametro mesa
        //verifica si la mesa no tiene pedidos y permite añadir un nuevo pedido
        if (!this.pedidos[mesa]) { 
            this.pedidos[mesa] = new Pedido();
        }
    }

    agregarPlatoPedido(mesa, plato) {
        //si existe el pedido se agrega un plato
        if (this.pedidos[mesa]) { 
            this.pedidos[mesa].agregarPlato(plato);
        } else { // sino se muestra el mensaje y el numero de la mesa
            console.log(`No hay un pedido para la mesa ${mesa}.`);
        }
    }

    verTotal(mesa) {
        //si existe el pedido se calcula el total y se muestra en la consola el total a pagar para la mesa correspondiente
        if (this.pedidos[mesa]) {
            const total = this.pedidos[mesa].calcularTotal();
            console.log(`Total a pagar para la mesa ${mesa}: ${total}`);
        } else { // si no se muestra el mensaje
            console.log(`No hay un pedido para la mesa ${mesa}.`);
        }
    }

    platosMenu(nombre) {
        //si existe el menu se muestra los platos del menu en la consola
        if (this.menus[nombre]) {
            return this.menus[nombre].listarPlatos();
        } else {// si no, se muestra el mensaje
            return `No hay menú llamado ${nombre}.`;
        }
    }
}

// se importa la clase Restaurante
export default Restaurante;