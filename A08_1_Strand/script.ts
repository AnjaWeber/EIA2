namespace BeachSceneAnja {
    interface Vector {
        x: number;
        y: number;
    }
    window.addEventListener("load", handleLoad);
    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;

    function handleLoad(): void {
        canvas = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;

        drawSky({ x: 0, y: 0 });
        drawSun({ x: 400, y: 195 });
        drawSea({ x: 0, y: 200 });
        drawBeach({ x: 0, y: 300 });
        drawCloud({ x: 600, y: 125 }, { x: 150, y: 75 });
        drawCloud({ x: 200, y: 145 }, { x: 120, y: 65 });
        drawBush({ x: 60, y: 500 }, { x: 120, y: 100 });
        drawBush({ x: 720, y: 600 }, { x: 180, y: 80 });
        drawBoat({ x: 150, y: 160 }, "#f3c4cf");
        drawBoat({ x: 600, y: 110 }, "#CCBBEE");
        drawPerson({ x: 300, y: 410 }, 'shirt', "#8800FF");
        drawPerson({ x: 400, y: 410 }, 'skirt', '#C4FAF8');
        drawSwimmer({ x: 300, y: 310 });
        drawSwimmer({ x: 400, y: 290 });
        drawSurfBoard({ x: 200, y: 500 });
        drawSurfer({ x: 500, y: 200 });
       


    }

    function drawSky(_position: Vector): void {
        crc2.beginPath();
        crc2.moveTo(_position.x, _position.y);
        crc2.lineTo(_position.x, _position.y + 200);
        crc2.lineTo(_position.x + 800, _position.y + 200);
        crc2.lineTo(_position.x + 800, _position.y);
        crc2.closePath();
        

        let gradient: CanvasGradient = crc2.createLinearGradient(_position.x + 0, _position.y + 0, _position.x + 0, _position.y + 200);

        gradient.addColorStop(0, "#0047ab");
        gradient.addColorStop(.5, "#0088FF");
        gradient.addColorStop(1, "#C6E6FB");

        crc2.fillStyle = gradient;
        crc2.fill();
    }

    function drawSea(_position: Vector): void {
        crc2.beginPath();
        crc2.moveTo(_position.x, _position.y);
        crc2.lineTo(_position.x, _position.y + 300);
        crc2.lineTo(_position.x + 800, _position.y + 300);
        crc2.lineTo(_position.x + 800, _position.y);
        crc2.closePath();
        
        let gradient: CanvasGradient = crc2.createLinearGradient(_position.x + 0, _position.y + 0, _position.x + 0, _position.y + 300);

        gradient.addColorStop(0, "#7bb5d8");
        gradient.addColorStop(.5, "#3976a3");
        gradient.addColorStop(1, "#2bb8c3");

        crc2.fillStyle = gradient;
        crc2.fill();
    }

    function drawBeach(_position: Vector): void {
        crc2.beginPath();
        crc2.moveTo(_position.x, _position.y);
        crc2.bezierCurveTo(_position.x + 200, _position.y + 100, _position.x + 600, _position.y + 130, _position.x + 800, _position.y + 40);
        crc2.lineTo(_position.x + 800, _position.y + 300);
        crc2.lineTo(_position.x, _position.y + 300);
        crc2.closePath();
        crc2.fillStyle = "#fbdea4";
        crc2.fill();
    }

    function drawSun(_position: Vector): void {
        crc2.beginPath();
        crc2.arc(_position.x, _position.y, 150, 0, 2 * Math.PI);
        let gradient: CanvasGradient = crc2.createRadialGradient(_position.x, _position.y, 75, _position.x, _position.y, 150);
        gradient.addColorStop(0, "rgba(255,166,70, 0.75)");
        
        gradient.addColorStop(1, "rgba(255,166,70, 0)");
        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_position.x, _position.y, 75, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffa646";
        crc2.fill();
    }

    function drawCloud(_position: Vector, _size: Vector): void {
        let nParticles: number = 90;
        let radiusParticle: number = 20;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }

    function drawBush(_position: Vector, _size: Vector): void {
        let nParticles: number = 90;
        let radiusParticle: number = 20;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "#183812");
        gradient.addColorStop(1, "#407029");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }

    function drawBoat(_position: Vector, _boatColor: string): void {
        crc2.beginPath();
        crc2.moveTo(_position.x, _position.y + 75);
        crc2.bezierCurveTo(_position.x + 25, _position.y + 130, _position.x + 75, _position.y + 130, _position.x + 100, _position.y + 75);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _boatColor;
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(_position.x + 50, _position.y + 25);
        crc2.lineTo(_position.x + 75, _position.y + 50);
        crc2.lineTo(_position.x + 50, _position.y + 50);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#fffff0";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(_position.x + 50, _position.y + 75);
        crc2.lineTo(_position.x + 50, _position.y + 25);
        crc2.strokeStyle = "#5b3a29";
        crc2.stroke();




    }

    function drawPerson(_position: Vector, _clothes: 'skirt' | 'shirt', _color: string): void {
        // Hände
        crc2.beginPath();
        crc2.arc(_position.x + 12.5, _position.y + 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_position.x + 62.5, _position.y + 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        // Füße
        crc2.beginPath();
        crc2.arc(_position.x + 30, _position.y + 88, 5.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_position.x + 45, _position.y + 88, 5.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        //shirt/skirt
        crc2.beginPath();
        crc2.moveTo(_position.x + 37.5, _position.y + 20);
        crc2.lineTo(_position.x + 12.5, _position.y + 37.5);
        crc2.lineTo(_position.x + 15, _position.y + 45);
        crc2.lineTo(_position.x + 25, _position.y + 42);
        if (_clothes === 'shirt') {
            crc2.lineTo(_position.x + 22, _position.y + 57);
            crc2.lineTo(_position.x + 53, _position.y + 57);
        } else {
            crc2.lineTo(_position.x + 20, _position.y + 87.5);
            crc2.lineTo(_position.x + 55, _position.y + 87.5);
        }
        crc2.lineTo(_position.x + 50, _position.y + 42);
        crc2.lineTo(_position.x + 60, _position.y + 45);
        crc2.lineTo(_position.x + 62.5, _position.y + 37.5);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();

        if (_clothes === 'shirt') {
            // hose
            crc2.beginPath();
            crc2.moveTo(_position.x + 25, _position.y + 57);
            crc2.lineTo(_position.x + 27, _position.y + 87.5);
            crc2.lineTo(_position.x + 35, _position.y + 87.5);
            crc2.lineTo(_position.x + 36, _position.y + 63);
            crc2.lineTo(_position.x + 39, _position.y + 63);
            crc2.lineTo(_position.x + 40, _position.y + 87.5);
            crc2.lineTo(_position.x + 48, _position.y + 87.5);
            crc2.lineTo(_position.x + 50, _position.y + 57);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "#343F51";
            crc2.fill();
        }


        // Kopf
        crc2.beginPath();
        crc2.arc(_position.x + 37.5, _position.y + 12.5, 12.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
    }

    function drawSwimmer(_position: Vector): void {
        crc2.beginPath();
        crc2.moveTo(_position.x + 37.5, _position.y + 20);
        crc2.lineTo(_position.x + 12.5, _position.y + 37.5);
        crc2.lineTo(_position.x + 15, _position.y + 45);
        crc2.lineTo(_position.x + 25, _position.y + 42);

        crc2.lineTo(_position.x + 25, _position.y + 57);
        crc2.lineTo(_position.x + 50, _position.y + 57);



        crc2.lineTo(_position.x + 50, _position.y + 42);
        crc2.lineTo(_position.x + 60, _position.y + 45);
        crc2.lineTo(_position.x + 62.5, _position.y + 37.5);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_position.x + 12.5, _position.y + 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_position.x + 62.5, _position.y + 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_position.x + 37.5, _position.y + 12.5, 12.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
    }

    function drawSurfer(_position: Vector): void {
        //Kopf
        crc2.beginPath();
        crc2.arc(_position.x + 37.5, _position.y + 12.5, 12.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        //Körper
        crc2.beginPath();
        crc2.moveTo(_position.x + 37.5, _position.y + 20);
        crc2.lineTo(_position.x + 12.5, _position.y + 37.5);
        crc2.lineTo(_position.x + 15, _position.y + 45);
        crc2.lineTo(_position.x + 25, _position.y + 42);

        crc2.lineTo(_position.x + 25, _position.y + 57);
        crc2.lineTo(_position.x + 50, _position.y + 57);

        crc2.lineTo(_position.x + 50, _position.y + 42);
        crc2.lineTo(_position.x + 60, _position.y + 45);
        crc2.lineTo(_position.x + 62.5, _position.y + 37.5);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_position.x + 12.5, _position.y + 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_position.x + 62.5, _position.y + 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_position.x + 37.5, _position.y + 12.5, 12.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        //Badehose

        crc2.beginPath();
        crc2.moveTo(_position.x + 25, _position.y + 57);
        crc2.lineTo(_position.x + 27, _position.y + 75);
        crc2.lineTo(_position.x + 35, _position.y + 75);
        crc2.lineTo(_position.x + 36, _position.y + 63);
        crc2.lineTo(_position.x + 39, _position.y + 63);
        crc2.lineTo(_position.x + 40, _position.y + 75);
        crc2.lineTo(_position.x + 48, _position.y + 75);
        crc2.lineTo(_position.x + 50, _position.y + 57);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#E71837";
        crc2.fill();

        //Bein links
        crc2.beginPath();
        crc2.moveTo(_position.x + 28, _position.y + 75);
        crc2.lineTo(_position.x + 28, _position.y + 90);
        crc2.lineTo(_position.x + 34, _position.y + 90);
        crc2.lineTo(_position.x + 34, _position.y + 75);
        crc2.closePath();

        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();


        //Bein rechts
        crc2.beginPath();
        crc2.moveTo(_position.x + 46.5, _position.y + 75);
        crc2.lineTo(_position.x + 46.5, _position.y + 90);
        crc2.lineTo(_position.x + 40, _position.y + 90);
        crc2.lineTo(_position.x + 40, _position.y + 75);
        crc2.closePath();

        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        //Füße
        crc2.beginPath();
        crc2.arc(_position.x + 30, _position.y + 88, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_position.x + 45, _position.y + 88, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
    }

    //Surfboard
    function drawSurfBoard(_position: Vector): void {

        crc2.beginPath();
        crc2.ellipse(540, 290, 25, 60, Math.PI / 3, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FFFF99";
        crc2.fill();
    }
}