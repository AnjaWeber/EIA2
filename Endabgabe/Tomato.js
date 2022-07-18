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
var GardenSimulator;
(function (GardenSimulator) {
    var Tomato = /** @class */ (function (_super) {
        __extends(Tomato, _super);
        function Tomato(_position, _size) {
            return _super.call(this, _position, _size, 40, 90, 30, 25, 75, 13, 25, 4) || this;
        }
        Tomato.prototype.drawLeaf = function (_position, _angle) {
            GardenSimulator.crc2.save();
            GardenSimulator.crc2.translate(_position.x, _position.y);
            GardenSimulator.crc2.rotate(_angle);
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.moveTo(0, 0);
            GardenSimulator.crc2.bezierCurveTo(0, -5, 7, -3.5, 14, 0);
            GardenSimulator.crc2.moveTo(0, 0);
            GardenSimulator.crc2.bezierCurveTo(0, 5, 7, 3.5, 14, 0);
            GardenSimulator.crc2.fillStyle = "#4D9A2A";
            GardenSimulator.crc2.fill();
            GardenSimulator.crc2.restore();
        };
        Tomato.prototype.draw = function () {
            _super.prototype.draw.call(this);
            GardenSimulator.crc2.save();
            GardenSimulator.crc2.translate(this.position.x, this.position.y);
            GardenSimulator.crc2.scale(this.size.x / 100, this.size.y / 100);
            // Tomate malen
            if (this.ageInDays < this.growthDurationInDays / 3) {
                // kleine tomate
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.moveTo(45, 100);
                GardenSimulator.crc2.bezierCurveTo(45, 90, 50, 80, 55, 70);
                GardenSimulator.crc2.lineWidth = 1.5;
                GardenSimulator.crc2.strokeStyle = "#72B05B";
                GardenSimulator.crc2.stroke();
                this.drawLeaf(new GardenSimulator.Vector(54, 71), 3.7);
                this.drawLeaf(new GardenSimulator.Vector(55, 71), 0.1);
            }
            else if (this.ageInDays < this.growthDurationInDays) {
                // mittlere Tomate
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.moveTo(45, 100);
                GardenSimulator.crc2.bezierCurveTo(55, 45, 55, 30, 63, 20);
                GardenSimulator.crc2.lineWidth = 1.5;
                GardenSimulator.crc2.strokeStyle = "#72B05B";
                GardenSimulator.crc2.stroke();
                this.drawLeaf(new GardenSimulator.Vector(63, 20), 5.3);
                this.drawLeaf(new GardenSimulator.Vector(61, 22), 4.1);
                this.drawLeaf(new GardenSimulator.Vector(62, 23), 0.1);
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.moveTo(53, 50);
                GardenSimulator.crc2.bezierCurveTo(48, 45, 41, 41, 35, 35);
                GardenSimulator.crc2.stroke();
                this.drawLeaf(new GardenSimulator.Vector(35, 35), 3.9);
                this.drawLeaf(new GardenSimulator.Vector(37, 37), 5);
                this.drawLeaf(new GardenSimulator.Vector(38, 38), 2.9);
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.moveTo(53, 55);
                GardenSimulator.crc2.bezierCurveTo(59, 54, 66, 54, 75, 53);
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(75, 56, 4, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "#9CCF8B";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(65, 57, 4, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "#9CCF8B";
                GardenSimulator.crc2.fill();
            }
            else {
                // große Tomate
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.moveTo(45, 100);
                GardenSimulator.crc2.bezierCurveTo(55, 45, 55, 30, 63, 20);
                GardenSimulator.crc2.lineWidth = 1.5;
                GardenSimulator.crc2.strokeStyle = "#72B05B";
                GardenSimulator.crc2.stroke();
                this.drawLeaf(new GardenSimulator.Vector(63, 20), 5.3);
                this.drawLeaf(new GardenSimulator.Vector(61, 22), 4.1);
                this.drawLeaf(new GardenSimulator.Vector(62, 23), 0.1);
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.moveTo(53, 50);
                GardenSimulator.crc2.bezierCurveTo(48, 45, 41, 41, 35, 35);
                GardenSimulator.crc2.stroke();
                this.drawLeaf(new GardenSimulator.Vector(35, 35), 3.9);
                this.drawLeaf(new GardenSimulator.Vector(37, 37), 5);
                this.drawLeaf(new GardenSimulator.Vector(38, 38), 2.9);
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.moveTo(53, 55);
                GardenSimulator.crc2.bezierCurveTo(59, 54, 66, 54, 75, 53);
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(75, 58, 6, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "#CA2C00";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(62, 59, 6, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "#CA2C00";
                GardenSimulator.crc2.fill();
            }
            GardenSimulator.crc2.restore();
        };
        return Tomato;
    }(GardenSimulator.PlantedField));
    GardenSimulator.Tomato = Tomato;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=Tomato.js.map