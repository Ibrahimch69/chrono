
let htmlms = document.getElementById('ms');
let htmlsec = document.getElementById('sec');
let htmlmin = document.getElementById('min');
let htmlhour = document.getElementById('hour');
let stopwatch = false;




let s = 60
let m = 25


let sec = document.getElementById("sec")
let min =document.getElementById("min")

sec.innerHTML = s
min.innerHTML = m

function start() {
   let int =setInterval(comonce,500)
    
function stop (){
clearInterval(int)
console.log("h");
}





} 







function comonce() {



    if (s == 0) {
       m -= 1
       min.innerHTML = m
       s =60
    }else{
         s -= 1
        sec.innerHTML= s
        
    }

}
let i = 0;
    function change() {
    let doc = document.getElementById("background");
    let color = ["red", "blue", "orange", "green"];
    doc.style.backgroundColor = color[i];
    i = (i + 1) % color.length;
    }
    setInterval(change, 1000);