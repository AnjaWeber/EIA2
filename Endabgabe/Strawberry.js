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
    var Strawberry = /** @class */ (function (_super) {
        __extends(Strawberry, _super);
        function Strawberry(_position, _size) {
            return _super.call(this, _position, _size, 30, 90, 30, 30, 80, 15, 20, 3) || this;
        }
        Strawberry.prototype.drawLeaf = function (_position, _angle) {
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
        Strawberry.prototype.draw = function () {
            _super.prototype.draw.call(this);
            GardenSimulator.crc2.save();
            GardenSimulator.crc2.translate(this.position.x, this.position.y);
            GardenSimulator.crc2.scale(this.size.x / 100, this.size.y / 100);
            if (this.ageInDays < this.growthDurationInDays / 3) {
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.moveTo(45, 100);
                GardenSimulator.crc2.bezierCurveTo(45, 90, 50, 80, 60, 70);
                GardenSimulator.crc2.lineWidth = 1.5;
                GardenSimulator.crc2.strokeStyle = "#72B05B";
                GardenSimulator.crc2.stroke();
                this.drawLeaf(new GardenSimulator.Vector(59, 71), 3.7);
                this.drawLeaf(new GardenSimulator.Vector(60, 71), 0.1);
            }
            else if (this.ageInDays < this.growthDurationInDays) {
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.moveTo(45, 100);
                GardenSimulator.crc2.bezierCurveTo(55, 45, 55, 40, 63, 20);
                GardenSimulator.crc2.lineWidth = 2.5;
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
                GardenSimulator.crc2.fillStyle = "red";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(75, 42, 6, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "#fffDD1";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.lineWidth = 0.3;
                GardenSimulator.crc2.strokeStyle = "black";
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(67, 47, 6, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "#fffDD1";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.strokeStyle = "black";
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(67, 56, 6, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "#fffDD1";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.strokeStyle = "black";
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(75, 61, 6, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "#fffDD1";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.strokeStyle = "black";
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(83, 56, 6, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "#fffDD1";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.strokeStyle = "black";
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(83, 47, 6, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "#fffDD1";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.strokeStyle = "black";
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(75, 51.5, 5, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "yellow";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.strokeStyle = "black";
                GardenSimulator.crc2.stroke();
            }
            else {
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.moveTo(45, 100);
                GardenSimulator.crc2.bezierCurveTo(55, 45, 55, 40, 63, 20);
                GardenSimulator.crc2.lineWidth = 2.5;
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
                GardenSimulator.crc2.ellipse(65, 70, 8, 15, Math.PI / 5, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "red";
                GardenSimulator.crc2.strokeStyle = "red";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.moveTo(75, 55);
                GardenSimulator.crc2.lineTo(80, 69);
                GardenSimulator.crc2.lineTo(75, 60);
                GardenSimulator.crc2.lineTo(70, 66);
                GardenSimulator.crc2.lineTo(70, 60);
                GardenSimulator.crc2.lineTo(60, 60);
                GardenSimulator.crc2.closePath();
                GardenSimulator.crc2.lineWidth = 1.5;
                GardenSimulator.crc2.strokeStyle = "#72B05B";
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.fillStyle = "#72B05B";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(70, 70, 0.5, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "black";
                GardenSimulator.crc2.strokeStyle = "black";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(65, 74, 0.5, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "black";
                GardenSimulator.crc2.strokeStyle = "black";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(65, 63, 0.5, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "black";
                GardenSimulator.crc2.strokeStyle = "black";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(62, 67, 0.5, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "black";
                GardenSimulator.crc2.strokeStyle = "black";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(58, 75, 0.5, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "black";
                GardenSimulator.crc2.strokeStyle = "black";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.stroke();
            }
            GardenSimulator.crc2.restore();
        };
        return Strawberry;
    }(GardenSimulator.PlantedField));
    GardenSimulator.Strawberry = Strawberry;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=Strawberry.js.map