function solution(X, Y) {
    let ArrX = X.split("").sort();
    let ArrY = Y.split("").sort();
    let result = [];
    
    let i = 0;
    let j = 0;
    
    while (i < ArrX.length && j < ArrY.length) {
        if(ArrX[i] === ArrY[j]) {
            result.push(ArrX[i]);
            i++;
            j++;
        }else if(ArrX[i] < ArrY[j]) {
            i++;
        }else { j++; }
        
    }
    
        if(result.length === 0) return "-1";
        else {
            result = result.sort().reverse().join("");
            if(result === "00" || result === "000" || result === "0000" || result === "00000") {return "0"};
            return result;
        }
    
    
}
