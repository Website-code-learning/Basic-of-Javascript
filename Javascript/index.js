// //Basics start
// alert('Hello Danish');
// console.log('Hello danish');
// console.log('24-09-2000');

// Variable or Constant
// let num=25; //variable value can be change
// num=100;
// const number=45;//constant value does not change 
// console.log(num,number);

// //Data Type (String)
// console.log('hello world')

// //concatenation of tow variable 
// let Name="Danish"  
// let last_name="Saleem"
// // console.log(Name+" "+last_name);
// let full_name=Name+" "+last_name
// console.log(full_name)

// //Getting characters from string
// console.log(Name[0]);

// //getting length of string
// console.log(Name.length)

// // String Method
// console.log(Name.toUpperCase());
// console.log(Name.toLowerCase());
// let index=Name.indexOf('s');
// console.log(index)

// //Common String Method
// let name ="Danish"
// // let result= name.slice(2,5);
// // let result= name.substr(1,2)
// // let result= name.replace('D','A')
// console.log(result)

//Number in Javascript
// let number=10
// const pi = 3.147
// console.log(number ,pi)

//Math operators +,-,*,/,%,**
// let num=30;
// let num2=20;
// let add=num+num2;
// let minus=num-num2;
// let multiplication=num*num2;
// let division=num/num2;
// let reminder=num%num2;
// let power=num**num2;
// console.log(add)
// console.log(minus)
// console.log(multiplication)
// console.log(division)
// console.log(reminder)
// console.log(power)

//Order of Operation B I D M A S
// let num=2
// let num1=3
// let result= num**(num+num1) * 2+5;
// console.log(result)

//Shortest way to use these operators
//let num=10;
//num++;
//num--;
// num+= 20;
// num-=5;
// num/=2;
// num%=2
//console.log(num);

//NAN Not A number
// let num=5/'hello world';
// console.log(num);

//Template String
//..By concatenation way
// let title='the best Blog';
// let author='Danish';
// let like='30';
// console.log('This blog called '+ title+' by '+author+' whos like is '+like)
// document.write('This blog called '+ title+' by '+author+' whos like is '+like)

// By template string way
// let name='Danish Saleem';
// let father_name='M.Saleem';
// let age=30;
// let final=`My Name is ${name}.My Father name is ${father_name}.My age is ${age}`;
// console.log(final)

//By html template
let name='Danish Saleem';
let father_name='M.Saleem';
let like='30';
let html= `
<h2>${name}</h2>
<h2>${father_name}</h2>
<span>This blog has ${like}</span>
`;
console.log(html)