function solution(n) {
    let numbers = n.toString().split("");
    numbers = numbers.reverse();
    let result = numbers.map((item) => {
        return +item;
    });
    
    return result;
}