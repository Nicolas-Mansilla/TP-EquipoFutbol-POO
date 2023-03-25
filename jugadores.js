"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Jugadores = void 0;
var personas_1 = require("./personas");
var Jugadores = /** @class */ (function (_super) {
    __extends(Jugadores, _super);
    function Jugadores(P_disponibleParajugar, P_Nombre, P_apellido, P_pasaporte, P_fechaNacimiento) {
        var _this = _super.call(this, P_Nombre, P_apellido, P_pasaporte, P_fechaNacimiento) || this;
        _this.disponibleParaJugar = P_disponibleParajugar;
        return _this;
    }
    Jugadores.prototype.getdisponibleParaJugar = function () {
        return this.disponibleParaJugar;
    };
    Jugadores.prototype.setdisponibleParaJugar = function (P_disponibleParajugar) {
        this.disponibleParaJugar = P_disponibleParajugar;
    };
    return Jugadores;
}(personas_1.Personas));
exports.Jugadores = Jugadores;
