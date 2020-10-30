'use strict';

/// validator is truthy or falsie: dont sweat it.

function multiBracketValidator(str) {
    let stored = [];
    let etc = [];
  
  // these pairs only
    let keyValuePairs = {'[': ']','(': ')','{': '}'};

    for (let i = 0; i < str.length; i++) {
      //push openingbrackets only to copare
      if (str[i] === '[' || str[i] === '(' || str[i] === '{' ) {
        stored.push(str[i]);
      }
      // re https://regex101.com/
      else if (str[i].match(/^[\sA-Za-z]+$/)){
        etc.push(str[i]);
      }
      else {
        // pop off the unmatched val
        let last = stored.pop();
        // doees everything match? no? then done
        if (str[i] !== keyValuePairs[last]){
          return false;
        }
      }
    } 
    // if nothing remains this is false: there's nothing stored so false.
    if (stored.length !== 0) {
      return false;
    }
    return true;
  }
  
  module.exports = multiBracketValidator;
  