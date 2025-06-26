const Input=document.getElementById("Input");
const toFahrenheight=document.getElementById("ToFahrenheight");
const toCelsius=document.getElementById("ToCelsius");
const Submit=document.getElementById("button");
const Result=document.getElementById("Ans");
function Convert(){
    let x=Input.value;
    console.log(x);
    let ans;
    if(toCelsius.checked){
        ans=(x-32)*(5/9);
        Result.textContent=`${ans} °C`;
    }
    if(toFahrenheight.checked){
        ans=x*1.8+32;
        Result.textContent=`${ans} °F`;
    }
}
    Submit.onclick=function(){
        Convert();
    };
