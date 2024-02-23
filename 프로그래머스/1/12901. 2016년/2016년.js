function solution(a, b) {
    let answer = '';
    const dayArr = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    const monthNumArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const monthNum = a-1;
    let countNum = 0;
    let num=0;
    if(a < 2){
        
    num = b-1;     
    }else {
        
    for(let i=0; i<monthNum; i++) {       
    console.log('현재 월',i);
     countNum += monthNumArr[i];
    }  
    console.log(' countNum + b ===',(countNum + b));
    num = (countNum + b)-1 ;        
    
    }
    console.log('총 일수 나머지 ===',num%7);
    return answer = dayArr[num%7];

    
}
console.log(solution(1,19));
