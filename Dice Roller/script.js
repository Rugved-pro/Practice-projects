const rollbtn=document.getElementById("Rollbtn");
const Result=document.getElementById("Result");

const diceimages=document.getElementById("Images");
function rollDice(){
    const numOfDice=document.getElementById("numOfDice").value;
    const values=[];
    const images=[];
    for(let i=0;i<numOfDice;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="Dice images/dice${value}.png">`);
    }
    Result.textContent=`dice: ${values.join(`,`)}`;
    diceimages.innerHTML=images.join(' ');
}