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
var BeachScenePolymorphyAnimationAnja;
(function (BeachScenePolymorphyAnimationAnja) {
    var Surfer = /** @class */ (function (_super) {
        __extends(Surfer, _super);
        function Surfer(_position) {
            return _super.call(this, _position, new BeachScenePolymorphyAnimationAnja.Vector(0, 0)) || this;
        }
        Surfer.prototype.draw = function () {
            //Kopf
            BeachScenePolymorphyAnimationAnja.crc2.save();
            BeachScenePolymorphyAnimationAnja.crc2.translate(this.position.x, this.position.y);
            BeachScenePolymorphyAnimationAnja.crc2.beginPath();
            BeachScenePolymorphyAnimationAnja.crc2.arc(37.5, 12.5, 12.5, 0, 2 * Math.PI);
            BeachScenePolymorphyAnimationAnja.crc2.stroke();
            BeachScenePolymorphyAnimationAnja.crc2.fillStyle = "#FEC7B2";
            BeachScenePolymorphyAnimationAnja.crc2.fill();
            //Körper
            BeachScenePolymorphyAnimationAnja.crc2.beginPath();
            BeachScenePolymorphyAnimationAnja.crc2.moveTo(37.5, 20);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(12.5, 37.5);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(15, 45);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(25, 42);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(25, 57);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(50, 57);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(50, 30);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(65, 7.5);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(62.5, 0);
            BeachScenePolymorphyAnimationAnja.crc2.closePath();
            BeachScenePolymorphyAnimationAnja.crc2.stroke();
            BeachScenePolymorphyAnimationAnja.crc2.fillStyle = "#FEC7B2";
            BeachScenePolymorphyAnimationAnja.crc2.fill();
            BeachScenePolymorphyAnimationAnja.crc2.beginPath();
            BeachScenePolymorphyAnimationAnja.crc2.arc(12.5, 42, 5, 0, 2 * Math.PI);
            BeachScenePolymorphyAnimationAnja.crc2.stroke();
            BeachScenePolymorphyAnimationAnja.crc2.fillStyle = "#FEC7B2";
            BeachScenePolymorphyAnimationAnja.crc2.fill();
            BeachScenePolymorphyAnimationAnja.crc2.beginPath();
            BeachScenePolymorphyAnimationAnja.crc2.arc(64, 3, 5, 0, 2 * Math.PI);
            BeachScenePolymorphyAnimationAnja.crc2.stroke();
            BeachScenePolymorphyAnimationAnja.crc2.fillStyle = "#FEC7B2";
            BeachScenePolymorphyAnimationAnja.crc2.fill();
            BeachScenePolymorphyAnimationAnja.crc2.beginPath();
            BeachScenePolymorphyAnimationAnja.crc2.arc(37.5, 12.5, 12.5, 0, 2 * Math.PI);
            BeachScenePolymorphyAnimationAnja.crc2.stroke();
            BeachScenePolymorphyAnimationAnja.crc2.fillStyle = "#FEC7B2";
            BeachScenePolymorphyAnimationAnja.crc2.fill();
            //Badehose
            BeachScenePolymorphyAnimationAnja.crc2.beginPath();
            BeachScenePolymorphyAnimationAnja.crc2.moveTo(25, 57);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(27, 75);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(35, 75);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(36, 63);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(39, 63);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(40, 75);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(48, 75);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(50, 57);
            BeachScenePolymorphyAnimationAnja.crc2.closePath();
            BeachScenePolymorphyAnimationAnja.crc2.stroke();
            BeachScenePolymorphyAnimationAnja.crc2.fillStyle = "#E71837";
            BeachScenePolymorphyAnimationAnja.crc2.fill();
            //Bein links
            BeachScenePolymorphyAnimationAnja.crc2.beginPath();
            BeachScenePolymorphyAnimationAnja.crc2.moveTo(28, 75);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(28, 90);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(34, 90);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(34, 75);
            BeachScenePolymorphyAnimationAnja.crc2.closePath();
            BeachScenePolymorphyAnimationAnja.crc2.stroke();
            BeachScenePolymorphyAnimationAnja.crc2.fillStyle = "#FEC7B2";
            BeachScenePolymorphyAnimationAnja.crc2.fill();
            //Bein rechts
            BeachScenePolymorphyAnimationAnja.crc2.beginPath();
            BeachScenePolymorphyAnimationAnja.crc2.moveTo(46.5, 75);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(46.5, 90);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(40, 90);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(40, 75);
            BeachScenePolymorphyAnimationAnja.crc2.closePath();
            BeachScenePolymorphyAnimationAnja.crc2.stroke();
            BeachScenePolymorphyAnimationAnja.crc2.fillStyle = "#FEC7B2";
            BeachScenePolymorphyAnimationAnja.crc2.fill();
            //Füße
            BeachScenePolymorphyAnimationAnja.crc2.beginPath();
            BeachScenePolymorphyAnimationAnja.crc2.arc(30, 88, 5, 0, 2 * Math.PI);
            BeachScenePolymorphyAnimationAnja.crc2.stroke();
            BeachScenePolymorphyAnimationAnja.crc2.fillStyle = "#FEC7B2";
            BeachScenePolymorphyAnimationAnja.crc2.fill();
            BeachScenePolymorphyAnimationAnja.crc2.beginPath();
            BeachScenePolymorphyAnimationAnja.crc2.arc(45, 88, 5, 0, 2 * Math.PI);
            BeachScenePolymorphyAnimationAnja.crc2.stroke();
            BeachScenePolymorphyAnimationAnja.crc2.fillStyle = "#FEC7B2";
            BeachScenePolymorphyAnimationAnja.crc2.fill();
            BeachScenePolymorphyAnimationAnja.crc2.restore();
        };
        return Surfer;
    }(BeachScenePolymorphyAnimationAnja.BeachElement));
    BeachScenePolymorphyAnimationAnja.Surfer = Surfer;
})(BeachScenePolymorphyAnimationAnja || (BeachScenePolymorphyAnimationAnja = {}));
//# sourceMappingURL=Surfer.js.map