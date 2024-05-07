function solution(sizes) {
    // 가로 세로 최대값 비교하고 직사각형 회전
    const transposed = sizes.map(([h, v]) => h < v ? [v,h] : [h,v]);

    // 가장 큰 사이즈
    let maxSize = [0, 0];
    
    // 배열을 순휘하며 최대값 할당
    transposed.forEach(([h,v]) => {
        if ( h > maxSize[0] ) maxSize[0] = h;
        if ( v > maxSize[1] ) maxSize[1] = v;
    });
    // 지갑 크기 계산
    return maxSize[0]  * maxSize[1];
   
}