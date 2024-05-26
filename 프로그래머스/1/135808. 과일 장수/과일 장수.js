function solution(k, m, score) {
    
    // score 배열 내림차순 정렬
    let sortedScore = score.sort((a,b)=> b - a);
    
    // 박스의 개수
    let boxes = Math.floor(score.length / m);
    // console.log(Math.floor(score.length / m));
    
    let allBoxes = [];
    
    let answer = 0;
    
    for(i = 0; i < boxes; i++) {
     
        box = sortedScore.slice(m * i, (1 + i) * m);
        // console.log("box", box);
        
        allBoxes.push(box);
        
        const minScore = Math.min(...box);
       // console.log("minScore", minScore);
        
        answer += (minScore * m * 1);
       // console.log("answer", answer);
    }
    return answer;

}