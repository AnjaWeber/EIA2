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
    var Sunflower = /** @class */ (function (_super) {
        __extends(Sunflower, _super);
        function Sunflower(_position, _size) {
            return _super.call(this, _position, _size, 20, 80, 15, 5, 60, 7, 19, 3) || this;
        }
        Sunflower.prototype.draw = function () {
            _super.prototype.draw.call(this);
            GardenSimulator.crc2.save();
            GardenSimulator.crc2.translate(this.position.x, this.position.y);
            GardenSimulator.crc2.scale(this.size.x / 100, this.size.y / 100);
            if (this.ageInDays < this.growthDurationInDays / 3) {
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.moveTo(50, 100);
                GardenSimulator.crc2.bezierCurveTo(55, 55, 35, 55, 55, 45);
                GardenSimulator.crc2.lineWidth = 4;
                GardenSimulator.crc2.strokeStyle = "#72B05B";
                GardenSimulator.crc2.stroke();
            }
            else if (this.ageInDays < this.growthDurationInDays) {
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.moveTo(50, 100);
                GardenSimulator.crc2.bezierCurveTo(55, 55, 35, 55, 55, 45);
                GardenSimulator.crc2.lineWidth = 4;
                GardenSimulator.crc2.strokeStyle = "#72B05B";
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.moveTo(50, 79);
                GardenSimulator.crc2.bezierCurveTo(45, 60, 20, 50, 35, 70);
                GardenSimulator.crc2.fillStyle = "#72B05B";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.closePath();
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.moveTo(53, 75);
                GardenSimulator.crc2.bezierCurveTo(59, 54, 66, 54, 75, 63);
                GardenSimulator.crc2.closePath();
                GardenSimulator.crc2.fillStyle = "#72B05B";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(56, 46, 5, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "yellow";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.lineWidth = 0.5;
                GardenSimulator.crc2.strokeStyle = "black";
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(52, 35, 5, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "yellow";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(58, 33, 5, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "yellow";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(64, 37, 5, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "yellow";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(62, 44, 5, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "yellow";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(50, 42, 5, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "yellow";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(57, 40, 4, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "brown";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.stroke();
            }
            else {
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.moveTo(50, 100);
                GardenSimulator.crc2.bezierCurveTo(55, 55, 50, 20, 55, 10);
                GardenSimulator.crc2.lineWidth = 4;
                GardenSimulator.crc2.strokeStyle = "#72B05B";
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.moveTo(50, 79);
                GardenSimulator.crc2.bezierCurveTo(45, 60, 20, 50, 35, 70);
                GardenSimulator.crc2.fillStyle = "#72B05B";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.closePath();
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.moveTo(53, 75);
                GardenSimulator.crc2.bezierCurveTo(59, 54, 66, 54, 75, 63);
                GardenSimulator.crc2.closePath();
                GardenSimulator.crc2.fillStyle = "#72B05B";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(38, 25, 10, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "yellow";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.lineWidth = 0.5;
                GardenSimulator.crc2.strokeStyle = "black";
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(45, 35, 10, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "yellow";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(59, 36, 10, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "yellow";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(67, 27, 10, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "yellow";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(65, 14, 10, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "yellow";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(55, 10, 10, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "yellow";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(43, 12, 10, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "yellow";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(53, 23, 10, 0, 2 * Math.PI);
                GardenSimulator.crc2.fillStyle = "brown";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.stroke();
            }
            GardenSimulator.crc2.restore();
        };
        return Sunflower;
    }(GardenSimulator.PlantedField));
    GardenSimulator.Sunflower = Sunflower;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=Sunflower.js.map