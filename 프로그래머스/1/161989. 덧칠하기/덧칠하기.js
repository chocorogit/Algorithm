function solution(n, m, section) {
    // 칠할 횟수
    let answer = 0;
    // 현재 페인트가 칠해진 위치
    let painted = 0;
    
        for(var sec of section) {

        // 현재까지 칠해진 위치보다 구역의 번호가 크다면
        if (painted < sec) {
            // 페인트 칠 횟수 증가
            answer++;
            // 페인트를 칠한 위치 갱신
            painted = sec + m -1;
        }
    }
    
     return answer;
}