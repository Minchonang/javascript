var Links = {
    setColor: function(color){
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
            alist[i].style.color = color;
            i = i + 1;
        }
    }
}
var A ={
    setColor: function(color){
        document.querySelector('a').style.color = color;
    },
    setBackgroundColor: function(color){
        document.querySelector('a').style.color = color;
    }
}
function night_day_handler(self){
var target = document.querySelector('body');
var target_title = document.querySelector('a');
    if(self.value === 'Night'){
        target.style.backgroundColor = 'rgb(60, 60, 60)';
        target.style.color = 'white';
        target_title.style.color = 'powderblue';
        self.value = 'Day';
        self.style = 'background-color: white';
    } else {
        target.style.backgroundColor = 'white';
        target.style.color = 'black';
        target_title.style.color = 'blue';
        self.value = 'Night';
        self.style = 'background-color: midnightblue; color: yellow'; 
    }
}