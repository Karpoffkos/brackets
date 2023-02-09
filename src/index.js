const common = require("mocha/lib/interfaces/common");

/* 
Implement function check(str, bracketsConfig), that for given brackets sequence will return true if it is correct and false otherwise

In the second param there is bracketsConfig - the array of pairs open-closed brackets. Each subarray includes only 2 elements - opening and closing bracket

check('()', [['(', ')']]) // -> true
check('((()))()', [['(', ')']]) // -> true
check('())(', [['(', ')']]) // -> false
check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true
check('[(])', [['(', ')'], ['[', ']']]) // -> false
check('[]()', [['(', ')'], ['[', ']']]) // -> true
check('[]()(', [['(', ')'], ['[', ']']]) // -> false

// special case: opening and closing bracket can be the same :)

check('||', [['|', '|']]) // -> true
check('|()|', [['(', ')'], ['|', '|']]) // -> true
check('|(|)', [['(', ')'], ['|', '|']]) // -> false
check('|()|(||)||', [['(', ')'], ['|', '|']]) // -> true
Write your code in src/index.js
*/
module.exports = function check(str, bracketsConfig) {
  let brackets = {
    "{" : "}",
    "[" : "]",
    "|" : "|",
    "(" : ")"
  }
  let closeBracketsObj = {
    "{}" : "{}",
    "[]" : "[]",
    "||" : "||",
    "()" : "()"
  }
let arrBreakets = bracketsConfig.map (i => i.join('')); //console.log(arrBreakets, arrBreakets.length, 37);
//console.log(str, bracketsConfig, 38)
// str = "()[](())(())"
let newStr = ""; 
let booleanCLoseBrakets;
  function closeBrakets (str38) {// функция ищет в строке первую попавшиеся совпадение (в нашем случае закрытые скобки), после чего удалает их из строки, после чего ищет снова. если не находит
    if (str38.length%2 == 0){ 
      let checkConditionStr = 0;
      for( let f = 0; f <  arrBreakets.length; f++){
        let n = str38.indexOf(arrBreakets[f]); // console.log(arrBreakets[f], 46);
        checkConditionStr += + n;       //console.log(checkConditionStr,47)
        if(n > -1) {
          f = arrBreakets.length;
          newStr= str38.slice(0, n) + str38.slice(n+2);        //console.log(newStr, newStr.length , 50);
          if (newStr.length > 1) {
           // console.log(newStr.length > 1, 52)
            closeBrakets(newStr)
          } else  {
       //     console.log(true,55)
            return booleanCLoseBrakets = true;
          }
        } else if (checkConditionStr == (-(arrBreakets.length))){
     //     console.log(false,59)
          return booleanCLoseBrakets = false;
        }
      }
    }else {
   //  console.log(false, 64)
      return booleanCLoseBrakets = false;
    }
  } 

closeBrakets(str)
 //console.log(booleanCLoseBrakets, 70)  


  function checkStr (str1) {  //проверка при симметричноси строки со скобками ([ ])
      let secondPart1 = "";

      for (j = 0; j <str1.length/2; j++){  
        for(let key in brackets){   // добавление в переменную закрывающей скобки
          if(str1[j] == key){
            secondPart1 += brackets[key];
          }
        }
      }
        //console.log(secondPart1,41) //
      // console.log(str1.slice(str1.length/2),   secondPart1.split('').reverse().join(''), str1.slice(str1.length/2) == secondPart1.split('').reverse().join(''), 42) 
      if (!(str1.slice(str1.length/2) == secondPart1.split('').reverse().join(''))) { 
        //console.log(false, 44)
        return false; // в случае несовпадения возвращает false ;
      } else 
      if ((str1.slice(str1.length/2) == secondPart1.split('').reverse().join(''))) { 
      // console.log(true, 27)
        return true; // в случае совпадения возвращает true ;

      }
  }



  function checkPair (str2) {//проверка при несимметричноси. скобки для условие true должны иметь посдедовательность например ()[]{}, т.е проверяем пару за парой  
      for (i = 0; i <str2.length; i+=2){  
        let pair = str2.slice(i, i+2); // ДЛЯ ЭТОГО ПЕРЕБИРАЕМ ПО ДВА СИМВОЛА
        //console.log(pair, i,  59)
        if (!checkStr(pair)){  // при несиметричной проверке, если одна из пар не закрыты  , функция вернет false
          //console.log(false, 61)
          return false; // 
        } else {return true}; 
      }
  }

  function checkArry(bracketsConfig1) {
    for (let a = 0; a < bracketsConfig1.length; a++){
      let arrStrMake = bracketsConfig1[a].join('');
      //console.log(arrStrMake, 68)
      if (!checkStr(arrStrMake)){  // при несиметричной проверке, если одна из пар не закрыты  , функция вернет false
        //console.log(false, 61)
        return false; // 
      } else {return true}; 
    }
  }
  


  if(booleanCLoseBrakets){
  // console.log(true, 122); 
    return true
  } else {
  // console.log(false, 125)
    return false;
  } 
  
}

//check("156156", [['(', ')'], ['[', ']']])
5125757346