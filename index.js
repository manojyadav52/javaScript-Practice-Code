// const num=0;
// if(num>0){
//     console.log("the number is positive");
// }
// else if(num<0){
//     console.log("this is negative number");
// }
// else{
//     console.log("this is 0 number");
// }


// var x=5;
// if(x>0){
//     console.log("the number is positive....");
// }
// else if(x%2==0){
//     console.log("this is even number");
// }
// else if(x<0){
//     console.log("this is negative numbers");
// }
// else{
//     console.log("this is odd number");
// }

// var num=-80;
// if(num>0){
//     console.log("this number is positive....");
// }
// else if(num<0){
//     console.log("this is negative numbers....");
// }
// else{
//     console.log("please try agin leter");
// }


// we are try to switch case problem handle
// var num=2;
// switch(num)
// {
//     case num>0:
//         console.log("this is positive numbers");
//         break;
//     case (num<0):
//       console.log("this is negative numbers");
//       break;
//     case num%2==0 :
//         console.log("this is even numbers.....");
//         break;
//         default :
//     console.log("sorry this is odd numbers....");
        
// }

// case second problem with switch case ;
// var numberDay=12;
// switch(numberDay){
//     case 1:
//         console.log("today is monday.....");
//         break;
//     case 2 :
//         console.log("today is tuesday.....");
//         break;
//     case 3 :
//         console.log("today is wedbessday");
//         break;
//     case 4 :
//         console.log("today is thrusday.....");
//         break;
//     case 5 :
//         console.log("day is frieday");
//         break;
//         case 6 :
//             console.log("today is saturday....");
//             break;
//         case 7 :
//             console.log("today is sunday.....");
//             break;
//             default :
// //             console.log("sorry invalid choice ...try again later......");
// // }


// var value=false;
// switch(typeof value){
//     case 'string' :
//         console.log("here is String value");
//         break;
//     case 'number' :
//         console.log("here is number.....");
//         break;
//     case 'boolean' :
// //         console.log("here is boolean value");
// //         break;
// //     default :
// //     console.log("here is not boolean and not String as number value please try again later...");
// // }

// var fnum=78;
// var snum=67;
// var operator='-';
// var result;

// switch(result){
//     case '+' :
//        return fnum + snum;
//         break;
//     case '-' :
//         return fnum-snum;
//         break;
//     case  '*' :
//         return fnum+snum;
//         break;
//     case '/' :
//         return fnum/snum;
//         break;
//     default:
// //         console.log("invalid choice....");
        

// // }
// // console.log("the value of :"+result);

// // how to write code Student result 

// var mark=40;
// if(mark>80 && mark<=100){
//     console.log("your are pass first A grade...congratulation");
// }
// else if(mark>=60 && mark<=79){
//     console.log("your are second vision pass ....congratulation");  
// }
// else if(mark>=40 && mark<=59){
//     console.log("your are pass third visin ....congratulation");
// }
// else{
//     console.log("your are fial ..... try youself study and hard work......");
// // }

// const eyes=21;
// const finger=10;

// if(eyes==2 && finger==10){
//     console.log("you are normal person....");
// }
// else{
//      console.log("your are not normal person.....");
// }


// let arr=[1,2,3,4,5];
// for(let number of arr){
//     console.log(arr);
// // }

// const number=[5,-2,10,0,-3,8,-1];
// let sum=0;
// let i=3;

// while(i<number.length){
//     if(number[i]<0){
//         sum -=number[i];
    
//     }
//     i++;
// }

// console.log("the sum of number is:"+sum);

// const number =[10,11,30,-50,-35,0,8,-2,0];
// var sum=0;
// let m=0;

// while(m<number.length){
//     if(number[m]<0){
//         sum =sum+number[m];
//     }
//     m++;
// }
// console.log('the sum of negative number is :'+sum);

// for(var x=0;x<=10;x++){
//     if(x==5){
//         continue;
//     }
//     console.log(x);
// }







// Sol-1   



// function calculateBMI(weight,height){

