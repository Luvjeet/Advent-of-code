//use std::collections::HashSet;

pub fn main() {
    // PART 1
    let file = std::fs::read_to_string("src/input.txt").unwrap();

    let mut score: u32 = 0;

    //file.lines().for_each(|line| {
    //    let (s1, s2) = line.split_at(line.len() / 2);
    //    let mut m = HashSet::new();
    //    for ch in s1.chars() {
    //        m.insert(ch);
    //    }
    //    for ch in s2.chars() {
    //        if m.contains(&ch) {
    //            if ch.is_uppercase() {
    //                score += ch as u32 - 38;
    //            } else if ch.is_lowercase() {
    //                score += ch as u32 - 96;
    //            }
    //            break;
    //        }
    //    }
    //});
    //println!("{}", score);

    //PART 02
    file.lines()
        .enumerate()
        .collect::<Vec<_>>()
        .chunks(3)
        .for_each(|line| {
            let ch = line[0]
                .1
                .chars()
                .find(|b| line[1].1.contains(*b) && line[2].1.contains(*b))
                .unwrap();
            if ch.is_uppercase() {
                score += ch as u32 - 38;
            } else if ch.is_lowercase() {
                score += ch as u32 - 96;
            }
        });
    println!("{}", score);
}
