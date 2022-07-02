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
var BeachSceneInteractionAnja;
(function (BeachSceneInteractionAnja) {
    var Person = /** @class */ (function (_super) {
        __extends(Person, _super);
        function Person(_position, _clothes, _color) {
            var _this = this;
            var hitBoxTopLeft = new BeachSceneInteractionAnja.Vector(7.5, 0);
            var hitBoxBottomRight = new BeachSceneInteractionAnja.Vector(67.5, 93.5);
            _this = _super.call(this, _position, new BeachSceneInteractionAnja.Vector(0, 0), hitBoxTopLeft, hitBoxBottomRight) || this;
            _this.clothes = _clothes;
            _this.color = _color;
            return _this;
        }
        Person.prototype.draw = function () {
            // Hände
            BeachSceneInteractionAnja.crc2.save();
            BeachSceneInteractionAnja.crc2.translate(this.position.x, this.position.y);
            BeachSceneInteractionAnja.crc2.beginPath();
            BeachSceneInteractionAnja.crc2.arc(12.5, 42, 5, 0, 2 * Math.PI);
            BeachSceneInteractionAnja.crc2.stroke();
            BeachSceneInteractionAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneInteractionAnja.crc2.fill();
            BeachSceneInteractionAnja.crc2.beginPath();
            BeachSceneInteractionAnja.crc2.arc(62.5, 42, 5, 0, 2 * Math.PI);
            BeachSceneInteractionAnja.crc2.stroke();
            BeachSceneInteractionAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneInteractionAnja.crc2.fill();
            // Füße
            BeachSceneInteractionAnja.crc2.beginPath();
            BeachSceneInteractionAnja.crc2.arc(30, 88, 5.5, 0, 2 * Math.PI);
            BeachSceneInteractionAnja.crc2.stroke();
            BeachSceneInteractionAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneInteractionAnja.crc2.fill();
            BeachSceneInteractionAnja.crc2.beginPath();
            BeachSceneInteractionAnja.crc2.arc(45, 88, 5.5, 0, 2 * Math.PI);
            BeachSceneInteractionAnja.crc2.stroke();
            BeachSceneInteractionAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneInteractionAnja.crc2.fill();
            //shirt/skirt
            BeachSceneInteractionAnja.crc2.beginPath();
            BeachSceneInteractionAnja.crc2.moveTo(37.5, 20);
            BeachSceneInteractionAnja.crc2.lineTo(12.5, 37.5);
            BeachSceneInteractionAnja.crc2.lineTo(15, 45);
            BeachSceneInteractionAnja.crc2.lineTo(25, 42);
            if (this.clothes === "shirt") {
                BeachSceneInteractionAnja.crc2.lineTo(22, 57);
                BeachSceneInteractionAnja.crc2.lineTo(53, 57);
            }
            else {
                BeachSceneInteractionAnja.crc2.lineTo(20, 87.5);
                BeachSceneInteractionAnja.crc2.lineTo(55, 87.5);
            }
            BeachSceneInteractionAnja.crc2.lineTo(50, 42);
            BeachSceneInteractionAnja.crc2.lineTo(60, 45);
            BeachSceneInteractionAnja.crc2.lineTo(62.5, 37.5);
            BeachSceneInteractionAnja.crc2.closePath();
            BeachSceneInteractionAnja.crc2.stroke();
            BeachSceneInteractionAnja.crc2.fillStyle = this.color;
            BeachSceneInteractionAnja.crc2.fill();
            if (this.clothes === "shirt") {
                // hose
                BeachSceneInteractionAnja.crc2.beginPath();
                BeachSceneInteractionAnja.crc2.moveTo(25, 57);
                BeachSceneInteractionAnja.crc2.lineTo(27, 87.5);
                BeachSceneInteractionAnja.crc2.lineTo(35, 87.5);
                BeachSceneInteractionAnja.crc2.lineTo(36, 63);
                BeachSceneInteractionAnja.crc2.lineTo(39, 63);
                BeachSceneInteractionAnja.crc2.lineTo(40, 87.5);
                BeachSceneInteractionAnja.crc2.lineTo(48, 87.5);
                BeachSceneInteractionAnja.crc2.lineTo(50, 57);
                BeachSceneInteractionAnja.crc2.closePath();
                BeachSceneInteractionAnja.crc2.stroke();
                BeachSceneInteractionAnja.crc2.fillStyle = "#343F51";
                BeachSceneInteractionAnja.crc2.fill();
            }
            // Kopf
            BeachSceneInteractionAnja.crc2.beginPath();
            BeachSceneInteractionAnja.crc2.arc(37.5, 12.5, 12.5, 0, 2 * Math.PI);
            BeachSceneInteractionAnja.crc2.stroke();
            BeachSceneInteractionAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneInteractionAnja.crc2.fill();
            BeachSceneInteractionAnja.crc2.restore();
        };
        return Person;
    }(BeachSceneInteractionAnja.BeachElement));
    BeachSceneInteractionAnja.Person = Person;
})(BeachSceneInteractionAnja || (BeachSceneInteractionAnja = {}));
//# sourceMappingURL=Person.js.map