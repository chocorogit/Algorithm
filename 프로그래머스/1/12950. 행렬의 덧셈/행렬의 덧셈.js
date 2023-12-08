function solution(arr1, arr2) {
    let answer = [];

    // 행
    let rows = arr1.length;
    // 열
    let cols = arr1[0].length;

    for (let i = 0; i < rows; i++) {
        const row = [];

        for (let j = 0; j < cols; j++) {
            const sum = arr1[i][j] + arr2[i][j];
            row.push(sum);
        }

        answer.push(row);
    }

    return answer;
}

