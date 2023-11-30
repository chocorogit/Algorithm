function solution(left, right) {
    let result = 0;
    let arr = [];
    for(let n=left; n<=right; n++) {
            
        for(let i=1; i <= n; i++) {
                if(n%i === 0) {
                    arr.push(i);   
                }
        }
                

        if(arr.length % 2 !== 0) {
            result -= n;
        }else {
            result +=n;            
        }
        arr = [];
    }
    return result;
}