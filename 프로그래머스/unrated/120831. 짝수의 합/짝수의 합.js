function solution(n) {
    let m = 0;
    let answer = 0;
    m = n / 2;
    for ( let i = 1; i<= m; i++) {
        answer += 2 * i;
    }
    return answer;
}