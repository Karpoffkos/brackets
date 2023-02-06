/* module.exports = */ function check(str, bracketsConfig) {
  let brackets = {
    "{" : "}",
    "[" : "]",
    "|" : "|",
    "(" : ")"
  }
  function checkStr (str) {
    let secondPart1 = "";
    for (i = 0; i <str.length/2; i++){ //проверка при симметричноси 
      for(let key in brackets){  
        if(str[i] == brackets[key]){
          secondPart1 += key;
        }
        if(str[i] == key){
          secondPart1 += brackets[key];
        }
      }
    }
    console.log(str.slice(str.length/2), secondPart1.split('').reverse().join(''), str.slice(str.length/2) == secondPart1.split('').reverse().join(''), 20)
  }
 /*  for (let key in brackets){
    console.log(brackets[key], 23)
    console.log(key, 24)
  }   */
  checkStr (str)
}
check('(([]))')