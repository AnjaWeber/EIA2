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
    var Pumpkin = /** @class */ (function (_super) {
        __extends(Pumpkin, _super);
        function Pumpkin(_position, _size) {
            return _super.call(this, _position, _size, 30, 90, 20, 20, 70, 10, 30, 5) || this;
        }
        Pumpkin.prototype.drawLeaf = function (_position, _angle) {
            GardenSimulator.crc2.save();
            GardenSimulator.crc2.translate(_position.x, _position.y);
            GardenSimulator.crc2.rotate(_angle);
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.moveTo(0, 0);
            GardenSimulator.crc2.bezierCurveTo(0, -7, 10, -5, 20, 0);
            GardenSimulator.crc2.moveTo(0, 0);
            GardenSimulator.crc2.bezierCurveTo(0, 7, 10, 5, 20, 0);
            GardenSimulator.crc2.fillStyle = "#66A83C";
            GardenSimulator.crc2.fill();
            GardenSimulator.crc2.restore();
        };
        Pumpkin.prototype.draw = function () {
            _super.prototype.draw.call(this);
            GardenSimulator.crc2.save();
            GardenSimulator.crc2.translate(this.position.x, this.position.y);
            GardenSimulator.crc2.scale(this.size.x / 100, this.size.y / 100);
            if (this.ageInDays < this.growthDurationInDays / 3) {
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.moveTo(50, 100);
                GardenSimulator.crc2.bezierCurveTo(50, 90, 60, 80, 60, 70);
                GardenSimulator.crc2.lineWidth = 2;
                GardenSimulator.crc2.strokeStyle = "#A9D246";
                GardenSimulator.crc2.stroke();
                this.drawLeaf(new GardenSimulator.Vector(60, 70), 0.2);
                this.drawLeaf(new GardenSimulator.Vector(60, 70), Math.PI - 0.1);
            }
            else if (this.ageInDays < this.growthDurationInDays) {
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.moveTo(50, 100);
                GardenSimulator.crc2.bezierCurveTo(90, 90, 90, 50, 60, 50);
                GardenSimulator.crc2.bezierCurveTo(35, 50, 22, 75, 20, 80);
                GardenSimulator.crc2.lineWidth = 2;
                GardenSimulator.crc2.strokeStyle = "#A9D246";
                GardenSimulator.crc2.stroke();
                this.drawLeaf(new GardenSimulator.Vector(20, 80), 2);
                this.drawLeaf(new GardenSimulator.Vector(30, 65), 3.5);
                this.drawLeaf(new GardenSimulator.Vector(80, 75), 0.4);
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(65, 56, 7.5, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "#FAEA00";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(65, 56, 1.5, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "#9E6B00";
                GardenSimulator.crc2.fill();
            }
            else {
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.moveTo(50, 100);
                GardenSimulator.crc2.bezierCurveTo(90, 90, 90, 50, 60, 50);
                GardenSimulator.crc2.bezierCurveTo(35, 50, 22, 75, 20, 80);
                GardenSimulator.crc2.lineWidth = 2;
                GardenSimulator.crc2.strokeStyle = "#A9D246";
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(42, 85, 15, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "#FA7A00";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.moveTo(70, 52);
                GardenSimulator.crc2.bezierCurveTo(60, 51, 50, 60, 42, 72);
                GardenSimulator.crc2.stroke();
                this.drawLeaf(new GardenSimulator.Vector(20, 80), 2);
                this.drawLeaf(new GardenSimulator.Vector(30, 65), 3.5);
                this.drawLeaf(new GardenSimulator.Vector(80, 75), 0.4);
            }
            GardenSimulator.crc2.restore();
        };
        return Pumpkin;
    }(GardenSimulator.PlantedField));
    GardenSimulator.Pumpkin = Pumpkin;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=Pumpkin.js.map