//     const bmi=weight /(height * height);
//     if(bmi<18.5 && bmi>=50){
//         return 'underweight';
//     }else if(bmi>=18.5 && bmi<24.9){
//         return 'narmal weight';
//     }else if(bmi>=25 && bmi<=29.9){
//         return 'overweight';
//     }else{
//         return 'Obese';
//     }
// }
// console.log(calculateBMI(90,5.5));





// take three value which value  is big checking 






// function checkingValue(a,b,c){
//     if(a>=b && a>=c){
//         return `a is big value ${a}`;
//     }
//     else if(b>=a && b>=c){
//         return `b is big value then a and c ${b}`;
//     }
//     else if(c>=a && c>=b){
//         return `c is big value then a and b ${c}`;
//     }

// }
// console.log(checkingValue(20,30,40));
// const checkNumbers=checkingValue(56,89,77);
// console.log(checkNumbers);





// GIt :1 Solutions 








// function calculateBMI(weight,height){
//     const bmi= weight/(height * height)
//     if(bmi<=18.5){
//         console.log(bmi);
//         return 'underweight';
       
//     }
//     else if(bmi>18.5 && bmi<=24.9){
//         console.log(bmi);
//         return 'normal weight';
        
//     }
//     else if(bmi>=25 && bmi<29.9){
//         console.log(bmi);
//         return 'overweight';
        
//     }
//     else{
//         return 'obese';
//     }
    
// }
// console.log(calculateBMI(220,3.3));







// GIT Solution 2









// function calculateBillAmount(billAmount,tipPercentage){
//     const tipAmount =(billAmount * tipPercentage)/100;
//     const totalAmount =billAmount + tipAmount;
//     return tipAmount;
// }
// console.log(calculateBillAmount(100,15));

// console.log(calculateBillAmount(10500,450));





// function 





// const otherfun = function(amypara){
//     console.log("Ehllo anonymouse function how are you now"+amypara);
//     let a=2343;
//     let b=90;
//     let c=a/b;
//     console.log("your devided of value is:"+c)
// }
// otherfun('manoj developers','silly');



// const anonoymo=(function(name,designation){

//     console.log(`hello ${name} and you occupation is ${designation} `);
// });
// anonoymo('Mearn','developers');






// fate Arrow Function 






// const value=(x,y)=>{

//     x=x+x;
//     y=x-y;
//     x=x-y;
//     console.log(":"+x);
//     console.log(':'+y);
// };
// value(20,40);







// swap numbers of two 





// function swap(x,y){
//     x=x+y;
//     y=x-y;
//     x=x-y;
//     console.log(x);
//     console.log(y);

// }
// swap(20,40);















// function main() {
//     console.log(`Task Starting`);
//     task();
//     console.log(`Task Completed`);
  
//     function task() {
//       console.log(`Task Running`);
//     }
//   }
  
//   main();
  
//   // Output
  







// function printed(){
//     console.log('task starting....');
// newtask();
//     console.log('task completed');
   
//     newtask(){
//         console.log('hello developers');
//     }
// }





// function calculateBMI(weight, height) {
//     // Write your code here
//     const bmi = weight / (height * height);

//     if (bmi < 18.5) {
//         return "Underweight";
//     } else if (bmi >= 18.5 && bmi < 24.9) {
//         return "Normal weight";
//     } else if (bmi >= 25 && bmi < 29.9) {
//         return "Overweight";
//     } else {
//         return "Obese";
//     }
// }

// console.log(calculateBMI(120,3.4));


// function claculateBMI(weight,height){
//     bmi=weight/(height * height);

//     if(bmi<18.5){
//         return `underweight`;
//     }
//     else if(bmi>=18.5 && bmi<=24.9){
//         return `normalweight`;
//     }
//     else if(bmi>=25.5 && bmi<=29.9){
//         return `overweight`;
//     }else{
//         return `obese`;
//     }
// }
// const newCal=claculateBMI(150.45,3.2);
// console.log(newCal);



// remove duplicate value remove 



// Input: nums = [1, 2, 3, 2, 4, 4, 5]

// const dupli =new Set(nums);
// console.log(dupli);

// // Output: [1, 2, 3, 4, 5]







// Geet hub code with Almabetter 









