                   //Chapter 5 - 7 //
//Q1

//1. Write a program that take two numbers & add them in a new
//variable. Show the result in your browser.'


// var input = +prompt ("what's number u want to addition")
// var input2= +prompt ("and which num")
// var answer= input + input2

// alert (`sum of ${input} and ${input2} is ${answer}`)



// ---------------------------X-------------------------------X-----------------------------------------------------------



// Q2 


// var input = +prompt ("what's number u want to addition")
// var input2= +prompt ("and which num")
// var answer= input - input2

// alert (`Result of Subracting ${input} from ${input2} is ${answer}`)


// var resultDivide = firstNum / secondNum;
// document.write(`division of ${firstNum} and ${secondNum} = ${resultDivide} </br>`);
// var resultMulti = firstNum * secondNum;



// document.write(`multiplication of ${firstNum} and ${secondNum} = ${resultMulti} </br>`);
// var resultmodulus = firstNum % secondNum;
// document.write(`multiplication of ${firstNum} and ${secondNum} = ${resultmodulus} </br>`)



// ---------------------------X-------------------------------X-----------------------------------------------------------



//Q3

// var number;

// document.write (`Value after variable declaration is ${number} </br>`)
// number = 3
// document.write (`initial value ${number} </br>`)
// var newnumber = ++number
// document.write (`value after increment is ${number}</br>`)
// newnumber = number+7
// document.write (`value after 7 addition is ${newnumber}</br>`)
// var newnumberdec = --newnumber
// document.write (`value after decrement is ${newnumberdec}</br>`)
// var reminder = 3
// document.write (`reminder value ${newnumberdec%reminder}`)



// ---------------------------X-----------------------------------X-------------------------------------------------------


//Q4 Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5 tickets
// to a movie. Example output:

// var costOfTicket = 600
// var ticketQuantity = +prompt("how many tickets u want to buy")
// var totalCOstOfTickets = costOfTicket * ticketQuantity 
// console.log (`total COst of buy ${ticketQuantity} tickets to a movie is ${totalCOstOfTickets} PKR`) 



// ---------------------------X--------------------------------------X----------------------------------------------------


// //Q5 5. Write a script to display multiplication table of any number in
// your browser. E.g.

// var tablnumber = +prompt ("which table u want to learn")
// for (var a = 1; a<=10; a++){
//     document.write (`${tablnumber} x ${a} = ${tablnumber*a}</br>`)
// }


// ---------------------------X-------------------------------------X-----------------------------------------------------


//Q6.The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.


// var celsius = +prompt ("enter the value for convert into frhrenheit?")
// var fahrenheit = +prompt ("enter the value for convert into Celsius?")
// var CelsiusToFahrenheit = (celsius*9/5)+32; 
// var FahrenheittoCelsius = (fahrenheit-32)*5/9;

// document.write (`${celsius} <sup>o</sup>C is ${CelsiusToFahrenheit}<sup>o</sup>F </br>`)
// document.write (`${fahrenheit} <sup>o</sup>F is ${FahrenheittoCelsius}<sup>o</sup>C `)



// ---------------------------X---------------------------------------X---------------------------------------------------

//Q7 7. Write a program to implement checkout process of a shopping
// cart system for an e-commerce website. Store the following in
// variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// document.write ("<h1>Shopping Cart</h2>")
// var item1 = 650
// var item2 = 700
// var quantityOfItem1 = 2 
// var quantityOfItem2 = 2
// var ShippingChagers = 100
// document.write(`Price of item 1 is ${item1}</br>`)
// document.write(`Price of item 2 is ${item2}</br>`)
// document.write(`quantity Of Item1 ${quantityOfItem1}</br>`)
// document.write(`quantity Of Item2 is ${quantityOfItem2}</br>`)
// document.write(`Shipping Chagers ${ShippingChagers}</br>`)

// document.write (`Total Cost of your order is ${(item1*quantityOfItem1)+(item2*quantityOfItem2)+(ShippingChagers)} PKR`)

// ---------------------------X-----------------------------------------X-------------------------------------------------


//Q8  Write a script to take total marks & marks obtained by a
// student. Compute the percentage & show the result in your
// browser.


