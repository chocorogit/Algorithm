function solution(n) {
    // n x n 배열을 생성하고 모두 0으로 초기화
    let arr = Array.from({ length: n }, () => Array(n).fill(0));
    
    let num = 1;
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;
    
    while (num <= n * n) {
        // 왼쪽에서 오른쪽으로 이동하면서 숫자 채우기
        for (let i = left; i <= right; i++) {
            arr[top][i] = num++;
        }
        top++;
        
        // 위에서 아래로 이동하면서 숫자 채우기
        for (let i = top; i <= bottom; i++) {
            arr[i][right] = num++;
        }
        right--;
        
        // 오른쪽에서 왼쪽으로 이동하면서 숫자 채우기
        for (let i = right; i >= left; i--) {
            arr[bottom][i] = num++;
        }
        bottom--;
        
        // 아래에서 위로 이동하면서 숫자 채우기
        for (let i = bottom; i >= top; i--) {
            arr[i][left] = num++;
        }
        left++;
    }
    
    return arr;
}
