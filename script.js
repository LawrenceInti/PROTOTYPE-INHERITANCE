// let parent={
//     name:"lawrence",
//     lname:"inti",
//     age:22,
//     getName:function(){
//         return this.name+ this.lname;
//     },
//     getRoll:function(){
//         return this.rollNo;
//     }
// }

// let child={
//     rollNo:27,
//     city:"eluru",
//     // __proto__:parent //method 1
// }
// child.__proto__=parent;//method 2

// console.log(child.getName())
// console.log(child.getRoll())


//Que 2
// // simple example of prototype inheritance
// let parent={
//     name:"lawrence",
//     lname:"inti",
//     age:23,
//     getName:function(){
//         return this.name+ this.lname;
//     },
//     getRoll:function(){
//         return this.rollNo;
//     },
//   message1:function(){
//   return "Hii prepbytes Dev"
//   }
// }

// let child={
//     rollNo:27,
//     city:"eluru",
//   message1:function(){
//   return "hello world"
//   },
//      __proto__:parent //method 1
// }
// //child.__proto__=parent;//method 2

// let grandChild={
//   class:"Btech",
//   __proto__:child
// }

// console.log(child.getName())
// console.log(grandChild.getRoll())
// console.log(grandChild.message1())


//Que 3
// Array.prototype.sum=function(){
//     return this.reduce((accum, curre) => accum + curre);
// }

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [10, 20, 30];
// const array3 = [0, 5, -5, 10];

// const sumofarray1=array1.sum();
// const sumofarray2=array2.sum();
// const sumofarray3=array3.sum();

// console.log(sumofarray1)
// console.log(sumofarray2)
// console.log(sumofarray3)


//Que 4
function retrieveAll(){
    const object1 = {
      a: 1,
      b: 2,
      c: 3
    };
    console.log(Object.getOwnPropertyNames(object1));
    let proto=Object.getPrototypeOf(object1);
    console.log(proto);
    }
    retrieveAll();