import Plato from "./plato.js";
import Menu from "./menu.js";
import Restaurante from "./restaurante.js";

const restaurante = new Restaurante();

// Crear platos
const plato1 = new Plato('Ensalada de frutas', 8.000);
const plato2 = new Plato('Bandeja paisa', 17.000);
const plato3 = new Plato('Sancocho de pescado', 7.000);

// Crear menú
const menuDia = new Menu();
menuDia.agregarPlato(plato1);
menuDia.agregarPlato(plato2);
menuDia.agregarPlato(plato3);

// Agregar el menú al restaurante
restaurante.agregarMenu('Menu del Día', menuDia);

// Crear un pedido para la mesa 1
restaurante.crearPedido(1);
restaurante.agregarPlatoPedido(1, plato1);
restaurante.agregarPlatoPedido(1, plato2);

// Mostrar el total
restaurante.verTotal(1); // Total a pagar para la mesa 1

// Listar platos del menú
console.log('Platos del menú del día:');
console.log(menuDia.listarPlatos('Menu del Día'));
