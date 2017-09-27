function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for(let i = 0; i < musicians.length; i++){
    arr.push(musicians[i]+' plays '+instruments[i]);
  }
  return arr;
}
function johnLennonFacts(facts){
  var newFacts = [];
  var count =0;
  while(count < facts.length){
    newFacts.push(facts[count]+"!!!");
    count++;
  }
  return newFacts;
}
