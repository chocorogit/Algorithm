function solution(price, money, count) {
    let newPrice = 0;
  for(let i=0; i<=count; i++) {
      newPrice += (price*i);
  }
      if(newPrice > money) {
          return newPrice - money;
      }
    return 0;
}