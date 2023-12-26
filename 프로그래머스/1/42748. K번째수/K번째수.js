function solution(array, commands) {
        let newArray = [];
    for(let n=0; n<commands.length; n++) {
        const [i,j,k] = commands[n];
        const slicedArray = array.slice(i-1,j);
        const sortedArray = slicedArray.sort((a, b) => a - b);
        // console.log(sortedArray);
        newArray.push(sortedArray[k-1]);
        console.log(newArray);
    }
    return newArray;
}