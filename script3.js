//ARROW FUNCTION
//1)Print odd numbers in an array
var y=[1,2,3,4,5,6,7,8,9]

let odd=(array)=>{
   let arr=[];
   for(let i=0; i<array.length; i++)
   {
     if(array[i]%2!==0)
     {
      arr.push(array[i]);
     }
   }
   return arr;
}
console.log(odd(y));
  //2)Convert all the strings to title caps in a string array
  var str="my name is shenaz";
let def= (str)=>{
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
}
console.log(def(str));
//3)sum of all numbers in array
var a=[1,2,3,4,5,6,7,8,9];
var sum=0;
let ghi=(a)=>
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return sum;
}
console.log(ghi(a));
//4)return all prime numbers in array
let n=34;
let l=(n)=>
{
   for(let i=2; i<=n; i++)
   {
      let flag=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            flag=1;
            break;
         }
      }
      if(flag==0)
      {
         console.log(i);
      }
   }
}
console.log(l(n));
//5)retun all palindromes in an array
const getAllPalindromes = (words) => words.filter((word) => word.split("").reverse().join("") === word);

console.log(getAllPalindromes(['viicc', 'racecar', 'honda', 'malayalam']));
