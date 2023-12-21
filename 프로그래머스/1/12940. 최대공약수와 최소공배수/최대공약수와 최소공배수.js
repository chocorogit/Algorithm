function solution(num1, num2) {
    var answer = [];
    
    let maxNum = Math.max(num1, num2);
    let minNum = Math.min(num1, num2);
    
    // 최대공약수
    let gcd = 1;
    // 최소공배수
    let lcm = 1;
    
    // 유클리드 호제법을 사용하여 최대공약수 계산
    while (minNum !== 0) {
        let temp = minNum;
        minNum = maxNum % minNum;
        maxNum = temp;
    }
    gcd = maxNum;

    // 최소공배수 계산
    lcm = (num1 * num2) / gcd;

    answer.push(gcd);
    answer.push(lcm);
    
    return answer;
}

// 예제 테스트
console.log(solution(3, 12)); // [3, 12]
console.log(solution(2, 5));  // [1, 10]

