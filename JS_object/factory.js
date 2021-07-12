// constructor

function Person(name, first, second, third){
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function(){
        return this.first + this.second + this.third;
    }
    this.avg = function(){
        return (this.first + this.second + this.third)/3;
    }
}

var kim = new Person(kim, 100, 200, 300);
var lee = new Person(lee, 200, 400, 300);
// console.log("kim. score: ",kim.first, kim.second, "total score: ",kim.sum(kim.first, kim.second));
console.log("kim. score: ", kim.first, kim.second, kim.third); // kim score
console.log("total score: ", kim.sum());
console.log("Average Score: ", kim.avg())

console.log("---");

console.log("lee. score: ", lee.first, lee.second, lee.third); // lee score
console.log("total score: ", lee.sum());
console.log("Average Score: ", lee.avg());

console.log("---");

/* 
var Today = new Date('2021-07-07');
console.log('this year', Today.getFullYear());
console.log('this month', Today.getMonth());

console.log("---");

console.log('Date', Date);

console.log("---");
*/


console.log("Person()", Person());
console.log("Person()", new Person()); // -> constructor