// document.write("<h1>Mark Sheet</h2>");
// var totalMarks = +prompt ("Enter Your Total marks")
// var marksObained = +prompt("Obained Marks")
// document.write (` Total Marks  ${totalMarks}<br/>`)
// document.write (`Obained Marks ${marksObained}<br/>`)
// document.write (`Percentage:${marksObained*100/totalMarks}%`)


// ---------------------------X-----------------------------------------X-------------------------------------------------


// Q9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script
// to convert the total currency to Pakistani Rupees. Perform all
// calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104 Pakistani Rupee and
// 1 Saudi Riyal = 28 Pakistani Rupee)


// document.write("<h1>Convert into PKR Currency</h2><br/>");

// var dollar = 104
// var riyal = 28

// var dollarinput = +prompt("How many Dollor you have?")
// var Riyalinput = +prompt("How many Riyals you have?")
// var result = dollarinput*dollar + Riyalinput*riyal;
// document.write (`${result} PKR`)



// ---------------------------X-----------------------------------------X-------------------------------------------------

//Q10. 
// Write a program to initialize a variable with some number
// and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression.



// Q10
// var number=+prompt("Enter Any Number")
// document.write(`${((number+5)*10)/2}`)




// ---------------------------X-----------------------------------------X-------------------------------------------------


// Q11
// var currentYear = 2023;
// var birthYear = +prompt("Enter your birth year");
// var result = currentYear-birthYear;
// document.write(`Current Year: ${currentYear}</br>`);
// document.write(`Birth Year: ${birthYear}</br>`);
// document.write(`Your Age: ${result-1} or ${result} years old </br>`);



// ---------------------------X-----------------------------------------X-------------------------------------------------



// Q12
// var radius = 20;
// var pi  = 3.142;
// document.write(`Radius of a circle: ${radius}</br>`);
// document.write(`The circumference is: ${2*radius*pi}</br>`);
// document.write(`The ares is: ${pi*Math.pow(radius,2)}</br>`);




// ---------------------------X-----------------------------------------X-------------------------------------------------



// / Q13
// var favoriteSnack = "Chocolate chip";
// var currentAge = 20;
// var maxAge = 75;
// var perDayAmount = 2;
// var result = (2*365)*(maxAge-currentAge);
// document.write("<h1>The Lifetime Supply Calculator</h2>");
// document.write(`Favourite Snake: ${favoriteSnack}</br>`);
// document.write(`Current age: ${currentAge}</br>`);
// document.write(`Estimated Maximun Age: ${maxAge}</br>`);
// document.write(`Amount if snacks per day: ${perDayAmount}</br>`);
// document.write(`You will need ${result} ${favoriteSnack} to last you until the ripe old age of ${maxAge}</br>`);



// Q14
// var a = 10;
// document.write(`Result:</br>The value of a is: ${a}</br>`)
// document.write(` ---------------------------------------- </br></br>`)
// document.write(`The value of ++a is: ${++a} </br>`)
// document.write(`Now the value of a: ${a} </br></br></br>`)

// document.write(`The value of a+= is: ${a++} </br>`)
// document.write(`Now the value of a: ${a} </br></br></br>`)

// document.write(`The value of --a is: ${--a} </br>`)
// document.write(`Now the value of a: ${a} </br></br></br>`)

// document.write(`The value of a-- is: ${a--} </br>`)
// document.write(`Now the value of a: ${a} </br>`)

// Q15
// var a =2;
// var b = 1;
// var result= --a - --b + ++b + b--;  // 1 - 0 + 1 + 1
// --a; // first -1 then value print, the value of a = 0
// --a - --b ; //  -1 - -1
// --a - --b + ++b;   //-2 - -2 + -1;
// --a - --b + ++b + b--;  // -3 - -2 + -1 + -1
// document.write(`a is  ${a} </br>`) // a= -3
// document.write(`b is  ${b} </br>`) // b = -2
// document.write(`result is  ${result} </br>`) // resul = 3



// ---------------------------X-----------------------------------------X-------------------------------------------------

                                //    Chapter 8-11 //


//Q1   

// var name = prompt ("Whats your name?")
// document.write (`HI ${name}`)

// ---------------------------X-----------------------------------------X-------------------------------------------------


