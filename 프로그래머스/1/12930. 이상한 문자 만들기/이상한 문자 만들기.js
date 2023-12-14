function solution(s) {
    let wordsArr = s.split(' ');
    
    const words = wordsArr.map(word => {
        return word.split('').map((w,index) => {
             return index % 2 === 0 ? w.toUpperCase() : w.toLowerCase();
       }).join('');
        
    }).join(' ');
    return words;
}