// function convertTemperature(temperature, unit) {
//     // Write your code here
//     if (unit === "C") {
//         const fahrenheit = (temperature * 9 % 5 )+ 32;
//         return fahrenheit.toFixed(2) + " F";
//     } else if (unit === "F") {
//         const celsius = (temperature - 32) * 5 % 9;
//         return celsius.toFixed(2) + " C";
//     } else {
//         return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
//     }
// }
// console.log(convertTemperature(25,'C'));






// 3rd solution Almabetter 









// Solve and successfully 




// function calculateTip(billAmount, tipPercentage) {
//     // Write your code here
//     const tipAmount = billAmount * tipPercentage;
//     const totalAmount = billAmount + tipAmount;
//     return (totalAmount.toFixed(2));
// }
// console.log(calculateTip(60.75,0.25));





// 4. Question 









// function isPalindrome(str) {
//     // Write your code here
//     const cleanedStr = str.replace(/[^a-z0-9]/g, "");
//     const reversedStr = cleanedStr.split("").reverse().join("");
//     return cleanedStr === reversedStr;
// }
// console.log(isPalindrome('lovely'));



// replace Mehtod


// let text='mern';
// let newtext=text.replace('mern','full stack developers');
// console.log(newtext);



// const any='this is my programme my dear';
// let rep=any.replace('my','well be');
// console.log(any);
// console.log(rep);



// const nameFull='full stack developer with mern stack';
// const sortname=nameFull.replace('with','where is developers and working with IT compnay can you please give me some information ');
// console.log(sortname);

// const fullFamilyname='family members is all about information there';
// const repName=fullFamilyname.replace('about','there is live in 6 six memberes');
// console.log(repName);





// using split()





// const text='what are you doing today';
// let text2=text.split('');
// console.log(text2);







// function isPalindrome(str) {
//     // Write your code here
//     const cleanedStr = str.replace(/[^a-z0-9]/g, "");
//     const reversedStr = cleanedStr.split("").reverse().join("");
//     return cleanedStr == reversedStr;
// }
// console.log(isPalindrome('1993'));







// solution : 05 


// vovel count









// Solve And Successfully



// function countVowels(str) {
//     // Write your code here
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     const lowerStr = str.toLowerCase();
//     let count = 0;

//     for (let i = 0; i < lowerStr.length; i++) {
//         if (vowels.includes(lowerStr[i])) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels('AlmaBetter'));









// function countVowel(str){
//     const vowels=['a','e','i','o','u'];

//     const lovercase=str.toLowerCase();
//     var count =0;
//     for(let i=0;i<lovercase.length;i++){
//         if(vowels.includes(lovercase[i]));{
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowel('almabetters'));







// function  funvowel(str){
//     const vowelsDecler=['a','e','i','o','u'];
//     const lovercase1=str.toLowerCase();
    
//     let count=0;
//     for(let i=0;i<lovercase1.length;i++){
//         if(vowelsDecler.includes(lovercase1[i]));
//         count++;
//     }
//     return count;

    
// }
// console.log(funvowel('developers'));




// function vowels(str){
    
//     for(let i=0;i<str.length;i++){
//         if( (str[i])){
//             return true;
//         }

//     }
//     return false;
// }
// console.log(vowels('manoj'));




// console.log('Hii');

// setTimeout(()=> {
//     console.log('immediately  Executely');
// } );
// console.log('this is bottom message');





// let otpgenerator= (digit) =>{

//     let num='0123456789';
//     let otp=''

//     for(let i=0;i<=digit.length;i++){
//         otp += num[Math.floor(math.random() * 10)];
//     }
//     return otp;
// }

// console.log(otpgenerator(4));






// function task(message){
//     let n=10000000000;
//     while(n>0){
//         n--
//     }
//     console.log(message);

// }

// console.log('start script...');
// task('call an API');
// console.log('done');






// 2nd Solution 









// function convertTemperature(temperature, unit) {
//     // Write your code here
//     if (unit === "C") {
//         const fahrenheit = temperature * 9 % 5 + 32;
//         return fahrenheit.toFixed(2) + " F";
//     } else if (unit === "F") {
//         const celsius =  5/9 *(temperature - 32);
//         return celsius.toFixed(2) + " C";
//     } else {
//         return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
//     }
// }

// const firstr=convertTemperature(18,3.12);
// console.log(firstr);





