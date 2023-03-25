import { Personas } from './personas';


export class SeleccionDeFutbol{
    private nombreSelecc:string;
    private ciudad:string;
    private pais:string;
    private Personas:Personas;
    

    constructor(P_nombreSeleccion:string,P_CiudadSeleccion:string,P_paisSeleccion:string,P_personas:Personas){
        this.nombreSelecc=P_nombreSeleccion;
        this.ciudad=P_CiudadSeleccion;
        this.pais=P_paisSeleccion;
        this.Personas=P_personas;
    }


    getnombreSeleccion():string{
        return this.nombreSelecc;
    }
    setnombreSeleccion(P_nombreSeleccion):void{
        this.nombreSelecc=P_nombreSeleccion;
    }
    getciudad():string{
        return this.ciudad;
    }
    setciudad(P_ciudad):void{
        this.ciudad=P_ciudad;
    }
    getpais():string{
        return this.pais;
    }
    setpais(P_pais):void{
        this.pais=P_pais;
    }
    

}

