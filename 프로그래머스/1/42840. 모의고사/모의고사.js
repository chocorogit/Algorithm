function solution(answers) {
    // 합친 이중 배열
    let combinedArr = [ [1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5] ];
    
    let [ oneArr, twoArr, threeArr ] = combinedArr;
    // 제일 많이 맞힌 개수
    let count = 0;
    // 가장 높은 점수 받은 순서의 번호
    let orderNum = [];
    
    // 이중 배열 순회
    for( i = 0; i < combinedArr.length; i++ ){
        // 맞은 개수
        let correctAnswer = 0;
        // 정답 배열 순회
        for(j = 0; j < answers.length; j++ ) {
         
            // console.log("answers[j]",answers[j]);
            // console.log("combinedArr[i][j]",combinedArr[i][j]);
            
            // 배열 값 비교해서 같은 답일 경우
             if( answers[j] === combinedArr[i][j % combinedArr[i].length] ) {
                correctAnswer += 1;
             }
            // 다른 값일 경우
            else{
                // console.log("다름");
            }
        }
            // 맞은 개수가 더 많은 경우
            if( count < correctAnswer ) {
                count = correctAnswer;
               // console.log("맞은 개수가 더 많은 경우");
                orderNum = [i + 1];
            }
            // 맞은 개수가 같을 경우
            else if( count === correctAnswer ) {
                orderNum.push(i + 1);
               // console.log("맞은 개수가 같을 경우");
                
            }
        // console.log("orderNum 값",orderNum);
    }
    return orderNum;
}