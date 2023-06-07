import fs from "fs";


const stack = fs.readFileSync("src/stack.txt", "utf8").split("\n");
stack.pop();

const input = fs.readFileSync("src/moves.txt").toString();

let store: number[] = [];

for (let row of stack) {
    for (let i = 0; i < row.length; i++) {
        if (i % 4 === 1) {
            console.log(row[i]);
        }
    }
}

