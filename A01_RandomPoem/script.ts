namespace RandomPoem {
    // Arrays zur Erstellung der Zufallsgedichte
    let subject: string[] = ["Anja", "Benedikt", "Steffi", "Taubsi", "Merle"];

    let predicate: string[] = ["isst", "schlägt", "tötet", "ärgert", "liebt"];

    let object: string[] = ["Schattenfell", "Menschen", "Kinder", "Zauberer", "den Herrn der Ringe"];
    //console.log(subject);
    //console.log(predicate);
    //console.log(object);

    // for Schleife welche die Laufvariable rückwärts zählen lässt bis Wert 1 erreicht ist
    for (let index: number = subject.length; index >= 1; index--) {
        //console.log(index);
        let result: string = getVerse(subject, predicate, object);
        console.log(result);
    }
   
    function getVerse(_subject: string[], _predicate: string[], _object: string[]): string {
        let verse: string = "";
        let index1: number = Math.floor(Math.random() * _subject.length);
        // console.log(index1);
        verse = verse + _subject.splice(index1, 1)[0] + " ";
        let index2: number = Math.floor(Math.random() * _predicate.length);
        // console.log(index2);
        verse = verse + _predicate.splice(index2, 1)[0] + " ";
        let index3: number = Math.floor(Math.random() * _object.length);
        // console.log(index3);
        verse = verse + _object.splice(index3, 1)[0] + " ";
        return verse;
    }
}