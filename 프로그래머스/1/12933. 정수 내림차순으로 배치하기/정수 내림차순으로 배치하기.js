function solution(n) {
    
    // console.log(String(n).split(''));
    return parseInt((n + "").split('').sort((a, b) => b - a).join(''), 10);
}
