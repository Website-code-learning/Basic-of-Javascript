// Q#1 what can you do with javascript?
// javascript is used to interact with browser to build website. It can also build a game or some developer also refer 
// it is a toy language.
// 1) we can build web/mobile application.
// 2) Command line toll 
// 3) real time  networking app


//Q#2 where does  javascript code run?
//javascript run on browser also called javascript engine it also provide run time environment.

//Q#3 javascript vs ecmascript?
//Js is a programming language while ecmascript is a specification which provide many feature for js ecma also responsible for defining standards

//this is my first code in js
console.log('Hello world');

//Variables in JS
//variable is used to store data for temporary
//Rules to define a variable name
//cannot be a reserved keyword
//should be meaningful name
//cannot start with number(1name)
//cannot container a space or hyphen(-)
//are case sensitive
let name='Danish';
let lastname='Saleem';
console.log(name,lastname);

//constant in javascript
//value of constant can not be changed it gives you error if you want to change in const
const number=1;
//number=2;
console.log(number);

//primitive Types In js
//string,number,boolean,undefined,null 
// let name='Danish'//string literal
// let age='21';//number literal
// let isit=false; //boolean literal
// let firstname=undefined//
// let lastname=null;

//Dynamic typing
//reference type
//object,array,function 

//object
// let name='danish';
// let age=30;
let person={
    name:'danish',
    age:30
};
console.log(person);
//Dot Notation
person.name="this is dot notation";
console.log(person.name);
//bracket notation
person ['name'] = 'this is bracket notation';

//Array
let numbers=[1,2,3,4,5];
console.log(numbers)
console.log(numbers[3]);//getting specific index value
numbers[5]="adding number 6";// value in array
console.log(numbers)
console.log(numbers.length); //checking the length of array

//functions
function myfunction(name,lastname){
    console.log('hello'+' '+ name+' '+lastname); 
    }
    myfunction('Danish','Saleem');

  //function calculating value
  function myfunction(number){
      return number*number;
  }
  console.log(myfunction(8));  
  