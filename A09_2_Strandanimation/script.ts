namespace BeachSceneAnimationAnja {
    window.addEventListener("load", handleLoad);
    let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;

    function handleLoad(): void {
        canvas = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;

        let sky: Sky = new Sky(new Vector(0, 0));
        let sun: Sun = new Sun(new Vector(400, 195));
        let sea: Sea = new Sea(new Vector(0, 200));
        let beach: Beach = new Beach(new Vector(0, 300));
        let cloud1: Cloud = new Cloud(new Vector(600, 125), new Vector(150, 75));
        let cloud2: Cloud = new Cloud(new Vector(200, 145), new Vector(120, 65));
        let boat1: Boat = new Boat(new Vector(250, 180), new Vector(-1, 1), "#f3c4cf");
        let boat2: Boat = new Boat(new Vector(400, 155), new Vector(0.5, 0.5), "#CCBBEE");
        let person1: Person = new Person(new Vector(300, 410), "shirt", "#8800FF");
        let person2: Person = new Person(new Vector(410, 420), "skirt", "#C4FAF8");
        let swimmer1: Swimmer = new Swimmer(new Vector(300, 220), new Vector(0.5, 0.5));
        let swimmer2: Swimmer = new Swimmer(new Vector(400, 290), new Vector(1, 1));
        let surfboard: Surfboard = new Surfboard(new Vector(540, 290));
        let surfer: Surfer = new Surfer(new Vector(500, 200));
        let moewe1: Moewe = new Moewe(new Vector(650, 100), new Vector(1, 1));
        let moewe2: Moewe = new Moewe(new Vector(600, 400), new Vector(1.1, 1.1));
        let moewe3: Moewe = new Moewe(new Vector(600, 75), new Vector(0.9, 0.9));
        let moewe4: Moewe = new Moewe(new Vector(700, 60), new Vector(1.2, 1.3));
        let moewe5: Moewe = new Moewe(new Vector(100, 75), new Vector(1.3, 1.3));
        let palmtree1: PalmTree = new PalmTree(new Vector(700, 200), new Vector(1, 1));
        let palmtree2: PalmTree = new PalmTree(new Vector(160, 170), new Vector(-0.8, 0.9));
        let bush1: Bush = new Bush(new Vector(60, 500), new Vector(120, 100));
        let bush2: Bush = new Bush(new Vector(720, 600), new Vector(180, 80));
        let moewe6: Moewe = new Moewe(new Vector(490, 550), new Vector(1.5, 1.5));

        setInterval(function () {
            sky.draw();
            sun.draw();
            sea.draw();
            beach.draw();
            cloud1.draw();
            cloud1.move(0.02);
            cloud2.draw();
            cloud2.move(0.015);
            swimmer1.draw();
            swimmer1.move(0.01);
            boat1.draw();
            boat1.move(0.025);
            boat2.draw();
            boat2.move(-0.01);
            person1.draw();
            person2.draw();
            swimmer2.draw();
            surfboard.draw();
            surfer.draw();
            palmtree1.draw();
            palmtree2.draw();
            bush1.draw();
            bush2.draw();
            moewe1.draw();
            moewe1.move(0.1);
            moewe2.draw();
            moewe2.move(0.03);
            moewe3.draw();
            moewe3.move(0.04);
            moewe4.draw();
            moewe4.move(0.1);
            moewe5.draw();
            moewe5.move(0.05);
            moewe6.draw();
            moewe6.move(0.02);
        }, 20);
    }
}