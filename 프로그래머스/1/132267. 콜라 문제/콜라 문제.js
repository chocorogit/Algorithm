function solution(a, b, n) {
    let returnBottles = 0;
    let remain = n;
    while(true){       
        if(a > remain) {
            break;
        }
            returnBottles += Math.floor(remain / a) * b; 
            remain = Math.floor(remain / a)*b + remain % a;
      
            
            console.log("returnBottles", returnBottles);
            console.log("remain", remain);
}
    return returnBottles;
    }