// Q2. Write a program to take input a number from user & display
// it’s multiplication table on your browser. If user does not enter
// a new number, multiplication table of 5 should be displayed by
// default.



// var number = +prompt ("which table u want to learn")
// for (a=1; a<=10; a++){
//     document.write(`${number} x ${a} = ${number*a}<br/>`)
// }


//---------------------------X-----------------------------------------X-------------------------------------------------

// Q3

// var city_Name = prompt("Enter your city");
// if (city_Name == "karachi" || city_Name == "Karachi"){
//     alert("“Welcome to city of lights”")
// }


//---------------------------X-----------------------------------------X-------------------------------------------------


//Q4

// Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the user is
// female, give the message: Good Morning Ma’am.


// var gender = prompt("Whats your gender");
// if (gender == "female" || gender == "Female"){
//    alert ("Good Morning Maam")
// }


// else if (gender == "male" || gender == "Male"){
//    alert ("Good morning sir")  
// }



//---------------------------X-----------------------------------------X-------------------------------------------------



hhh
// Q3

// var color = prompt("input color of road traffic signal \n e.g red , yellow, green ")
// if (color == "red" || color == "Red"){
//     alert("Must Stop")
// }
// else if (color == "yellow" || color == "Yellow"){
//     alert("Ready to move")
// }
// else if (color == "green" || color == "Green"){
//     alert("Move now")
// }

// Q4
//  var fuel = +prompt("input remaining fuel in car (inlitres) ");
//  if(fuel < 0.25){
//     alert("“Please refill the fuel in your car”")
//  }
//  else{
//     alert("No Problem drive your car")

//  }

// Q5

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true"); //true
// }
// /////////////////////////////
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true"); //true
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true"); //true
// }
// // /////////////////////////////////////
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals"); //true
// }
// ////////////////////////////////////////////// Confusion

// if (true){
//     alert("True");
// }
// if (false){
//  alert("False");
// }
//  //////////////////////////////  Confusion
// if("car" < "cat"){
//         alert("car is smaller than cat");
// }

// Q6
// var totalMark = 300;
// var obtained_sub1 = +prompt("Enter your english marks");
// var obtained_sub2 = +prompt("Enter your math marks");
// var obtained_sub3 = +prompt("Enter your urdu marks");
// var markObtained = obtained_sub1+obtained_sub2+obtained_sub3;
// var percentage = markObtained*100/totalMark;
// document.write("<h1>Mark Sheet</h1></br></br></br>");
// document.write(`Total marks : ${totalMark} </br>`);
// document.write(`Marks obtained : ${markObtained} </br>`);
// document.write(`Percentage : ${percentage}% </br>`);
// if(percentage >= 80){
// document.write(`Grade : A-one </br>`);
// document.write(`Remarks : Excellent </br>`);
// }
// else if(percentage >= 70){
// document.write(`Grade : A </br>`);
// document.write(`Remarks : Good </br>`);
// }
// else if(percentage >= 60){
// document.write(`Grade : B </br>`);
// document.write(`Remarks : You need to improve </br>`);
// }
// else{
// document.write(`Grade : Fail </br>`);
// document.write(`Remarks :  </br>`);
// }

// Q7
// var secretNumber = 4;
// var guessNumber = +prompt("Enter a number (1 to 10)");
// if (secretNumber === guessNumber){
//     document.write("“Bingo! Correct answer”")
// }
// else  if (secretNumber+1 === guessNumber){
//     document.write("“Close enough to the correct answer”")
// }
// else  if (secretNumber-1 === guessNumber){
//     document.write("“Close enough to the correct answer”")
// }
// else {
//     document.write("Sorry try again!")
// }

// Q8

// var userInput =+prompt("Enter a number")
// if (userInput % 3 == 0){
//     document.write("The number is divisible by 3!")
// }
// else{
//     document.write("Sorry try again!")

// }

// Q9
// var userInput = +prompt("Enter a number")
// if (userInput % 2 == 0 ){
//     document.write("The input is Even number")
// }
// else {
//     document.write("The input is Odd number")

// }

