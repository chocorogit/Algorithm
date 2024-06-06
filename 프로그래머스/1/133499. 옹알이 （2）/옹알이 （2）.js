function solution(babbling) {
    console.log(babbling);
    
    // 발음할 수 있는 단어의 개수
    let count = 0;
    
    // 정규표현식
    // let myReg = new RegExp("^aya$|^ye$|^woo$|^ma$|(aya$|ye$|woo$|ma$)", "g");
    // let myReg = new RegExp("^(?!(.*\\b(?:aya|ye|woo|ma)\\b.*\\b(?:aya|ye|woo|ma)\\b))((aya|ye|woo|ma)(?!.*\\3))*$", "g");
    let myReg = new RegExp("^(?!.*(ayaaya|yeye|woowoo|mama))(aya|ye|woo|ma)*$", "g");



    
    let fc = babbling.map((word) => {
        let matched = word.match(myReg);
        console.log(matched);
        matched ? count++ : 0;
    });
    
    console.log("count", count);
    // 발음할 수 있는 단어의 개수 return
    return count;
}