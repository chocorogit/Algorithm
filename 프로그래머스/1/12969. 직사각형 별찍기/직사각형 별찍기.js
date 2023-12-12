process.stdin.setEncoding('utf8');
     let stars = "";
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for(let i=1; i<=b; i++) {
        
      stars += "*".repeat(a) + '\n';
    
    
    }
    console.log(stars);
});