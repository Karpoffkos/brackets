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
  let closeBrackets = {
    "{}" : "{}",
    "[]" : "[]",
    "||" : "||",
    "()" : "()"
  }

  function findCloseBrakets (str) {
    if (str%2 == 0){
      for (key in closeBrackets){
        str.indexOf('Widget')
    
      }

    } else {
      return false
    }
  }





























  function checkStr (str1) {  //проверка при симметричноси
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
  


  if((checkPair(str)||checkStr(str))&&checkArry(bracketsConfig)){
    console.log(true, 70); 
    return true
  } else {
    console.log(false, 73)
    return false;
  }
  
}
//check("((()))", [['(', ')'], ['[', ']']])