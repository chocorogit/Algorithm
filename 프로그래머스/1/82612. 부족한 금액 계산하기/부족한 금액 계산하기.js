function solution(price, money, count) {
    let newPrice = 0;
  for(let i=0; i<=count; i++) {
      newPrice += (price*i);
          
  }
      if(newPrice > money) {
          console.log("newPrice",newPrice);
          console.log("money",money);
          return newPrice - money;
      }
      else {return 0;}
}