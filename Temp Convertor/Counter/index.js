
const increase=document.getElementById("UP");
const decrease=document.getElementById("DOWN");
const reset=document.getElementById("RESET");
const Counter=document.getElementById("Counter");
let x=0;
increase.onclick=function(){
    x++;
    Counter.textContent=x;
}
decrease.onclick=function(){
    x--;
    Counter.textContent=x;
}
reset.onclick=function(){
    x=0;
    Counter.textContent=x;
}

