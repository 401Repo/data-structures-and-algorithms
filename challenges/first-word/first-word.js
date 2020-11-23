'use strict';

function first_word(str){
    let lowercase = str.toLowerCase();
    let regex = lowercase.replace(/,/g, '');
    let splitWords = split(regex);
    
    for(let i=0; i < splitWords.length; i++){
      for(let j=0; j < splitWords.length; j++){
        if(splitWords[i] === splitWords[j] && i !== j){
          return splitWords[i];
        }
      }
    }
    return 'no match';
}
  
function split(str) {
  let words = [];
  let next = '';
    for (let i=0; i < str.length; ++i) {
      if (str[i] === ' ') { 
        words.push(next); 
        next = '';
    } else {
        next += str[i]; 
      }
    }
    if (next.length > 0) {
      words.push(next); 
    }
  
  return words;
}
  
module.exports = first_word;



