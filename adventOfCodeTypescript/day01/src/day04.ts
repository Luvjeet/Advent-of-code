import fs from "fs";

console.time()

const file = fs.readFileSync("src/input.txt").toString();
let count = 0;
//PART - 01

//file
//    .split("\n")
//    .forEach((x) => {
//        if (x === "") {
//            return;
//        }
//        let left = x.split(",")[0];
//        let right = x.split(",")[1];
//        let a = Number(left.split("-")[0]), b = Number(left.split("-")[1]);
//        let c = Number(right.split("-")[0]), d = Number(right.split("-")[1]);
//
//        if ((a >= c && b <= d) || (a <= c && b >= d)) {
//            count++;
//        }
//    });

file
    .split("\n")
    .forEach((x) => {
        if (x === "") {
            return;
        }
        let left = x.split(",")[0];
        let right = x.split(",")[1];
        let a = Number(left.split("-")[0]), b = Number(left.split("-")[1]);
        let c = Number(right.split("-")[0]), d = Number(right.split("-")[1]);

        if (a <= d && c <= b) {
            count++;
        }
    });

console.log(count);
console.timeEnd();
