function solution(food) {
    let answer = '';
    let reversedanswer = '';
    for(let i=1; i<food.length; i++){
        if(food[i] % 2 !== 0 || food[i] !== 1) {
            console.log("food[i]",food[i]);
            let foodLength = Math.floor(food[i] / 2);            
            console.log("foodLength",foodLength);
            answer += String(i).repeat(foodLength);
            console.log("answer", answer);
        }
    }
            reversedanswer = answer.split('').reverse().join('');
   return  answer = answer + 0 + reversedanswer;
    
}