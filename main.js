//setInterval

var counter = 10;





function show()
{
    counter++;
    alert('Animation yay');
    if (counter == 5){
      clearInterval(timer);
    }
}
//setTimeout(show, 2000); works only once
//setInterval(show, 2000); keeps coming
var timer = setInterval(show, 2000);
