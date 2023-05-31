import fs from "fs";

const file: string[] = fs.readFileSync("src/input.txt").toString().split("\n");
let ans: number = 0;

// ANS TO PART 1

//file.forEach((x: string) => {
//    // EDGE CASE FOR READING FILE
//    if (x === "") {
//        return;
//    }
//    let size = x.length;
//    let str1 = x.substring(0, size / 2);
//    let str2 = x.substring(size / 2, size);
//    let m = new Set<string>();
//    for (let i = 0; i < str1.length; i++) {
//        m.add(str1.charAt(i));
//    }
//    let sameChar: string = "";
//    for (let i = 0; i < str2.length; i++) {
//        if (m.has(str2.charAt(i))) {
//            sameChar = str2.charAt(i);
//        }
//    }
//    if (sameChar == sameChar.toLowerCase()) {
//        ans += (sameChar.charCodeAt(0) - 96);
//    } else if (sameChar == sameChar.toUpperCase()) {
//        ans += (sameChar.charCodeAt(0) - 38);
//    }
//})


// ANS TO PART - 2


let lineCounter: number = 0;
let m: Array<string> = [];
file.forEach((x) => {
    if (lineCounter === 3) {
        //do something
        let s1 = new Set();
        let s2 = new Set();
        for (let i = 0; i < m[0].length; i++) {
            s1.add(m[0][i]);
        }
        for (let i = 0; i < m[1].length; i++) {
            s2.add(m[1][i]);
        }
        for (let i = 0; i < m[2].length; ++i) {
            if (s1.has(m[2][i]) && s2.has(m[2][i])) {
                if (m[2][i] === m[2][i].toLowerCase()) {
                    ans += (m[2][i].charCodeAt(0) - 96);
                } else if (m[2][i] == m[2][i].toUpperCase()) {
                    ans += (m[2][i].charCodeAt(0) - 38);
                }
                break;
            }
        }
        m = [];
        lineCounter = 0;
    }
    m.push(x);
    lineCounter++;
})
console.log(ans);
