// let a = []
// let b= []
// console.log(a==b);
// console.log(a===b); yh memory location ko compare krne lagta hai

// let a=[]
// let b=a;
// console.log(a==b);
// console.log(a===b);

// let a=[20]
// let b=[20];
// console.log(a[0]==b[0]);
// console.log(a[0]===b[0]); yh value compare krega

// let a = [1,2,3,4]
// let z = {name:"sonu"}
// console.log(...a); iskie destructuring hone ke karn array se bahar aa jata hai


// console.log(typeof NaN);
// let data = 10- -10
// console.log(data);

// const set = new Set([1,2,3,4,5,5]) 
// console.log(set); set duplicate value ko remove kr deta hai

// let data = {name:"monu"}
// console.log(delete data.name);

// let data = {name:"monu"}
// console.log(delete data);

// let data = ["peter","anil","ram"];
// let  [,,y]=data
// console.log(y); 

// let data = ["peter","anil","ram"];
// let  [,y]=data
// console.log(y);

// let data ={name:"ram",age:20,skills:"js"}
// let {age}=data
// console.log(age);

// Number Pattern

// left tringle
// let n=4
// let str=""
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         str+=j
//     }
//     str+="\n"
// }
// console.log(str);


// let n=4
// let str=""
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         str+=i
//     }
//     str+="\n"
// }
// console.log(str);

// let n=4
// let str=""
// let count=1;
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         str+=count;
//         count++
//     }
//     str+="\n"
// }
// console.log(str);




// let n=4
// let str=""
// let count = 1
// for(let i=1;i<=n;i++){
//     for(let j=n;j>=i;j--){
//         str+=" "
//     }
//     for(let k=1;k<=i;k++){
//         str+=count+" "
//         count++
//     }
//     str+="\n"
// }
// console.log(str);


// JavaScript Pattern
// Right Angle Pattern
// let n = 5;
// let str = "";
// for(i=1;i<=n;i++){
//     for(j=1;j<=i;j++){
//         str+="*"
//     }
//     str+="\n"
// }
// console.log(str);

// mirror right angle pattern
// let n=5;
// let str=""
// for(i=n;i>=1;i--){
//     for(j=1;j<i;j++){
//         str+=" "
//     }
//     for(k=n;k>=i;k--){
//         str+="*"
//     }
//     str+="\n"
// }

// console.log(str);

// Inverted right angle pattern
// let n=5
// let str = ""

// for(i=1;i<=n;i++){
//     for(j=n;j>=i;j--){
//         str+="*"
//     }
//     str+="\n"
// }

// console.log(str);

// inverted mirror right angle pattern
// let n=5
// let str = ""
// for(i=n;i>=1;i--){
//     for(j=n;j>=i;j--){
//         str+=" "
//     }
//     for(k=1;k<=i;k++){
//         str+="*"
//     }
//     str+="\n"
// }
// console.log(str);

// Pyramid pattern
// let n=5
// let str = ""

// for(i=1;i<=n;i++){
//     for(j=n;j>i;j--){
//         str+=" "
//     }
//     for(k=1;k<=i*2-1;k++){
//         str+="*"
//     }
//     str+="\n"
// }

let n=5
let str = ""
for(i=n;i>=1;i--){
    for(j=n;j>=i;j--){
        str+=" "
    }
    for(k=1;k<=i*2-1;k++){
        str+="*"
    }
    str+="\n"
}
for(i=2;i<=n;i++){
    for(j=n+1;j>i;j--){
        str+=" "
    }
    for(k=1;k<=i*2-1;k++){
        str+="*"
    }
    str+="\n"
}

console.log(str);

// let n=5
// let str=""
// for(i=1;i<=n;i++){
//     for(j=1;j<=i;j++){
//         str+="* "
//     }
//     str+="\n"
// }
// for(i=1;i<=n;i++){
//     for(j=n-1;j>=i;j--){
//         str+="* "
//     }
//     str+="\n"
// }
// console.log(str);

// Practice Question
// Q1 Givan a string , reverse each word
// let word = "hello kaise ho"
// let result=word.split(" ").map(function(e){
//     return e.split("").reverse().join("")
// })
// console.log(result.join(" "));
// How to check  if an object is an array or not? provide some code

