var BeachSceneInteractionAnja;
(function (BeachSceneInteractionAnja) {
    var BeachElement = /** @class */ (function () {
        function BeachElement(_position, _velocity, _hitBoxTopLeft, _hitBoxBottomRight) {
            this.position = _position;
            this.velocity = _velocity;
            this.hitBoxTopLeft = _hitBoxTopLeft;
            this.hitBoxBottomRight = _hitBoxBottomRight;
        }
        BeachElement.prototype.move = function (_timeslice) {
            var offset = new BeachSceneInteractionAnja.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0) {
                this.position.x += BeachSceneInteractionAnja.crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += BeachSceneInteractionAnja.crc2.canvas.height;
            }
            if (this.position.x > BeachSceneInteractionAnja.crc2.canvas.width) {
                this.position.x -= BeachSceneInteractionAnja.crc2.canvas.width;
            }
            if (this.position.y > BeachSceneInteractionAnja.crc2.canvas.height) {
                this.position.y -= BeachSceneInteractionAnja.crc2.canvas.height;
            }
        };
        BeachElement.prototype.isClicked = function (_clickPosition) {
            var isElementClicked = this.position.x + this.hitBoxTopLeft.x < _clickPosition.x &&
                this.position.x + this.hitBoxBottomRight.x > _clickPosition.x &&
                this.position.y + this.hitBoxTopLeft.y < _clickPosition.y &&
                this.position.y + this.hitBoxBottomRight.y > _clickPosition.y;
            return isElementClicked;
        };
        BeachElement.prototype.click = function () {
            // do nothing as not every element reacts to click
        };
        return BeachElement;
    }());
    BeachSceneInteractionAnja.BeachElement = BeachElement;
})(BeachSceneInteractionAnja || (BeachSceneInteractionAnja = {}));
//# sourceMappingURL=BeachElement.js.map