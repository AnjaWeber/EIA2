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
    var Surfer = /** @class */ (function (_super) {
        __extends(Surfer, _super);
        function Surfer(_position) {
            // const hitBoxTopLeft: Vector = new Vector(7.5, -2);
            // const hitBoxBottomRight: Vector = new Vector(67.5, 93.5);
            var hitBoxTopLeft = new BeachSceneInteractionAnja.Vector(0, 0);
            var hitBoxBottomRight = new BeachSceneInteractionAnja.Vector(0, 0);
            return _super.call(this, _position, new BeachSceneInteractionAnja.Vector(0, 0), hitBoxTopLeft, hitBoxBottomRight) || this;
        }
        Surfer.prototype.draw = function () {
            //Kopf
            BeachSceneInteractionAnja.crc2.save();
            BeachSceneInteractionAnja.crc2.translate(this.position.x, this.position.y);
            BeachSceneInteractionAnja.crc2.beginPath();
            BeachSceneInteractionAnja.crc2.arc(37.5, 12.5, 12.5, 0, 2 * Math.PI);
            BeachSceneInteractionAnja.crc2.stroke();
            BeachSceneInteractionAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneInteractionAnja.crc2.fill();
            //Körper
            BeachSceneInteractionAnja.crc2.beginPath();
            BeachSceneInteractionAnja.crc2.moveTo(37.5, 20);
            BeachSceneInteractionAnja.crc2.lineTo(12.5, 37.5);
            BeachSceneInteractionAnja.crc2.lineTo(15, 45);
            BeachSceneInteractionAnja.crc2.lineTo(25, 42);
            BeachSceneInteractionAnja.crc2.lineTo(25, 57);
            BeachSceneInteractionAnja.crc2.lineTo(50, 57);
            BeachSceneInteractionAnja.crc2.lineTo(50, 30);
            BeachSceneInteractionAnja.crc2.lineTo(65, 7.5);
            BeachSceneInteractionAnja.crc2.lineTo(62.5, 0);
            BeachSceneInteractionAnja.crc2.closePath();
            BeachSceneInteractionAnja.crc2.stroke();
            BeachSceneInteractionAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneInteractionAnja.crc2.fill();
            BeachSceneInteractionAnja.crc2.beginPath();
            BeachSceneInteractionAnja.crc2.arc(12.5, 42, 5, 0, 2 * Math.PI);
            BeachSceneInteractionAnja.crc2.stroke();
            BeachSceneInteractionAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneInteractionAnja.crc2.fill();
            BeachSceneInteractionAnja.crc2.beginPath();
            BeachSceneInteractionAnja.crc2.arc(64, 3, 5, 0, 2 * Math.PI);
            BeachSceneInteractionAnja.crc2.stroke();
            BeachSceneInteractionAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneInteractionAnja.crc2.fill();
            BeachSceneInteractionAnja.crc2.beginPath();
            BeachSceneInteractionAnja.crc2.arc(37.5, 12.5, 12.5, 0, 2 * Math.PI);
            BeachSceneInteractionAnja.crc2.stroke();
            BeachSceneInteractionAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneInteractionAnja.crc2.fill();
            //Badehose
            BeachSceneInteractionAnja.crc2.beginPath();
            BeachSceneInteractionAnja.crc2.moveTo(25, 57);
            BeachSceneInteractionAnja.crc2.lineTo(27, 75);
            BeachSceneInteractionAnja.crc2.lineTo(35, 75);
            BeachSceneInteractionAnja.crc2.lineTo(36, 63);
            BeachSceneInteractionAnja.crc2.lineTo(39, 63);
            BeachSceneInteractionAnja.crc2.lineTo(40, 75);
            BeachSceneInteractionAnja.crc2.lineTo(48, 75);
            BeachSceneInteractionAnja.crc2.lineTo(50, 57);
            BeachSceneInteractionAnja.crc2.closePath();
            BeachSceneInteractionAnja.crc2.stroke();
            BeachSceneInteractionAnja.crc2.fillStyle = "#E71837";
            BeachSceneInteractionAnja.crc2.fill();
            //Bein links
            BeachSceneInteractionAnja.crc2.beginPath();
            BeachSceneInteractionAnja.crc2.moveTo(28, 75);
            BeachSceneInteractionAnja.crc2.lineTo(28, 90);
            BeachSceneInteractionAnja.crc2.lineTo(34, 90);
            BeachSceneInteractionAnja.crc2.lineTo(34, 75);
            BeachSceneInteractionAnja.crc2.closePath();
            BeachSceneInteractionAnja.crc2.stroke();
            BeachSceneInteractionAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneInteractionAnja.crc2.fill();
            //Bein rechts
            BeachSceneInteractionAnja.crc2.beginPath();
            BeachSceneInteractionAnja.crc2.moveTo(46.5, 75);
            BeachSceneInteractionAnja.crc2.lineTo(46.5, 90);
            BeachSceneInteractionAnja.crc2.lineTo(40, 90);
            BeachSceneInteractionAnja.crc2.lineTo(40, 75);
            BeachSceneInteractionAnja.crc2.closePath();
            BeachSceneInteractionAnja.crc2.stroke();
            BeachSceneInteractionAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneInteractionAnja.crc2.fill();
            //Füße
            BeachSceneInteractionAnja.crc2.beginPath();
            BeachSceneInteractionAnja.crc2.arc(30, 88, 5, 0, 2 * Math.PI);
            BeachSceneInteractionAnja.crc2.stroke();
            BeachSceneInteractionAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneInteractionAnja.crc2.fill();
            BeachSceneInteractionAnja.crc2.beginPath();
            BeachSceneInteractionAnja.crc2.arc(45, 88, 5, 0, 2 * Math.PI);
            BeachSceneInteractionAnja.crc2.stroke();
            BeachSceneInteractionAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneInteractionAnja.crc2.fill();
            BeachSceneInteractionAnja.crc2.restore();
        };
        return Surfer;
    }(BeachSceneInteractionAnja.BeachElement));
    BeachSceneInteractionAnja.Surfer = Surfer;
})(BeachSceneInteractionAnja || (BeachSceneInteractionAnja = {}));
//# sourceMappingURL=Surfer.js.map