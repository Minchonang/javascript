// console.log(Math.PI);
// console.log(Math.random()); -> method
// console.log(Math.floor(3.88));

var MyMath = {
    PI: Math.PI,
    random: function(){
        return Math.random();
        },
    floor: function(val){
        return Math.floor(val);
        } 
}
console.log(MyMath.PI);
console.log(MyMath.random());
console.log(MyMath.floor(3.888));

MyMath_PI = Math.PI;
function MyMath_random(){
    return Math.random();
}
function MyMath_floor(val){
    return Math.floor(val);
}