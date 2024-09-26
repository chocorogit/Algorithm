function solution(cards) {
    const visited = Array(cards.length).fill(false);
    // console.log('visited',visited)
    let groups = [];
    
    setGroups = (start) => {
        
        let count = 0;
        let current = start;
        
    while(!visited[current - 1]){
        visited[current - 1] = true;
        current = cards[current - 1];
        count++;
    }
        return count;
    }
    
    
    for(let i =0; i < cards.length; i++){
        if(!visited[i]){
            const groupSize = setGroups(i+1);
            groups.push(groupSize);
        }
    }
    
    // console.log('groups', groups)
    
    const sortedGroups = groups.sort((a,b)=> b-a);
    
    console.log('sortedGroups', sortedGroups)
    const answer = sortedGroups[0] * sortedGroups[1];
    if(sortedGroups.length < 2) return 0;
    return answer;
}