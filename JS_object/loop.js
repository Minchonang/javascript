var memberArray = ['alpha', 'beta','gamma','delta'];

console.group('array loop');
var i = 0;
while(i < memberArray.length){
    console.log(i, memberArray[i]);
    i = i + 1;
}
console.groupEnd('array loop');

var memberObject = {
    'a' : 'alpha',
    'b' : 'beta',
    'g' : 'gamma',
    'd' : 'delta'
}

console.group('object loop');
for(var name in memberObject){
    console.log(name, memberObject[name]);
}
console.groupEnd('object loop');