// function isPalindrome(str) {
//     // Write your code here
//     const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "");
//     const reversedStr = cleanedStr.split("").reverse().join("");
//     return cleanedStr === reversedStr;
// }
// console.log(isPalindrome('Manoj'));




// function expression

// const defineExp=function examp(a,b){

//     return a-b;
// }
// console.log(defineExp(20,30));








// Function Decleretion function 







// const anony=function(a,b){
   
//     return a/b;
//      console.log("hello here is anonymouse");
    

// }
// console.log(anony(32,78));




// Anonymouse function 




// const exFunct=function(a,b){
//     return a/b;
// }
// console.log(exFunct (4000,21));







// Arrow Function 




// const divided=(x,y)=>{
//     x=x+y;
//     y=x-y;
//     x=x-y;
//    console.log("the value of x is:"+x+"the value of y is"+y);
// }
// console.log(divided(20,40));






// Recursive Function

// recursive function are function that call themselve during there execution they are usefull solving problem solve that involve repeatitive task and nexted data structure 

// function factorial(n){
//     if(n===0)
//     {
//         return 1;
//     }
//     return 1*factorial(n-1);
// }
// console.log(factorial(5));







// function  expression





// const details=function Manoj(name,city,email,contact){

//     console.log(name);
//     console.log(city);
//     console.log(this.email);
//     console.log(this.contact);
//     // return `the name is${name} and you are live in${city} then you email address is:${this.email},any time contact number is ${this.contact}`;
// }

// details('Mern Developers','pune','manoj.msfda@gmail.com');

// console.log('your details is here:'+details('javaDevelopers','pune','manoj.msfda@gmail.com','62666822098'));




// numbers=[10,40,50,60,40,6];

// function findSecondSmallest(numbers) {
//     // Your code goes here
//     numbers.sort((a,b) => a-b);
//     return numbers[1];
//   }
//   console.log(findSecondSmallest(numbers));

//   num=[10,20,30,40,7];
//   function sortingNumber(num){
//     num.sort((a,b) =>(a-b) )
//     return num[1];
//   }
//   const findsnum=sortingNumber(num);
//   console.log(findsnum);




// function serDataFromServer(callback){
//     setTimeout (function(){
//         const data={
//             name:'developers',
//             city:'pune',
//             age:23,
//             contact:'6266682206',
//         };
      
//     },100);
// }
// console.log(serDataFromServer('mohan'));
// console.log(`you name is ${data.name} and you city is ${this.city}`);








// // Function with a callback
// function fetchDataFromServer(callback) {
//     // Simulating an asynchronous operation
//     setTimeout(function() {
//       const data = {
//         name: "John",
//         age: 30
//       };
//       callback(data); // Execute the callback function with the fetched data
//     }, 1000);
//   }
  
//   // Callback function to handle the fetched data
//   function displayData(data) {
//     console.log(`Name: ${data.name}, Age: ${data.age}`);
//   }
  
//   // Call the function with the callback
//   fetchDataFromServer(displayData);
  
//   // Output
//   "Name: John, Age: 30"



// function task(message){
//     n=10000000000;
//     while(n>0){
     
//         n--;
//     }
//     console.log(message);
// }

// console.log('starte script ');
// task('printed a files and folders');
// console.log('download a file');
// console.log('Done!');


// const otherfun=function(n){
//     return function(){
//         return n++;
//     }
// }
// console.log(otherfun(10));




// class myClassName{
//     constructor(name,city){
//         return `you name is ${this.name} and you live in ${this.city}`;
//     }
//     method1(){
//         return `you email id is${this.email} and your occuptaion name is${this.occupation}`;

//     }

// }
// const greet=new myClassName('manoj yadav','pune');
// console.log(greet);
// console.log(greet.method1('developers','developers'));





// Solution 1




// function calculateBMI(weight, height) {
//     // Write your code here
//     const bmi = weight / (height * height);

//     if (bmi < 18.5) {
//         return "Underweight";
//     } else if (bmi >= 18.5 && bmi < 24.9) {
//         return "Normal weight";
//     } else if (bmi >= 25 && bmi < 29.9) {
//         return "Overweight";
//     } else {
//         return "Obese";
//     }
// }
// console.log(calculateBMI(45,1.60));




