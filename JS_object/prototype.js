//prototype

function Person(name, first, second, third){
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
}
Person.prototype.sum = function(){
    return this.first + this.second + this.third;
}
Person.prototype.avg = function(){
    return (this.first + this.second + this.third) / 3;
}

var kim = new Person(kim, 100, 200, 300);
// kim.sum = function(){
//     return 'modified: ' + (this.first + this.second + this.third);
// }
// kim.avg = function(){
//     return 'modified: ' + ((this.first + this.second + this.third)/3)
// }

var lee = new Person(lee, 200, 400, 300);
// lee.sum = function(){
//     return 'modified: ' + (this.first + this.second + this.third);
// }
// lee.avg = function(){
//     return 'modified: ' + ((this.first + this.second + this.third)/3)
// }

console.log("kim. score: ", kim.first, kim.second, kim.third); // kim score
console.log("total score: ", kim.sum());
console.log("Average Score: ", kim.avg())

console.log("---");

console.log("lee. score: ", lee.first, lee.second, lee.third); // lee score
console.log("total score: ", lee.sum());
console.log("Average Score: ", lee.avg());

console.log("---");
