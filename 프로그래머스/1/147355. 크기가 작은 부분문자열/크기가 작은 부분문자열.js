function solution(t, p) {
   let num = 0;
    for (let i=0; i<=(t.length)-p.length;i++) {
        console.log(t.slice(i,p.length));
        if(t.slice(i,p.length+i) <= p) {
            num++;
        }
    }
    return num;
}