var kim = {
    name: 'kim',
    first: 100,
    second: 200,
    sum: function(){
        return this.first + this.second;
    }
}
// console.log("kim. score: ",kim.first, kim.second, "total score: ",kim.sum(kim.first, kim.second));
console.log("kim. score: ", kim.first, kim.second);
console.log("total score: ", kim.sum());