function solution(s) {
    let numbers = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    let answer = s;
    for(i=0;i<=numbers.length;i++){
        
    const splitString = answer.split(numbers[i]);
    //console.log(splitString);
     answer = splitString.join(i);
        //console.log("join 값",answer);
    }
 answer = Number(answer);
    return answer;
}