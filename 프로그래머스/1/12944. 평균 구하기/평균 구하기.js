const solution = (arr) => {
    let sum = 0;

    for (let i = 0; i <= arr.length - 1; i++) {
        sum += parseInt(arr[i]);
    }

    return sum / arr.length;
};
