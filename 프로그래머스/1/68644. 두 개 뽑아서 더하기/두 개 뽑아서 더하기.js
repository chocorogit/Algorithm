function solution(numbers) {
    let newArr = [];
for(let i=0; i<numbers.length; i++) {
    for(let j=i+1; j<numbers.length; j++) {
    newArr.push(Number(numbers[i]) + Number(numbers[j]));
        
    }
}
        newArr = newArr.filter((value, index)=> newArr.indexOf(value) === index)
    newArr.sort((a,b) => a-b);
    
    return newArr;
}