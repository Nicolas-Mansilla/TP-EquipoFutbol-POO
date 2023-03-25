import { Personas } from './personas';


 export class Jugadores extends Personas{
    
    private disponibleParaJugar:boolean;
    
    constructor(P_disponibleParajugar:boolean,P_Nombre: string,P_apellido: string,P_pasaporte: number,P_fechaNacimiento: number){
        super(P_Nombre,P_apellido,P_pasaporte,P_fechaNacimiento);
        this.disponibleParaJugar=P_disponibleParajugar;
    }
    getdisponibleParaJugar():boolean{
        return this.disponibleParaJugar;
    }
    setdisponibleParaJugar(P_disponibleParajugar:boolean):void{
        this.disponibleParaJugar=P_disponibleParajugar;
    }
}