// Q10
// var userInput =+prompt("Enter a Temperature 10 to 40 degree range")
// if (userInput >= 40){
//     console.log("It is too hot outside.");
// }
// else if (userInput >= 30){
//     console.log("The Weather today is Normal.”");
// }
// else if (userInput >= 20){
//     console.log("Today’s Weather is cool.”");
// }
// else if(userInput >= 10){
//     console.log("“OMG! Today’s weather is so Cool.””");
// }

// Q11
//  var firstNumber = +prompt("Enter a first Number");
//  var operator = prompt("Enter a operator ( either +, -, * or / )");
//  var secondNumber = +prompt("Enter a second Number");
//  var result;
//  if( operator == "+"){
//     result = firstNumber +secondNumber;
//     console.log(result);

//  }
// else if (operator == "-"){
//     result = firstNumber - secondNumber;
//     console.log(result);

// }
// else if (operator == "*"){
//     result = firstNumber * secondNumber;
//     console.log(result);

// }
// else if (operator == "/"){
//     result = firstNumber / secondNumber;
//     console.log(result);

// }

// Chapter 12 - 13

// Q1
//  var userInput =  prompt("Enter a character")
//  var a = userInput.charCodeAt(0);
// if (a >= 65 && a <=90){
//     console.log( userInput +" is a Uppercase letter");

// }
// else if (a >= 97 && a <=122){
//     console.log( userInput +" is a Lowercase letter");

// }
// else if (userInput>=1 && userInput<=99999999){
//     console.log( `${userInput} is a Number`);

// }
// else{
//     console.log( "Only same charater insert");

// }

// Q2

// var userInput1 = +prompt("Enter a number") ;
// var userInput2 = +prompt("Enter another number");
// if(userInput1 == userInput2){
//     console.log(userInput1 +" is equal to "+ userInput2)
// }
// else if(userInput1 >= userInput2){
//     console.log(userInput1 +" is larger than "+ userInput2)
// }
// else if(userInput1 <= userInput2){
//     console.log(userInput1 +" is lesser than "+ userInput2)
// }

// Q3
// var userInput1 = +prompt("Enter a number");
// if(userInput1 == 0){
//     console.log(userInput1 +" Number is Neutral")
// }
// else if(userInput1 > 0){
//     console.log(userInput1 +" Number is Positive")
// }
// else if(userInput1 < 0){
//     console.log(userInput1 +" Number is Negative")
// }

// Q4

// let userInput = prompt("Write  any signal alphabet");
// if (userInput == "a" || userInput == "e" || userInput == "i" || userInput == "o" || userInput == "u" || userInput == "A" ||userInput == "E" ||userInput == "I" ||userInput == "O" ||userInput == "U" ){
//     alert("true")
// } else {
//     alert("false")
// }

// Q5
//  var password1 = prompt(" Enter  password");

//  if (password1 != ""){
//    var  password2 = prompt("Please enter your password")
//  }
// if(password1 == password2){
//     console.log(" Correct! The password you entered matches the original password")
//  }
// else{
//     console.log("Incorrect password")

// }
// Q6
// This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// document.write(greeting = "Good day");
// }
// else{
//    document.write(greeting = "Good evening ");
// }
// Q7

// var time = +prompt("Enter your time (24 hours clock format like: 1900 = 7pm.)")
// if (time >= 0000 && time < 1200){
//    alert("Good Morning!")
// }
// else if (time >= 1200 && time < 1700){
//    alert("Good Afternoon!")
// }
// else if (time >= 1700 && time < 2100){
//    alert("Good Evening!")
// }
// else if (time >= 2100 && time < 2400){
//    alert("Good Night!")
// }
// else{
//    alert("Soory wrong input")
// }

// Chapter 14 - 17

// Q1-
// var students= [];
// students=['reyyab','yasir','faizan','jazim'];
// console.log(students)
// Q4
// var numbers = [1,4,6,34,5,34,4];
// Q5
// var boolean = [true,false];
// Q6
// var mixed = ["ejhcje",45,'hamza',true , "hello",false,34]

// Q7
//  var mobileNetworks = ['zong','telenor','ufone','warid']

// Q8

