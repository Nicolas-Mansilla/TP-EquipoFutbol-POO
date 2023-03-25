import { SeleccionDeFutbol } from './seleccionDeFutbol';
import { Personas } from './personas';
import { Entrenador } from './entrenador';
import{Masajista} from'./masajista'
import { Jugadores } from './jugadores';


let masajista1:Masajista=new Masajista(120000,"Alberto","Paredes",23444543,1946);
let entrenador1:Entrenador=new Entrenador(false,"Mariano","Pasaglia",5000123123,1998);
let jugador1:Jugadores=new Jugadores (true,"Alfredo","Delantero",23332123,2014);

let seleccion1:SeleccionDeFutbol=new SeleccionDeFutbol("Asociacion de Futbol Argentina","Buenos Aires","Argentina",jugador1);


console.log(seleccion1);
console.log(masajista1);
console.log(entrenador1);

