function solution(a, b) {
    let length = a.length;
    let answer = 0;
       for(let i=0; i< length; i++) {
           answer += Number(a[i]*b[i]);
       }
    return answer;
}