// var qualifications = ["SSC", 'HSC', 'BCS',
//     'BS', 'BCOM', 'MS', 'M.Phil', 'PhD'];
//     for(a=0 ; a<qualifications.length;a++){
// console.log(a+1+") "+qualifications[a])
// }
// Q9
// let topMovies =[];
// topMovies[0]=prompt('Enter movie name');
// topMovies[1]=prompt('Enter movie name');
// topMovies[2]=prompt('Enter movie name');
// topMovies[3]=prompt('Enter movie name');
// console.log("1)"+topMovies[0]);
// console.log("2)"+topMovies[1]);
// console.log("3)"+topMovies[2]);
// console.log("4)"+topMovies[3]);
// console.log("Length of the array:"+topMovies.length);

// Q10
// const favoriteCars =['Audi', 'Suzuki','Toyota','Tesla'];
// console.log(`Fovorite Cars`)
// console.log(favoriteCars)
// console.log(`First index of the array:${ favoriteCars.indexOf('Audi')}`)
// console.log("Car at first index of the array:"+favoriteCars[favoriteCars.indexOf('Audi')])
// console.log(`First index of the array:${ favoriteCars.length}`)
// console.log("Car at first index of the array:"+favoriteCars[favoriteCars.length-1])

// Q11
// var students = ["Yasir", "Faizan", "Jazim", "hamza"];
// var marks = [320, 230, 480, 345];
// for (a = 0; a < students.length; a++) {
//   document.write(
//     `Score of ${students[a]} is ${marks[a]}. Percentage: ${
//       (marks[a] / 500) * 100
//     }%</br>`
//   );
// }
// Q12
// var colorNames = ["red", "green", "blue",'pink','black'];
// document.write(colorNames+"</br>");
//a
// var colorAssStart = prompt("Enter color name show start the list");
// colorNames.unshift(colorAssStart);
// document.write(colorNames+"</br>");
//b
// var colorAddEnd = prompt("Enter color name show End the list");
// colorNames.push(colorAddEnd);
// document.write(colorNames+"</br>");
//c
// var colorAddStart1 = prompt("Enter two color name show Start the list\nFirst color name insert");
// colorNames.unshift(colorAddStart1);
// var colorAddStart2 = prompt("Enter two color name show Start the list \nSecond color name insert");
// colorNames.unshift(colorAddStart2);
// document.write(colorNames+"</br>");
//d
// colorNames.shift();
// document.write(colorNames+"</br>");
//e
// colorNames.pop();
// document.write(colorNames+"</br>");
//f
// var index1 = +prompt("Enter position ");
// var colorF = prompt("Enter color name");
// colorNames.splice(index1-1,0, colorF);
// document.write(colorNames+"</br>");
//g
// var index1 = +prompt("Enter position ");
// var index2 = +prompt("how many colors wants to delete");
// colorNames.splice(index1-1,index2);
// document.write(colorNames+"</br>");

// Q13
// var score = ["320","230",'480','120']
// document.write("input = "+score+"</br>");
// document.write("ascending = "+score.sort());

// Q14
// var fruits = ['strawberry', 'apple', 'orange', 'banana'];
// console.log("Fruits list:\n"+fruits);
// console.log("Ordered fruits list:\n"+fruits.sort())

// Q15
// var cities = ['karachi','lahour','islamabad','quetta','peshawar']
// document.write(cities+"</br>");
// document.write(cities.slice(2,5));

// Q16

// var arr = ['This ', ' is ', ' my ', ' cat'];
// document.write("Array:</br>"+arr+"</br>");
// var text = arr.join("");
// document.write("String:</br>"+text+"</br>");

// Q17

// var queue =  ['hello','hefk','sjhdj','asdh','jgh','jkfd','aksjd']
// document.write(queue+"</br>");
// queue.shift();
// document.write(queue+"</br>");
// queue.shift();
// document.write(queue+"</br>");
// queue.shift();
// document.write(queue+"</br>");
// queue.shift();
// document.write(queue+"</br>");
// queue.shift();
// document.write(queue+"</br>");
// queue.shift();
// document.write(queue+"</br>");

// Q18

// var queue =  ['hello','hefk','sjhdj','asdh','jgh','jkfd','aksjd']
// document.write(queue+"</br>");
// queue.pop();
// document.write(queue+"</br>");
// queue.pop();
// document.write(queue+"</br>");
// queue.pop();
// document.write(queue+"</br>");
// queue.pop();
// document.write(queue+"</br>");
// queue.pop();
// document.write(queue+"</br>");
// queue.pop();
// document.write(queue+"</br>");

