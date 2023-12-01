function solution(s) {
    let answer = s.split('').sort().reverse().join('');
    // for(let i=0; i<answer.length; i++) {
    //     if(answer[i] === answer[i].toUpperCase()){
    //         console.log('대문자');
    //     }
    // }
    return answer;
}