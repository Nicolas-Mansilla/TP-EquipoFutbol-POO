import { SeleccionDeFutbol } from "./seleccionDeFutbol";
import { Jugadores } from './jugadores';
import { Masajista } from './masajista';
import { Entrenador } from './entrenador';

export class Personas{
    protected nombre:string;
    protected apellido:string;
    protected pasaporte:number;
    protected fechaNacimiento:number;
    protected jugadores:Jugadores;
    protected masajista:Masajista;
    protected entrenador:Entrenador;


    constructor (P_nombre:string,P_apellido:string,P_pasaporte:number,P_fechaNacimiento:number){
        this.nombre=P_nombre;
        this.apellido=P_apellido;
        this.pasaporte=P_pasaporte;
        this.fechaNacimiento=P_fechaNacimiento;	
    }

    getnombre():string{
       return  this.nombre;
     }
    setnombre(P_nombre):void{
        this.nombre=P_nombre;
     }
    getapellido():string{
        return  this.apellido;
    }
    setapellido(P_apellido):void{
         this.apellido=P_apellido;
    }
    getpasaporte():number{
        return  this.pasaporte;
      }
    setpasaporte(P_pasaporte):void{
         this.pasaporte=P_pasaporte;
      }
    getfechaNacimiento():number{
        return  this.fechaNacimiento;
      }
    setfechaNacimiento(P_fechaNacimiento):void{
         this.fechaNacimiento=P_fechaNacimiento;
      }
}