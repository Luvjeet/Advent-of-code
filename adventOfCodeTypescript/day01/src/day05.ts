import fs from "fs";


const stack = fs.readFileSync("src/stack.txt", "utf8").split("\n");

const input = fs.readFileSync("src/moves.txt").toString();

let store: number[] = [];

for (let row of stack) {
    for (let i = 0; i < row.length; i++) {
        if (i % 4 === 1) {
            console.log(row[i]);
        }
    }
}



let start = 0, end = 10;
console.log(start + Math.floor((end - start) / 2));


//function leftPad(str: string, len: number, ch: any): string[] {
//    return new Array(len - str.length).fill(!ch && ch !== 0 ? " " : ch);
//}
//
//function run(fn: Function, count: number, ...args: any) {
//    const start = performance.now();
//    for (let i = 0; i < count; ++i) {
//        fn.apply(null, args);
//    }
//    return performance.now() - start;
//}
//
//
//[10, 100, 1000, 10_000].forEach((x: number) => {
//    console.log("Leftpad=> ", run(leftPad, x, "foo", x));
//})
//
