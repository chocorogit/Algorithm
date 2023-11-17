function solution(a, b) {
    let max = Math.max(a,b);
    let min = Math.min(a,b);
    let num = 0;
    for ( let i = min; i <= max; i++) {
        // console.log(i);
        num += i;
    }
    return num;
}