// Solution 2




// function convertTemperature(temperature, unit) {
//     // Write your code here
//     if (unit === "C") {
//         const fahrenheit = temperature * 9 % 5 + 32;
//         return fahrenheit.toFixed(2) + " F";
//     } else if (unit === "F") {
//         const celsius =5%9 * (temperature - 32) ;
//         return celsius.toFixed(2) + " C";   
//     } else {
//         return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
//     }
// }
// console.log(convertTemperature(25,"C"));






// function convertTemperature(temperature, unit) {
//     // Write your code here
//     if (unit === "C") {
//         const fahrenheit = temperature * 9 / 5 + 32;
//         return fahrenheit.toFixed(2) + " F";
//     } else if (unit === "F") {
//         const celsius = (temperature - 32) * 5 / 9;
//         return celsius.toFixed(2) + " C";
//     } else {
//         return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
//     }
// }
// console.log(convertTemperature(25,"C"));






// Solution 3






// // function calculateTip(billAmount, tipPercentage) {
// //     // Write your code here
// //     const tipAmount = billAmount * tipPercentage;
// //     const totalAmount = billAmount + tipAmount;
// //     return (totalAmount.toFixed(2));
// // }
// // console.log(calculateTip(60.75,0.25));





// // Solution 4


// // function isPalindrome(str) {
   
// //     const cleanedStr = str.replace(/[^a-z0-9]/gi, "");
// //     const reversedStr = cleanedStr.split("").reverse().join("");
// //     return cleanedStr.toLowerCase() === reversedStr.toLowerCase();
// // }
// // console.log(isPalindrome('Hello'));




// // Solution 5




// // function countVowels(str) {
// //     // Write your code here
// //     const vowels = ['a', 'e', 'i', 'o', 'u'];
// //     const lowerStr = str.toLowerCase();
// //     let count = 0;

// //     for (let i = 0; i <= lowerStr.length; i++) {
// //         if (vowels.includes(lowerStr[i])) {
// //             count++;
// //         }
// //     }
// //     return count;
// // }

// // console.log(countVowels('Dream big, work hard, and stay focused'));


// // Solution 6


// // function findLongestWord(sentence) {
// // 	// Write your code here
// //     const words = sentence.split(' ');
// //     let maxLength = 0;

// //     for (let i = 0; i < words.length; i++) {
// //         const length = words[i].length;
// //         if (length > maxLength) {
// //             maxLength = length;
// //         }
// //     }

// //     return maxLength;
// // }
// // console.log(findLongestWord('manoj'));






// class Rectangle{
//     constructor(width,height){
//         this.width=width;
//         this.height=height;
//         let area = height*width;


//     }
//     greet(){
//         return `your rectangle is ${area}`;

//     }
// }
// const areaIs=new Rectangle(20,55);
// console.log(areaIs);
// const es=areaIs.greet();
// console.log(es);





// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     greet() {
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
//   }

//   const person1 = new Person("Alice", 25);
//   const person2 = new Person("Bob", 30);
  
//   person1.greet(); 
//   person2.greet(); 



// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     greet(){
//         return (`hello my name is: ${this.name} I'm ${this.age} years old.`);
//     }
// }
// const should1=new Person('Mearn Developers',23);
// const should2=new Person('Web developers',20);
// console.log(should1.greet());
// should2.greet();






// class Rectangle {
//     // Your code goes here
//     constructor(height,width){
//       this.height=height;
//       this.width=width;
//     }
//     getArea(){
//       return (this.width * this.height);
//     }
//     getParimeter(){
//       return 2*(this.height +this.width);
//     }
//   }
//   const rec=new Rectangle(20,30);
//   console.log(rec);
//   console.log(rec.getArea());
//   rec.getParimeter();



// const triMethods='        this is most popular java Script     language     here';
// var editName=triMethods.trim();
// console.log(editName);


// replace method 


// const replaMethds='this is most important methods here';
// let replaceidea=replaMethds.replace('most','man ke bahkave me na man rah bhulaye bhram me dale es man ka dash na ban, es man ko aapna dash bna le ');
// let spltesMethos=replaceidea.split()
// console.log(spltesMethos);












