function solution(x) {
    let arr = x.toString().split("");
    let newNumber = 0;
    
    for ( let i = 0; i <= arr.length - 1; i++) {    
    newNumber += Number(arr[i]);
    }
        if( x % newNumber === 0) {
            return true
        } else {
           return false
        }
    
}