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
exports.Entrenador = void 0;
var personas_1 = require("./personas");
var Entrenador = /** @class */ (function (_super) {
    __extends(Entrenador, _super);
    function Entrenador(P_disponibleParaEntrenar, P_Nombre, P_apellido, P_pasaporte, P_fechaNacimiento) {
        var _this = _super.call(this, P_Nombre, P_apellido, P_pasaporte, P_fechaNacimiento) || this;
        _this.disponibleParaEntrenar = P_disponibleParaEntrenar;
        return _this;
    }
    Entrenador.prototype.getdisponibleParaEntrenar = function () {
        return this.disponibleParaEntrenar;
    };
    Entrenador.prototype.setdisponibleParaEntrenar = function (P_disponibleParaEntrenar) {
        this.disponibleParaEntrenar = P_disponibleParaEntrenar;
    };
    return Entrenador;
}(personas_1.Personas));
exports.Entrenador = Entrenador;
