function solution(n) {
    const New = Math.sqrt(n);
    // console.log(New);
    if(Number.isInteger(New)) {
        return (New + 1) ** 2;
    }else {
        return -1;
    }
}