import fs from "fs"

console.time()

const file = fs.readFileSync("src/input.txt").toString().split("\n");

enum Play {
    A = 1,// ROCK
    B = 2,// PAPER
    C = 3,// SCISSORS
}

enum Played {
    X = 0,
    Y = 3,
    Z = 6,
}
let score = 0;

file.forEach((x) => {
    let s = 0;
    switch (x) {
        case "A X": s = Play.C + Played.X;
            break;
        case "A Y": s = Play.A + Played.Y;
            break;
        case "A Z": s = Play.B + Played.Z;
            break;
        case "B X": s = Play.A + Played.X;
            break;
        case "B Y": s = Play.B + Played.Y;
            break;
        case "B Z": s = Play.C + Played.Z;
            break;
        case "C X": s = Play.B + Played.X;
            break;
        case "C Y": s = Play.C + Played.Y;
            break;
        case "C Z": s = Play.A + Played.Z;
            break;
        default: s = 0;
            break;
    }
    score += s
})

console.log(score)

console.timeEnd()
