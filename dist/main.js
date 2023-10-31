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
var Veiculo = /** @class */ (function () {
    function Veiculo(ligado, _ano) {
        this.ligado = ligado;
        this._ano = _ano;
    }
    Object.defineProperty(Veiculo.prototype, "ano", {
        get: function () {
            return this._ano;
        },
        set: function (ano) {
            this._ano = ano;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Veiculo.prototype.ligar = function () {
        this.ligado = true;
        console.log("O veiculo foi ligado.");
    };
    Veiculo.prototype.desligar = function () {
        this.ligado = false;
        console.log("O carro veiculo foi desligado.");
    };
    return Veiculo;
}());
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(_marca, _numeroPortas, _cor, ano, ligado) {
        var _this = _super.call(this, ligado, ano) || this;
        _this._marca = _marca;
        _this._numeroPortas = _numeroPortas;
        _this._cor = _cor;
        return _this;
    }
    Object.defineProperty(Carro.prototype, "marca", {
        get: function () {
            return this._marca;
        },
        set: function (marca) {
            this._marca = marca;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Carro.prototype, "numeroPortas", {
        get: function () {
            return this._numeroPortas;
        },
        set: function (numeroPortas) {
            this._numeroPortas = numeroPortas;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Carro.prototype, "cor", {
        get: function () {
            return this._cor;
        },
        set: function (cor) {
            this._cor = cor;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Carro.prototype.isEqual = function (comparavel) {
        return this._marca === comparavel._marca &&
            this._numeroPortas === comparavel._numeroPortas &&
            this._cor === comparavel._cor;
    };
    return Carro;
}(Veiculo));
var Aviao = /** @class */ (function (_super) {
    __extends(Aviao, _super);
    function Aviao(_protocolo, _ciaAerea, ano, ligado) {
        var _this = _super.call(this, ligado, ano) || this;
        _this._protocolo = _protocolo;
        _this._ciaAerea = _ciaAerea;
        return _this;
    }
    Object.defineProperty(Aviao.prototype, "protocolo", {
        get: function () {
            return this._protocolo;
        },
        set: function (protocolo) {
            this._protocolo = protocolo;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Aviao.prototype, "ciaAerea", {
        get: function () {
            return this._ciaAerea;
        },
        set: function (ciaAerea) {
            this._ciaAerea = ciaAerea;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Aviao.prototype.isEqual = function (comparavel) {
        return this._protocolo === comparavel._protocolo &&
            this._ciaAerea === comparavel._ciaAerea;
    };
    return Aviao;
}(Veiculo));
var Teste = /** @class */ (function () {
    function Teste() {
    }
    Teste.prototype.main = function () {
        var veiculos = [];
        var aviao1 = new Aviao("1Aew2", "GOL", 1998, false);
        var aviao2 = new Aviao("1das85", "AZUL", 2015, false);
        var carro1 = new Carro("FIAT", 4, "vermelho", 2002, false);
        var carro2 = new Carro("CHEVROLET", 4, "prata", 2018, false);
        veiculos.push(aviao1);
        veiculos.push(aviao2);
        veiculos.push(carro1);
        veiculos.push(carro2);
        veiculos[0].ligar();
        console.log(veiculos[3].ano);
    };
    return Teste;
}());
new Teste().main();
