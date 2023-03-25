import { Personas } from './personas';



export class Entrenador extends Personas{
    private disponibleParaEntrenar:boolean;

    constructor(P_disponibleParaEntrenar:boolean,P_Nombre: string,P_apellido: string,P_pasaporte: number,P_fechaNacimiento:number){
        super(P_Nombre,P_apellido,P_pasaporte,P_fechaNacimiento);
        this.disponibleParaEntrenar=P_disponibleParaEntrenar;
    }


    getdisponibleParaEntrenar():boolean{
        return this.disponibleParaEntrenar;
    }
    setdisponibleParaEntrenar(P_disponibleParaEntrenar):void{
        this.disponibleParaEntrenar=P_disponibleParaEntrenar;
    }
}