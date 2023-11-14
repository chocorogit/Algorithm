function solution(n) {
    let answer = 0;
    let arr = [];
    arr = n.toString().split("");
    console.log(arr);
    for (let i = 0; i <= arr.length -1; i++) {
    // answer += parseInt((n + "").substr(i,1));
        answer += parseInt(arr[i]);
    console.log(answer);
        // answer += parseInt((n + "").charAt(i));
    }
    return answer;
}