// function checkArray(e){
//     return Array.isArray(e)
// }
// console.log(checkArray([]))
// console.log(checkArray({}))

// How to empty an array in js
// let arr = [1,2,3,4,5]
// arr.length=0
// console.log(arr);

//  how would you cj=heck if a number is an integer
// let a=13.5;
// if(a%1===0){
//     console.log(`${a} is a integer number`);
// }else{
//     console.log(`${a} is a not integer number`);
// }

// make this work :
// duplicate([1,2,3,4,5])
// function duplicate(e){
//    return e.concat(e)
// }
// console.log(duplicate([1,2,3,4,5]))

// function question

// write a js function that reverce a number
// function reve(n){
//     return Number(n.toString().split("").reverse().join(""))
// }
// console.log(reve(123))

// let arr=[12345]
// let result= Number(arr.toString().split("").reverse().join(""))
// console.log(result)

// function reversekro(num){
//     var rev = 0
//     while(num>0){
//         var rem=num%10;
//         rev=rev*10+rem;
//         num=Math.floor(num/10)
//     }
//     return rev;
// }
// console.log(reversekro(1234));

// Write a js function that check whether a passed string palindrome or not
// function stringPalCheck(str){
//     let result = str.split("").reverse().join("");
//     if(result===str){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(stringPalCheck("poop"));
// console.log(stringPalCheck("loop"));

// write a js function that return a passed string with letters in alphabetical order
// function alpha(str){
//     let result = str.split("").sort().join("");
//     return result
// }
// console.log(alpha("apple"));

// Write a js function that acceptd a string as a parameter and convert the first letter if each word of the string in upper case.
// function upperCases(str){
//     let result = str.split(" ").map(function(item){
//        return item.charAt(0).toUpperCase()+item.substring(1)
//     })
//     return result.join(" ");
// }

// console.log(upperCases("hello sonu"));

// function occ(str){
//     let occurense={}
//     str.split("").forEach(function(elem){
//         if(occurense.hasOwnProperty(elem)===false){
//             occurense[elem] = 1;
//         }else{
//             occurense[elem]++
//         }
//     })
//     return occurense;
// }
// console.log(occ("apple"));
// function occ(str){
//     let occerence={}
//     str.split("").forEach(function(e){
//         if(occerence.hasOwnProperty(e)===false){
//             occerence[e]=1;
//         }else{
//             occerence[e]++
//         }
//     })
//     return occerence;
// }
// console.log(occ("sonuu"));
// function occ(str){
//     let occerence = {}
//     str.split("").forEach(function(e){
//         if(occerence.hasOwnProperty(e)===false){
//             occerence[e]=1
//         }
//         else{
//             occerence[e]++
//         }
//     })
//     return occerence;
// }
// console.log(occ("Ram Kumar"));
// function abc(str){
//     let occerence={}
//     str.split("").forEach(function(e){
//         if(occerence.hasOwnProperty(e)===false){
//             occerence[e]=1
//         }else{
//             occerence[e]++
//         }
//     })
//     return occerence
// }
// console.log(abc("pool"));

// Loops Question
// 1 loop an array and add all memebrs of it
// let arr = [1,2,3,4,5]
// let sum = 0
// arr.forEach(function(e){
//     sum = sum+e
// })
// console.log(sum);

// 2 in an array of numebrs and strings, only add those members which are not strings
// let arr = [12,"ram",12,"shyam"]
// let sum= 0
// arr.forEach(function(e){
//     if(typeof e==="number"){
//         sum = sum+e
//     }
// })
// console.log(sum);

// 3 loop an array of objects and remove all objects which don't have gender's vale male
// let arr = [
//     {
//         name:"sonu",
//         gender:"male"
//     },
//     {
//         name:"harsita",
//         gender:"female"
//     },
//     {
//         name:"monu",
//         gender:"male"
//     },
//     {
//         name:"tina",
//         gender:"female"
//     },
//     {
//         name:"anchal",
//         gender:"female"
//     }
// ]
// let count = 0
// arr.forEach(function(e){
//     if(e.gender!=="male") count++
// })
// for(let i=1; i<=count;i++){
//     for(let j=0; j<arr.length;j++){
//         if(arr[j].gender !== "male"){
//             arr.splice(j,1)
//         }
//     }
// }
// console.log(arr);
// Hoisting
// sayhello()
// console.log(i);
// function sayhello(){
//     console.log("heloo");
// }
// var i=10

