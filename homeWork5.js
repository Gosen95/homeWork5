//1  Given a string. Check whether the string is palindrome or not.

function isPalindrome(str) {
   const length = str.length;

   for (let i = 0; i < Math.floor(length / 2); i++) {// цикл который будет выполняться до половины длины строки
       if (str[i] !== str[length - 1 - i]) {// чтобы проверить только для середины
           return false;
       }
   }

   return true;
}


//2  Given a string and symbols. Change first symbol by the second one in the string.

function replaceFirstSymbol(inputString, oldSymbol, newSymbol) {
   for (let i = 0; i < inputString.length; i++) { // проходим повсем символам строки
     if (inputString[i] === oldSymbol) {// Если текущий символ совпадает с oldSymbol
       return constructNewString(inputString, i, newSymbol);  //создаем новую строку и заменяем символ
     }
   }
   return inputString;   // Если символ не найден, возвращаем исходную строку
 }
 
 function constructNewString(inputString, index, newSymbol) { // Вспомогательная функция для создания новой строки
   let resultString = '';
   for (let j = 0; j < index; j++) {  // Копируем символы до заменяемого символа
     resultString += inputString[j];
   }
 
   resultString += newSymbol;  // Добавляем новый символ
 
 
   for (let k = index + 1; k < inputString.length; k++) {  // Копируем символы после заменяемого символа
     resultString += inputString[k];
   }
 
   return resultString;
 }




/*3. Insert a string. Create new string which is the mirror reverse of the inserted one around
its center.*/


function mirrorReverseString(inputString) {
   const length = inputString.length;//получаем длину строки
   let centerIndex = Math.floor(length / 2);//получаем центр


   let startIndex = Math.max(centerIndex, 0);// проверяем чтобы небыло отрицательным числом

   let result = '';

   for (let i = startIndex; i < length; i++) {//вычисляем вторую половину строки
       result += inputString[i];
   }

   for (let i = 0; i < startIndex; i++) {//вычисляем первую половину строки
       result += inputString[i];
   }

   return result;
}




// 4 Print the following number pattern: function will take argument (in this case it is 5)


function printNumber(n) {
   // Выводим числа от 1 до n в возрастающем порядке
   for (let i = 1; i <= n; i++) {//цикл будет работать пока i <= n
     let result = '';
     for (let j = 1; j <= i; j++) {//цикл будет работать пока j <= i
       result += j;
     }
     console.log(result);
   }
 
   // Выводим числа от n до 1 в обратном порядке
   for (let i = n - 1; i >= 1; i--) {
     let result = '';
     for (let j = 1; j <= i; j++) {
       result += j;
     }
     console.log(result);
   }
 }




 // 5  Given an object. Invert it (keys become values and values become keys).

 function invertObject(obj) {
   let invertedObj = {};// создаем пустой обьект для хранения результата
 
   for (let key in obj) {
     if (obj.hasOwnProperty(key)) {//на каждом круге цикла key принимает значение ключа
       invertedObj[obj[key]] = key;// сам процесс инвертирования
     }
   }
 
   return invertedObj;
 }