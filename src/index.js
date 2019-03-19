/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let counter = 0;
  let arrLovers = [];
  let a = 0;
  let b = 0;
  let c = 0;
  if(preferences.length == 0){
    return 0;
  } else {

    for(let i = 0; i<preferences.length; i++){
      a = preferences[i];
      b = preferences[a-1];
      c = preferences[b-1];
      if(a == preferences[c-1] && a != b){
        if(arrLovers.length == 0){
          arrLovers.push(a);
          arrLovers.push(b);
          arrLovers.push(c);
          counter++;
        } else {

          for(let z = 0; z<arrLovers.length; z++){
            if(arrLovers[z] == a || arrLovers[z] == b || arrLovers[z] == c){
              break;
            }
            if(z == arrLovers.length-1){
              arrLovers.push(a);
              arrLovers.push(b);
              arrLovers.push(c);
              counter++;
            }
            
          }
          
        }
        
      }
    }
    return counter;

  }
};
