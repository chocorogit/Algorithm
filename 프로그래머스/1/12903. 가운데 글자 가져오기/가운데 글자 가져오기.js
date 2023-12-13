function solution(s) {
    // 배열
    let Arr = s.split('');
    let middleIndex = Math.floor((1 + s.length) / 2) - 1; 
    // 중앙 인덱스 계산
console.log(Arr.slice(middleIndex, middleIndex + 2));
    return s.length % 2 === 0 ? Arr.slice(middleIndex, middleIndex + 2).join('') : Arr[middleIndex];
}

