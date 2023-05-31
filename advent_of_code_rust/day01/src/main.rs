fn main() {
    let file = std::fs::read_to_string("src/input.txt").unwrap();

    let mut v = vec![];

    let mut temp = 0;

    file.lines().enumerate().for_each(|line| {
        if line.1 == "" {
            v.push(temp);
            temp = 0;
        } else {
            temp += line.1.parse::<i32>().unwrap();
        }
    });

    v.sort_by(|a, b| b.cmp(a));
    println!("{}", v[0]);
}