// Q19
// document.write(`<select name="cars" >
// <option value="volvo">Apple</option>
// <option value="saab">Samsung</option>
// <option value="mercedes">Motorola</option>
// <option value="audi">Nokia</option>
// <option value="audi">Sony</option>
// <option value="audi">Haier</option>
// </select>`)

// Q20
// Declare and initialize an empty multidimensional array.
// (Array of arrays
// var Arr=[[,[]],[],[]];
// console.log(Arr[0])

// Q21
// Declare and initialize a multidimensional array representing
// the following matrix:
// var Arr=[[0,[1]],[2],[3]];
// document.write(Arr)

//  0 1 2 3
//  1 0 1 2
//  2 1 0 1

//  Assignment 17 - 20
// Q2  Declare and initialize a multidimensional arrayrepresenting the following matrix:
// let array1 = ["0", "1", "2", "3"];
// let array2 = ["1", "0", "1", "2"];
// let array3 = ["2", "1", "0", "1"];
// console.log(array1);
// console.log(array2);
// console.log(array3);

// Q3

// for(a=1;a<11;a++  ){
//     console.log(a);
// }

// Q4

// var input1 = +prompt ("Enter a number to show its multiplication table")
// var input2 = +prompt ("Enter length multiplication table")
// console.log(`multiplication table of ${input1} Length ${input2}`)
// for (let a=1 ; a<=input2 ;a++){
//     console.log(`${input1} x ${a} = ${input1*a}`)

// }

// Q5

// var fruits = ['apple', 'banana', 'mango', 'orange','strawberry']
// console.log(fruits)
// console.log(fruits.length)
// for(a=0;a<fruits.length;a++  ){

//     console.log(`Element at index ${a} is ${fruits[a]}`)

// }

// Q6
// a Counting
// for (let a = 1;a<=15;a++ ){
//     console.log(a);
// }
// b  Reverse counting
// for (let a = 10;a>=1;a--){
//     console.log(a);
// }
// c Even
// for (let a =0;a<=20;a++ ){
//     if (a%2==0){
//     console.log(a);
// }
// }
// d Odd
// for (let a =0;a<=20;a++ ){
//     if (a%2==1){
//     console.log(a);
// }
// }
// e Series 
// for (let a =2000;a<=20000;a++ ){
//     if(a%2000==0){
//     console.log(a/1000+'k');
// }
// }

// Q7
// let a = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// let input  = prompt("Welcome to Marhaba Bakery. What do you want to order Sir/Ma'am?")
// let flag = false;
// let indexNumber ;
// for(let x=0;x<a.length;x++){
//  if(a[x].includes(input)){
//     flag=true;
//     indexNumber = x;
//  }
// }
// console.log(indexNumber)
// if(indexNumber>=0){
//     console.log(`${input} is available at index ${indexNumber} in our bakery`)
// }
// else{
// console.log(`We are sorry. ${input} is not available in our bakery `)
// }


// Q8
// let numberArray = [24,53,78,110,91,12]
// let maxNumber = 0
// for(let x=0; x<numberArray.length; x++){
//     if(maxNumber<numberArray[x])
//     maxNumber = numberArray[x]
    
// }
// console.log(`The Largest number is ${maxNumber}`)

// Q9
// let numberArray = [24,53,78,110,91,12,5]
// let maxNumber = numberArray[0]
// for(let x=0; x<numberArray.length; x++){
//     if(maxNumber>numberArray[x])
//     maxNumber = numberArray[x]
    
// }
// console.log(`The smallest number is ${maxNumber}`)
// Q10

// for (let a=1 ;a<=100;a++){
//     if(a%5==0){
//         console.log(a)
//     }
// }


// Assignment 35-38

// Q1
// function dateTime(){
// const date =new Date();
// let dateTimeString = date.toLocaleString();
// document.write(date+"</br>");
// document.write(dateTimeString+"</br>");
// }
// dateTime();

// const date_time = function() {
//     const date =new Date();
// document.write(date+"</br>");
// }
// date_time();

