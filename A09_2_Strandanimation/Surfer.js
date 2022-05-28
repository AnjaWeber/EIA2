var BeachSceneAnimationAnja;
(function (BeachSceneAnimationAnja) {
    var Surfer = /** @class */ (function () {
        function Surfer(_position) {
            this.position = _position;
        }
        Surfer.prototype.move = function (_timeslice) {
            // TODO
        };
        Surfer.prototype.draw = function () {
            //Kopf
            BeachSceneAnimationAnja.crc2.save();
            BeachSceneAnimationAnja.crc2.translate(this.position.x, this.position.y);
            BeachSceneAnimationAnja.crc2.beginPath();
            BeachSceneAnimationAnja.crc2.arc(37.5, 12.5, 12.5, 0, 2 * Math.PI);
            BeachSceneAnimationAnja.crc2.stroke();
            BeachSceneAnimationAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneAnimationAnja.crc2.fill();
            //Körper
            BeachSceneAnimationAnja.crc2.beginPath();
            BeachSceneAnimationAnja.crc2.moveTo(37.5, 20);
            BeachSceneAnimationAnja.crc2.lineTo(12.5, 37.5);
            BeachSceneAnimationAnja.crc2.lineTo(15, 45);
            BeachSceneAnimationAnja.crc2.lineTo(25, 42);
            BeachSceneAnimationAnja.crc2.lineTo(25, 57);
            BeachSceneAnimationAnja.crc2.lineTo(50, 57);
            BeachSceneAnimationAnja.crc2.lineTo(50, 30);
            BeachSceneAnimationAnja.crc2.lineTo(65, 7.5);
            BeachSceneAnimationAnja.crc2.lineTo(62.5, 0);
            BeachSceneAnimationAnja.crc2.closePath();
            BeachSceneAnimationAnja.crc2.stroke();
            BeachSceneAnimationAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneAnimationAnja.crc2.fill();
            BeachSceneAnimationAnja.crc2.beginPath();
            BeachSceneAnimationAnja.crc2.arc(12.5, 42, 5, 0, 2 * Math.PI);
            BeachSceneAnimationAnja.crc2.stroke();
            BeachSceneAnimationAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneAnimationAnja.crc2.fill();
            BeachSceneAnimationAnja.crc2.beginPath();
            BeachSceneAnimationAnja.crc2.arc(64, 3, 5, 0, 2 * Math.PI);
            BeachSceneAnimationAnja.crc2.stroke();
            BeachSceneAnimationAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneAnimationAnja.crc2.fill();
            BeachSceneAnimationAnja.crc2.beginPath();
            BeachSceneAnimationAnja.crc2.arc(37.5, 12.5, 12.5, 0, 2 * Math.PI);
            BeachSceneAnimationAnja.crc2.stroke();
            BeachSceneAnimationAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneAnimationAnja.crc2.fill();
            //Badehose
            BeachSceneAnimationAnja.crc2.beginPath();
            BeachSceneAnimationAnja.crc2.moveTo(25, 57);
            BeachSceneAnimationAnja.crc2.lineTo(27, 75);
            BeachSceneAnimationAnja.crc2.lineTo(35, 75);
            BeachSceneAnimationAnja.crc2.lineTo(36, 63);
            BeachSceneAnimationAnja.crc2.lineTo(39, 63);
            BeachSceneAnimationAnja.crc2.lineTo(40, 75);
            BeachSceneAnimationAnja.crc2.lineTo(48, 75);
            BeachSceneAnimationAnja.crc2.lineTo(50, 57);
            BeachSceneAnimationAnja.crc2.closePath();
            BeachSceneAnimationAnja.crc2.stroke();
            BeachSceneAnimationAnja.crc2.fillStyle = "#E71837";
            BeachSceneAnimationAnja.crc2.fill();
            //Bein links
            BeachSceneAnimationAnja.crc2.beginPath();
            BeachSceneAnimationAnja.crc2.moveTo(28, 75);
            BeachSceneAnimationAnja.crc2.lineTo(28, 90);
            BeachSceneAnimationAnja.crc2.lineTo(34, 90);
            BeachSceneAnimationAnja.crc2.lineTo(34, 75);
            BeachSceneAnimationAnja.crc2.closePath();
            BeachSceneAnimationAnja.crc2.stroke();
            BeachSceneAnimationAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneAnimationAnja.crc2.fill();
            //Bein rechts
            BeachSceneAnimationAnja.crc2.beginPath();
            BeachSceneAnimationAnja.crc2.moveTo(46.5, 75);
            BeachSceneAnimationAnja.crc2.lineTo(46.5, 90);
            BeachSceneAnimationAnja.crc2.lineTo(40, 90);
            BeachSceneAnimationAnja.crc2.lineTo(40, 75);
            BeachSceneAnimationAnja.crc2.closePath();
            BeachSceneAnimationAnja.crc2.stroke();
            BeachSceneAnimationAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneAnimationAnja.crc2.fill();
            //Füße
            BeachSceneAnimationAnja.crc2.beginPath();
            BeachSceneAnimationAnja.crc2.arc(30, 88, 5, 0, 2 * Math.PI);
            BeachSceneAnimationAnja.crc2.stroke();
            BeachSceneAnimationAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneAnimationAnja.crc2.fill();
            BeachSceneAnimationAnja.crc2.beginPath();
            BeachSceneAnimationAnja.crc2.arc(45, 88, 5, 0, 2 * Math.PI);
            BeachSceneAnimationAnja.crc2.stroke();
            BeachSceneAnimationAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneAnimationAnja.crc2.fill();
            BeachSceneAnimationAnja.crc2.restore();
        };
        return Surfer;
    }());
    BeachSceneAnimationAnja.Surfer = Surfer;
})(BeachSceneAnimationAnja || (BeachSceneAnimationAnja = {}));
//# sourceMappingURL=Surfer.js.map