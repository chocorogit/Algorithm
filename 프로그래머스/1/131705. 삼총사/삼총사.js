function solution(number) {
    let count = 0;

    const backtrack = (index, sum, selected) => {
        if (selected.length === 3 && sum === 0) {
            count++;
            return;
        }

        if (index === number.length || selected.length === 3) {
            return;
        }

        selected.push(index);
        backtrack(index + 1, sum + number[index], selected);
        selected.pop(); // 선택 해제

        backtrack(index + 1, sum, selected);
    };

    backtrack(0, 0, []);

    return count;
}