// Return
// let ABC = (a,b)=>{
//     return a+b;
// }
// console.log(ABC(6,10));

// Array
// let arr = [1,2,3,4,5]
// Array method
// arr.push(6)
// console.log(arr);
// arr.pop()
// console.log(arr);
// arr.shift()
// console.log(arr);
// arr.unshift(0)
// console.log(arr);

// Object
// let Student={
//     name:"ram",
//     fname:"Abc",
//     College:"xyz"
// }
// console.log(Student.College);


// 1 Word vs Keywords
// Ek aise word jiska js me koi matalb nhi hai use word kahte hai,
// aise word jiska js me koi matalb hota hai use keyword kahte hai ex. let var const for while function do do-wile this ect.

// variables and constants
// code me koi bhi data store karne ke liye jiska use hota hai use variable kahte hai

// hoisting
// variable and function and are hoisted which means there declaration is moved on the top of the code
// var a=10
// var b =a
// b=20
// console.log(a);
// console.log(b);
// var a=[1,2,3]
// var b=a
// b.pop()
// console.log(a);
// console.log(b);

// const student = {
//    name:"Mohan",
//    marks:99,
//    priMarks: function(){
//     console.log("marks = ", this.marks);
//    } 
// }
// console.log(student.priMarks());

// const employee = {
//     CalaTax(){
//         console.log("tax rate is 10%");
//     }
// }

// const karanArjun = {
//     salary:30000
// }

// karanArjun.__proto__=employee

// console.log(karanArjun);


// Callbacks, promicess, async-await

// sync
// console.log("one");
// console.log("two");
// console.log("three");

// Async
// console.log("one");
// console.log("two");
// function hello(){
//     console.log("Hello");
// }
// setTimeout(hello,2000)
// console.log("three");
// console.log("four");

// function sum(a,b){
//     console.log(a+b);
// }

// function calc(a,b, sumcallbaks){
//     sumcallbaks(a,b)
// }
// calc(1,3,sum)

// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000)
// }

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3)
//     })
    
// })

// Promise

// let promice = new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     // resolve("success")
//     reject("Some error")
// })
// console.log(promice);

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("succes")
            
//         },10000)
//     })
// }


// const getPromise = ()=>{
//     return new Promise((reslove,reject)=>{
//         console.log("I am a Promise");
//         // reslove("success")
//         reject("network error")
//     })
// }

// let promise= getPromise()
// promise.then((res)=>{
//     console.log("fullfiled",res);
// });
// promise.catch((err)=>{
//     console.log("Some Error",err);
// })

// const asyncFunc1 = ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Some data 1");
//             resolve("success")
//         },3000)
//     })
// }
// const asyncFunc2 = ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Some data 2");
//             resolve("success")
//         },3000)
//     })
// }


// console.log("fetching data 1...");
// let p1 = asyncFunc1()
// p1.then((res)=>{
//     console.log(res);
//     console.log("Fetching Data 2...");
//     let p2 = asyncFunc2();
//     p2.then((res)=>{
//         console.log(res);
//     })
// })


// const getData = (dataId,getnextData)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Data",dataId);
//             resolve("success")
//             if(getnextData){
//                 getnextData();
//             }
//         },5000)
//     })
// }
// const getData2 = (dataId,getnextData)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Data",dataId);
//             resolve("success")
//         },5000)
//     })
// }


// getData(1).then((res)=>{
//     return getData(2);
//  }).then((res)=>{
//     console.log(res);
//     return getData(3)
//  })

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success")
//         },3000)
//     })
// }

// async function getAllData(){
//     await getData(1)
//     await getData(2)
//     await getData(3)
//     await getData(4)
//     await getData(5)
//     await getData(6)
//     await getData(7)
//     await getData(8)
//     await getData(9)
// }

// class User{
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
//     capital(){
//         return `${this.username.toCapitalize()}`
//     }
// }
// const Ram = new User("ram","ram@gmail.com",1234)
// console.log(Ram.encryptPassword());
// console.log(Ram.changeUserName());
// // console.log(Ram.capital());
// console.log(Ram);