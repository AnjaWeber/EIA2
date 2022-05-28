namespace BeachSceneAnimationAnja {

    export class Cloud {
        position: Vector;
        size: Vector;
        velocity: Vector;
        particlesCount: number;
        randomValuesX: number[];
        randomValuesY: number[];

        constructor(_position: Vector, _size: Vector) {
            this.position = _position;
            this.size = _size;
            this.velocity = new Vector (50, 0);
            this.particlesCount = 90;
            this.randomValuesX = [];
            this.randomValuesY = [];
            for (let i: number = 0; i < this.particlesCount; i++) {
                this.randomValuesX.push(Math.random());
                this.randomValuesY.push(Math.random());
            }
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

        draw(): void {
            let radiusParticle: number = 20;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
    
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
    
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = gradient;
    
            for (let i: number = 0; i < this.particlesCount; i++) {
                crc2.save();
                let x: number = (this.randomValuesX[i] - 0.5) * this.size.x;
                let y: number = - (this.randomValuesY[i] * this.size.y);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();
        }
    }
}