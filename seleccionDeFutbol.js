"use strict";
exports.__esModule = true;
exports.SeleccionDeFutbol = void 0;
var SeleccionDeFutbol = /** @class */ (function () {
    function SeleccionDeFutbol(P_nombreSeleccion, P_CiudadSeleccion, P_paisSeleccion, P_personas) {
        this.nombreSelecc = P_nombreSeleccion;
        this.ciudad = P_CiudadSeleccion;
        this.pais = P_paisSeleccion;
        this.Personas = P_personas;
    }
    SeleccionDeFutbol.prototype.getnombreSeleccion = function () {
        return this.nombreSelecc;
    };
    SeleccionDeFutbol.prototype.setnombreSeleccion = function (P_nombreSeleccion) {
        this.nombreSelecc = P_nombreSeleccion;
    };
    SeleccionDeFutbol.prototype.getciudad = function () {
        return this.ciudad;
    };
    SeleccionDeFutbol.prototype.setciudad = function (P_ciudad) {
        this.ciudad = P_ciudad;
    };
    SeleccionDeFutbol.prototype.getpais = function () {
        return this.pais;
    };
    SeleccionDeFutbol.prototype.setpais = function (P_pais) {
        this.pais = P_pais;
    };
    return SeleccionDeFutbol;
}());
exports.SeleccionDeFutbol = SeleccionDeFutbol;
