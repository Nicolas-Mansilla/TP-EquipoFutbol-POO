"use strict";
exports.__esModule = true;
exports.Personas = void 0;
var Personas = /** @class */ (function () {
    function Personas(P_nombre, P_apellido, P_pasaporte, P_fechaNacimiento) {
        this.nombre = P_nombre;
        this.apellido = P_apellido;
        this.pasaporte = P_pasaporte;
        this.fechaNacimiento = P_fechaNacimiento;
    }
    Personas.prototype.getnombre = function () {
        return this.nombre;
    };
    Personas.prototype.setnombre = function (P_nombre) {
        this.nombre = P_nombre;
    };
    Personas.prototype.getapellido = function () {
        return this.apellido;
    };
    Personas.prototype.setapellido = function (P_apellido) {
        this.apellido = P_apellido;
    };
    Personas.prototype.getpasaporte = function () {
        return this.pasaporte;
    };
    Personas.prototype.setpasaporte = function (P_pasaporte) {
        this.pasaporte = P_pasaporte;
    };
    Personas.prototype.getfechaNacimiento = function () {
        return this.fechaNacimiento;
    };
    Personas.prototype.setfechaNacimiento = function (P_fechaNacimiento) {
        this.fechaNacimiento = P_fechaNacimiento;
    };
    return Personas;
}());
exports.Personas = Personas;
