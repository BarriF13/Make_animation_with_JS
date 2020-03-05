//setInterval

var counter = 10;
var item = document.getElementById("nav");
  item.innerHTML = "you will redirect to another page in "+counter+" second";

function show()
{
    counter--;
    item.innerHTML = "you will redirect to another page in "+counter+" second";

    if(counter ==0){
      clearInterval(timer);
      window.location= "https://www.cats.org.uk/adopt-a-cat/choosing-a-cat";
    }

}
//setTimeout(show, 2000); works only once
//setInterval(show, 2000); keeps coming
var timer = setInterval(show, 1000);
