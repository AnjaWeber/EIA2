namespace BeachSceneInteractionAnja {
    export abstract class BeachElement {
        position: Vector;
        velocity: Vector;
        // hitbox corners relative to position
        hitBoxTopLeft: Vector;
        hitBoxBottomRight: Vector;

        constructor(_position: Vector, _velocity: Vector, _hitBoxTopLeft: Vector, _hitBoxBottomRight: Vector) {
            this.position = _position;
            this.velocity = _velocity;
            this.hitBoxTopLeft = _hitBoxTopLeft;
            this.hitBoxBottomRight = _hitBoxBottomRight;
        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0) {
                this.position.x += crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += crc2.canvas.height;
            }
            if (this.position.x > crc2.canvas.width) {
                this.position.x -= crc2.canvas.width;
            }
            if (this.position.y > crc2.canvas.height) {
                this.position.y -= crc2.canvas.height;
            }
        }

        abstract draw(): void;

        isClicked(_clickPosition: Vector): boolean {
            let isElementClicked: boolean =
                this.position.x + this.hitBoxTopLeft.x < _clickPosition.x &&
                this.position.x + this.hitBoxBottomRight.x > _clickPosition.x &&
                this.position.y + this.hitBoxTopLeft.y < _clickPosition.y &&
                this.position.y + this.hitBoxBottomRight.y > _clickPosition.y;
            return isElementClicked;
        }

        click(): void {
            // do nothing as not every element reacts to click
        }
    }
}
