fn main() {
    let file_input = std::fs::read_to_string("src/input.txt").unwrap();

    let mut score = 0;

    //A & X are Rock->1 B & Y are Paper->2
    //C & Z are Scissor->3
    //Win  ->6
    //Draw ->3
    //Lost ->0
    //for text in file_input.lines() {
    //    let s = match text {
    //        "A X" => 4,
    //        "A Y" => 8,
    //        "A Z" => 3,
    //        "B X" => 1,
    //        "B Y" => 5,
    //        "B Z" => 9,
    //        "C X" => 7,
    //        "C Y" => 2,
    //        "C Z" => 6,
    //        _ => 0,
    //    };
    //    score += s;
    //}

    //PART 2
    for text in file_input.lines() {
        let s = match text {
            "A X" => 3,
            "A Y" => 4,
            "A Z" => 8,
            "B X" => 1,
            "B Y" => 5,
            "B Z" => 9,
            "C X" => 2,
            "C Y" => 6,
            "C Z" => 7,
            _ => 0,
        };
        score += s;
    }
    println!("{}", score);
}
