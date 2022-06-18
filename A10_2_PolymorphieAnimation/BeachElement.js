var BeachScenePolymorphyAnimationAnja;
(function (BeachScenePolymorphyAnimationAnja) {
    var BeachElement = /** @class */ (function () {
        function BeachElement(_position, _velocity) {
            this.position = _position;
            this.velocity = _velocity;
        }
        BeachElement.prototype.move = function (_timeslice) {
            var offset = new BeachScenePolymorphyAnimationAnja.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0) {
                this.position.x += BeachScenePolymorphyAnimationAnja.crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += BeachScenePolymorphyAnimationAnja.crc2.canvas.height;
            }
            if (this.position.x > BeachScenePolymorphyAnimationAnja.crc2.canvas.width) {
                this.position.x -= BeachScenePolymorphyAnimationAnja.crc2.canvas.width;
            }
            if (this.position.y > BeachScenePolymorphyAnimationAnja.crc2.canvas.height) {
                this.position.y -= BeachScenePolymorphyAnimationAnja.crc2.canvas.height;
            }
        };
        return BeachElement;
    }());
    BeachScenePolymorphyAnimationAnja.BeachElement = BeachElement;
})(BeachScenePolymorphyAnimationAnja || (BeachScenePolymorphyAnimationAnja = {}));
//# sourceMappingURL=BeachElement.js.map