// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  var chars={};
  var max=0;
  var maxChar="";
  for(var char of str){
    if (!chars[char]){
      chars[char]=1;
    }else{
      chars[char]+=1;
    }
  }
  console.log(chars);
  for (var char in chars){
    if(chars[char]>max){
      max=chars[char];
      maxChar=char;
    }
  }
  return maxChar;
  // for(let char of str){
  //   if (!chars[char]){
  //     chars[char]=1;
  //   }else{
  //     chars[char]+=1;
  //   }
  // }
  // var values=Object.values(chars);
  // for (var i =0; i<values.length; i++){
  //   if (values[i]>=max){
  //     max=values[i]
  //     index=i 
  //   }
  // }
  // return Object.keys(chars)[index]
}

module.exports = maxChar;
