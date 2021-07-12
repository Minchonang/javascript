var superObject = {superVal: "super"};
// var subObject = {subVal: "sub"};

// subObject.__proto__ = superObject;
var subObject = Object.create(superObject);
subObject.subVal = 'sub';
// debugger;

console.log('subObject.subVal: ', subObject.subVal);
console.log('subObject.superVal: ', subObject.superVal);

subObject.subVal = 'sub';
console.log('superObject.superVal: ', superObject.superVal);

var kim = {
    name: 'kim',
    first: 100, second: 200,
    sum: function() {return this.first + this.second}
}

var lee = Object.create(kim);
lee.name = 'lee';
lee.first = 100;
lee.second = 400;
lee.avg = function(){
    return this.sum() / 2;
}
// var lee = {
//     name: 'lee',
//     first: 100, second: 400,
//     avg: function(){
//         return this.sum() / 2;
//     }
// }
// lee.__proto__ = kim;


console.log("kim.sum(): ",kim.sum());
console.log("lee.sum(): ",lee.sum());
console.log("lee.avg(): ",lee.avg());
