//IIFE function
//1)Print odd numbers in an array
(function(array){
    for(var i = 0 ; i< array.length ; i++){
               if(array[i]%2!=0){
                  console.log(array[i])
               } 
          }
    })([1,2,3,4,5,6,7,8,9])
   //2)Convert all the strings to title caps in a string array
(function (str) {
    let arr = "hello there how are you"
    let titlecase = arr.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
    console.log(titlecase)
  })
  str()
  //3)sum of all numbers in array
  (function(array){
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          return sum;
    })([1,2,3,4])
    //4)return all prime numbers in array
    (function (myArray) {
        myArray = myArray.filter((number) => {
            for (var i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) {
                    return false;
                }
            }
            return true;
        });
        console.log(myArray);
    })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    //5)retun all palindromes in an array
    ( function () {
        var myArray = ['viicc', 'racecar', 'honda', 'malayalam'];
        var arr = myArray.filter(function (c, d) {
          var palindrome = c.split('').reverse().join('');
          if (c == palindrome) {
            console.log(myArray[d]);
          }
        });
      })()
        //6)return median of two sorted arrays 
        ( function() {
            let arr1 = [1, 12, 15, 26, 38,24];
            let arr2 = [2, 13, 17, 30, 45, 47];
            
              let c = [...arr1, ...arr2].sort((arr1, arr2) => arr1 - arr2);
            
              const half = c.length / 2 | 0;
              
            if (c.length % 2) {
            console.log(c[half]);
            } else {
              
            console.log((c[half] + c[half - 1]) / 2);
            }
            
            })()
    
 
    