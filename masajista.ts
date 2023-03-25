import { Personas } from './personas';

export class Masajista extends Personas{
    private salario:number;

    constructor(P_salario:number,P_Nombre: string,P_apellido: string,P_pasaporte: number,P_fechaNacimiento:number){
        super(P_Nombre,P_apellido,P_pasaporte,P_fechaNacimiento);
        this.salario=P_salario;
    }

    getsalario():number{
    return this.salario;
    }
    setsalario(P_salario):void{
        this.salario=P_salario;
    }
}