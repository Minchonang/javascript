// call
console.log("---call---");
//

var kim = {name: 'kim', first: 100, second: 200}
var lee = {name: 'lee', first: 200, second: 400}
// lee.__proto__ = kim; >> __proto__ 사용할 때

/*
function sum() {
    return this.first + this.second;
} 
*/
function sum(prefix){
    return prefix + (this.first + this.second);
}
// sum();
sum.call(kim); // this = kim
console.log("sum.call(kim): ", sum.call(kim, '--> ' )); // call(this, parameter_1, parameter_2, ...)
console.log("sum.call(lee): ", sum.call(lee, '>>> '));

// bind
console.log('---bind---');

var kim_sum =  sum.bind(kim, '>-> ');
console.log('kim_sum()', kim_sum());