function solution(strings, n) {
        let stringSlice = [];
    
    for (let i = 0; i<=strings.length-1; i++) {
        
        stringSlice.push(strings[i].slice(n,n+1));
    }
    
    

    
    const result = stringSlice
        .map((char, index) => ({ char, original: strings[index] }))
        .sort((a, b) => {
            if (a.char === b.char) {
                return a.original.localeCompare(b.original);
            }
            return a.char.localeCompare(b.char);
        })
        .map(item => item.original);
    
    
    
    
    
    console.log("result", result);
    return result;
}
