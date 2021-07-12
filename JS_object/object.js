var memberArray = ['alpha', 'beta','gamma','delta'];
console.log("memberArray[1]", memberArray[1]);

var memberObject = {
    'a' : 'alpha',
    'b' : 'beta',
    'g' : 'gamma',
    'd' : 'delta'
}
console.log("memberObject.g: ", memberObject.g);
console.log("memberObject.['g']: ", memberObject['g']);

memberObject.g = 'gammma' //update
console.log(memberObject.g);
delete memberObject.d
console.log('memberObject.d', memberObject.d);