// // Q2
// function myfunction1(){
//     var firstName =prompt("Enter first name");
//     var secondName =prompt("Enter second name");
//     alert(`Hello, ${firstName} ${secondName}`)
// }
// myfunction1();
// Q3
//     const myfunction = function(){
//     var firstNum =Number(prompt("Enter first number")) ;
//     var secondNum =Number( prompt("Enter second number"));
//     return firstNum+secondNum;
// }
// console.log(myfunction());

// const mynewfunction = ()=>{var firstNum =Number(prompt("Enter first number")) ;
// var secondNum =Number( prompt("Enter second number"));
// return firstNum+secondNum;}

// console.log(mynewfunction());

// Q4
// const myfunction2 = function(){
//     var firstNumber = +prompt("Enter a first Number");
//  var operator = prompt("Enter a operator ( either +, -, * or / )");
//  var secondNumber = +prompt("Enter a second Number");
//  var result;
//  if( operator == "+"){
//     result = firstNumber +secondNumber;
//     return result;

//  }
// else if (operator == "-"){
//     result = firstNumber - secondNumber;
//     return result;

// }
// else if (operator == "*"){
//     result = firstNumber * secondNumber;
//     return result;

// }
// else if (operator == "/"){
//     result = firstNumber / secondNumber;
//     return result;

// }
// }
// console.log(myfunction2());
// console.log(Math.round(myfunction2()));
// console.log(Math.ceil(myfunction2()));
// console.log(Math.floor(myfunction2()));
// console.log(Math.trunc(myfunction2()));

// Q5

// const myfunction3 = (a)=>{console.log(a*a)}
// // myfunction3();

// // Q6
// . Write a function that computes factorial of a number.
// let result;
// const factorial = function(n){
//     result = n;
//     for(let a=1; a<n; a++){
        
//         result *= (n-a) 
//     }
//     return result
// }
// console.log(factorial(5))

// Q7
// function couting(){
// var input1 =  prompt("Enter a start number");
// var input2 = prompt("Enter a second number");
// for (a=input1; a<=input2;a++ ){
//     document.write(a+"</br>")
// }
// }
// couting();

// Q8

// var base1 = +prompt('Enter a base value');
// var perpendicular1 = +prompt('Enter a perpendicular value');
// var Hypot  = calculateHypotenus(base1,perpendicular1)
// function calculateHypotenus(base, perpendicular) {

//       var hypoteuse = (square(base) + square(perpendicular));
//       return hypoteuse;
//       function square(number) {
//         return number * number
//     }
//   }
// console.log(Hypot);
// var hypoSquare = (base1+perpendicular1)*(base1+perpendicular1)
// console.log(hypoSquare)

// Q8
// var base1 = +prompt('Enter a base value');
// var perpendicular1 = +prompt('Enter a perpendicular value');

// function calculateHypotenuse(base1,perpendicular1){
//     var Hypotenuse =  calculateSquare(base1) + calculateSquare(perpendicular1)
//     return "Rigth angle triangle answer is \n"+Hypotenuse;
//     function  calculateSquare(input){
//         return input*input;

//     }


// }
// console.log(calculateHypotenuse(base1,perpendicular1))


// Q9
//i. Arguments as value
// const argumentAsValue = (width,height)=>{ return width*height}
// console.log(argumentAsValue(5,6))
// Arguments as variables
// var width  = +prompt("Enter a value of width ")
// var height  = +prompt("Enter a value of height ")
// const argumentAsVariable = (width,height)=>{ return width*height}
// console.log(argumentAsVariable(width,height))

// 10

// var input =  prompt("Enter a Value to check word is  palindrome or not") || "madam" ;
//  console.log(input[0])
//  console.log( Math.floor(input.length/2))
// function myfunction(){
// for(var i=0; i<=Math.floor((input.length/2)-1);i++){

//   if (input[i]==input[input.length-(i+1)]){
//     console.log("palindrome")

//   }
//   else{
//      console.log("Sorry")
//   }

// }
// }
// myfunction()

// Q11

// var input =prompt("Enter paragraph atleast one line");
// var capitalFirstWord = capitalizeFirstLetter(input);
// console.log(capitalFirstWord)
